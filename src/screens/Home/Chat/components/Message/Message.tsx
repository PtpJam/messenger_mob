import React, { useEffect } from 'react';
import { ChatGPTButton, DaleeButton, MessageContainer, MessageDate, MessageInfo, MessageSentContainer, MessageSentStatus, MessageText, Triangle } from './styled';
import { TMessageProps } from './types';
import CheckmarkIcon from '@assets/icons/CheckMarkIcon/CheckMarkIcon'; // Импорт SVG компонента
import { TouchableOpacity, Image, Text, Linking, View, StyleSheet } from 'react-native';
import { FileUrl, GeneratedMaps, SingleChatFile } from '@common/socket/interface/chat.interface';
import { Button } from 'react-native';

// Функция для открытия файла по URL
const openFile = (fileUrl: string) => {
  Linking.openURL(fileUrl).catch((err) => {
    console.error('Failed to open file:', err);
  });
};



// Основной компонент Message
export const Message = ({ type, message, setIsChatGptPopupVisible, setChatGptRequestText, setIsDaleePopupVisible, setDaleeRequestText, selectedFile, setSelectedFile  }: TMessageProps) => {
  const isSentByUser = type === 'my';

  useEffect(() => {
  }, [])
  
  

  // Определение типа файла по расширению
  const getFileType = (fileUrl: string): string => {
    const extension = fileUrl.split('.').pop()?.toLowerCase();
    if (!extension) return 'unknown';

    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'image';
      case 'pdf':
        return 'pdf';
      case 'mp4':
        return 'video';
      default:
        return 'unknown';
    }
  };

  const handleOpenGpt = () => {
    setChatGptRequestText(message.message)
    setIsChatGptPopupVisible(true)
  }

  const handleOpenDalee = () => {
    setDaleeRequestText(message.message)
    setIsDaleePopupVisible(true)
  }

  // Рендер файла
  const renderFile = (files_urls: FileUrl[]) => {
    var files = new Array<SingleChatFile>
    files_urls.map((file_url) => {
      var fileType = getFileType(file_url.file_url)
      files.push({
        fileType: fileType,
        fileUrl: file_url.file_url
      })
    })
    // const fileType = getFileType(fileUrl);

    var componentList = files.map(file => {
      switch (file.fileType) {
        case 'image':
          return (
            <TouchableOpacity onPress={() => openFile(file.fileUrl)} key={file.fileUrl}>
              {/* Оформляем изображение с фиксированным размером и соблюдением пропорций */}
              <Image source={{ uri: file.fileUrl }} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          );
        case 'pdf':
          return (
            <TouchableOpacity onPress={() => openFile(file.fileUrl)}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop: 10 }}>
                Open PDF
              </Text>
            </TouchableOpacity>
          );
        case 'video':
          return (
            <TouchableOpacity onPress={() => openFile(file.fileUrl)}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop: 10 }}>
                Open Video
              </Text>
            </TouchableOpacity>
          );
        default:
          return (
            <TouchableOpacity onPress={() => openFile(file.fileUrl)}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline', marginTop: 10 }}>
                Open File
              </Text>
            </TouchableOpacity>
          );
      }
    })
    return componentList
  };

  return (
    <MessageContainer $type={type}>
      {/* Текст сообщения */}
      

      {/* Если есть файл, рендерим его */}
      {message.files_urls?.length > 0 && renderFile(message.files_urls)}

      <MessageText>{message.message}</MessageText>

      <MessageInfo>
        <View style={{
          flexDirection: 'row',
          columnGap: 10
        }}>
          <ChatGPTButton onPress={handleOpenGpt}>
            <Text>ChatGpt</Text>
          </ChatGPTButton>

          <DaleeButton onPress={handleOpenDalee}>
            <Text>Dalee</Text>
          </DaleeButton>
        </View>
        

        <MessageSentContainer>
          {/* Рендер галочки для отправленных сообщений */}
          <MessageSentStatus >
            {isSentByUser && <CheckmarkIcon width={20} height={15} />}
          </MessageSentStatus>
          {/* Время сообщения */}
          <MessageDate $type={type}>
            {new Date(message.date).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })}
          </MessageDate>
        </MessageSentContainer>

      </MessageInfo>


      {/* Треугольник под сообщением */}
      <Triangle $type={type} />
    </MessageContainer>
  );
};

// Стили для изображения и компонента
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    marginTop: 10,
    borderRadius: 10,
    flex: 0,
    marginBottom: 10, 
  },
});
