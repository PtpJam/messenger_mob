import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Modal } from 'react-native';
import { ActivityIndicatorContainer, MainContainer } from './styles';
import { TChatMainProps } from './types';
import {
  MessageFromDB,
  MessageFromWS,
  Room,
} from '@common/socket/interface/chat.interface';
import { Service } from '@common/services';
import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { Sender } from './components/Sender';
import { useUserData } from '@store/tools';
import socket from '@common/socket/connection';
import RNBlobUtil from 'react-native-blob-util';
import { Platform } from 'react-native';
// import RNFS from 'react-native-fs';
import { PermissionsAndroid } from 'react-native';
import { ChatGptService } from '@common/services/ChatGpt';
import { ChatGptPopUp } from './components/ChatGptPopup';
import { ModalBase } from '@components/common/Modal';
import Constants from 'expo-constants';
import { DaleePopUp } from './components/DaleePopup';
import { DocumentPickerAsset } from 'expo-document-picker';

export const Chat = ({ route, navigation }: TChatMainProps) => {
  const { user } = useUserData();
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(true);
  const [isChatInfoLoading, setIsChatInfoLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<MessageFromDB[]>([]);
  const [chatInfo, setChatInfo] = useState<Room | null>(null);
  const [messageText, setMessageText] = useState('')

  const [isChatGptPopupVisible, setIsChatGptPopupVisible] = useState(false)
  const [chatGptRequestText, setChatGptRequestText] = useState('')

  const [isDaleePopupVisible, setIsDaleeGptPopupVisible] = useState(false)
  const [daleeRequestText, seDaleeRequestText] = useState('')

  const [selectedFile, setSelectedFile] = useState<DocumentPickerAsset[] | null>(null);

  useEffect(() => {
    // const loadMessages = async () => {
    //   try {
    //     const res = await Service.ChatService.loadMessages({
    //       roomUid: route.params.roomUid,
    //     });
    //     setMessages(res.data);
    //   } catch (err) {
    //     Alert.alert('Ошибка при загрузке сообщений');
    //   } finally {
    //     setIsMessagesLoading(false);
    //   }
    // };

    const loadChatInfo = async () => {
      try {
        const res = await Service.ChatService.getRoomInfo({
          roomUid: route.params.roomUid,
        });
        // const messa = await Service.ChatService.loadMessages({
        //   roomUid: route.params.roomUid,
        // });
        setChatInfo(res.data);
        if(res.data.messages)
        setMessages(res.data.messages)
        // setMessages(messa.data)
        setIsMessagesLoading(false)
      } catch (err) {
        Alert.alert('Ошибка при загрузке информации о чате');
      } finally {
        setIsChatInfoLoading(false);
      }
    };

    // loadMessages();
    loadChatInfo();
  }, [route.params.roomUid]);

  useEffect(() => {
    if (!user) return;
    console.log(route.params.roomUid)
    socket.emit('join-room', {
      userUid: user?.uuid,
      roomUid: route.params.roomUid,
    });

    const handleNewMessage = (message: MessageFromWS) => {
      setMessages((prevState) => {
        console.log('---------------------------------------')
        console.log('new message has appeared')
        if (prevState.some((msg) => msg.uuid === message.uuid)) {
          return prevState;
        }
        return [message, ...prevState];
      });
    };

    console.log('hooked')
    socket.on('message', (data: MessageFromWS) => handleNewMessage(data));

    return () => {
      socket.off('message', handleNewMessage);
    };
  }, [user, route.params.roomUid]);

  // Функция для отправки сообщения
  const handleSendMessage = async ({
    message,
    files,
  }: {
    message?: string;
    files?: DocumentPickerAsset[];
  }) => {
    if (message && message.startsWith('/chatgpt')) {
      // Если сообщение начинается с /chatgpt, обрабатываем запрос к ChatGPT
      // const chatGptQuery = message.replace('/chatgpt', '').trim();
      // await sendChatGptMessage(chatGptQuery);
      setIsChatGptPopupVisible(true)
      return;
    }

    const formData = new FormData();

    // Добавляем текстовое сообщение, если оно есть
    if (message) {
      formData.append('message', message);
    }

    console.log("Start of upload")
    console.log(selectedFile)
    // Проверяем, есть ли файл
    if (selectedFile) {
      selectedFile.forEach(file => {
        console.log(file)
        let filePath = file.uri;

        // Если URI начинается с content://, копируем файл во временное хранилище
        if (!chatInfo) {
          Alert.alert("Ошибка", "Информация о чате отсутствует.");
          return;
        }

        // Добавляем файл в FormData
        formData.append('files', {
          uri: filePath,
          name: file.name,
          type: file.mimeType,
        });
      });
      
    }

    // Добавляем обязательные параметры отправителя и комнаты
    formData.append('fromUid', user.uuid);
    formData.append('toRoomUid', chatInfo.uuid);

    console.log(formData)

    try {
      // Отправляем запрос с использованием FormData
      const res = await Service.ChatService.sendMessage(formData);

      console.log(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
      console.log(error);
      Alert.alert(
        'Ошибка отправки сообщения',
        error.response?.data?.message || 'Произошла непредвиденная ошибка'
      );
    }
  };

  // Функция для отправки запроса к ChatGPT
  const sendChatGptMessage = async (query: string) => {

      if (!chatInfo) {
    Alert.alert("Ошибка", "Информация о чате отсутствует.");
    return;
  }
    try {
      const response = await ChatGptService.sendMessage({
        messages: [], // Можно передать предыдущие сообщения, если нужно
        newMessage: {
          role: 'user',
          content: query,
        },
      });

      const gptResponse = response.data.chatGptResponseMessage;

      // Добавляем ответ ChatGPT в сообщения чата
      setMessages((prevState) => {
        // Проверяем, что user и chatInfo определены
        if (!user || !chatInfo) {
          console.error('User or ChatInfo is undefined');
          return prevState;
        }
      
        return [
          ...prevState,
          {
            id: gptResponse.id, // Поскольку это сообщение от ChatGPT, можно использовать фиктивное значение
            uuid: gptResponse.uuid,
            message: gptResponse.content,
            date: gptResponse.date,
            from: { 
              id: user.id, 
              uuid: user.uuid,
              nickname: user.nickname,
              email: user.email,
              phone: user.phone,
              password: '', 
              profile_url: user.profile_url,
              created_at: user.created_at, 
              updated_at: user.updated_at, 
            }, 
            toRoomUid: chatInfo.uuid,
            created_at: new Date(gptResponse.date).toISOString(), // Используем дату ответа или текущую
            updated_at: new Date(gptResponse.date).toISOString(), // Используем дату ответа или текущую
          },
        ];
      });
    } catch (error) {
      console.error('Ошибка при запросе к ChatGPT:', error);
      Alert.alert(
        'Ошибка при запросе к ChatGPT',
        error.response?.data?.message || 'Не удалось получить ответ от ChatGPT'
      );
    }
  };

  return (
    <MainContainer style={{
      marginTop: Constants.statusBarHeight
    }}>
      <Header
        title={chatInfo?.name || 'Чат'}
        avatar_url={chatInfo?.logo_url ? chatInfo.logo_url : "no logo"}
      />

      {isMessagesLoading ? (
        <ActivityIndicatorContainer>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </ActivityIndicatorContainer>
      ) : (
        <MessageList setIsChatGptPopupVisible={setIsChatGptPopupVisible} setIsDaleePopupVisible={setIsDaleeGptPopupVisible} messages={messages} setChatGptRequestText={setChatGptRequestText} setDaleeRequestText={seDaleeRequestText} selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
      )}

      <ModalBase isVisible={isChatGptPopupVisible} withInput={true}>
        <ChatGptPopUp setIsVisible={setIsChatGptPopupVisible} setMessageText={setMessageText} chatGptRequestText={chatGptRequestText} setChatGptRequestText={setChatGptRequestText}></ChatGptPopUp>

      </ModalBase>

      <ModalBase isVisible={isDaleePopupVisible} withInput={true}>
        <DaleePopUp setIsVisible={setIsDaleeGptPopupVisible} daleeRequestText={daleeRequestText} setDaleeRequestText={seDaleeRequestText} selectedFile={selectedFile} setSelectedFiles={setSelectedFile}></DaleePopUp>

      </ModalBase>

      <Sender messageText={messageText} setMessageText={setMessageText} onSend={handleSendMessage} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
    </MainContainer>
  );
};
