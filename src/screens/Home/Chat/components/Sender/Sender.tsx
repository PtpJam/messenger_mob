import React, { useState } from 'react';
import { TSenderProps } from './types.ts';
import {
  MainView,
  SendButton,
  SenderContainer,
  StyledInput,
  FileButton,
} from './styled.ts';
import { Image, Keyboard, Platform, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Для загрузки изображений
import * as DocumentPicker from 'expo-document-picker';
import { Images } from '@assets/Images.ts';

export const Sender = ({ onSend, messageText, setMessageText, selectedFile, setSelectedFile }: TSenderProps) => {
  // const [text, setText] = useState<string>('');

  const handleTextChange = (newText: string) => {
    setMessageText(newText);
  };

  const handleSend = () => {
    // Проверяем, что есть текст или файл
    console.log('---------------------------')
    console.log(selectedFile)
    onSend({ message: messageText || ' ', file: selectedFile });
    setMessageText('');
    setSelectedFile(null); // Очищаем файл после отправки
    Keyboard.dismiss();
  };

  const handleFilePicker = async () => {
    try {
      console.log("123")
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true
      }); 
      console.log(result.assets)
      setSelectedFile(result.assets);
    } catch (err) {
      // if (DocumentPicker.canceled(err)) {
      //   console.log('Пользователь отменил выбор файла');
      // } else {
      //   console.error('Ошибка при выборе файла: ', err);
      // }
    }
  };

  return (
    <MainView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SenderContainer>
        <StyledInput
          value={messageText}
          keyboardAppearance="dark"
          onChangeText={handleTextChange}
          placeholder="Введите сообщение"
          placeholderTextColor={'#6d7883'}
        />
        <FileButton onPress={handleFilePicker}>
          <Image
            source={Images.ImagePicker}
            style={{ width: 24, height: 24 }}
          />
        </FileButton>
        <SendButton onPress={handleSend}>
          <Image
            source={Images.ArrowUp}
            resizeMode="contain"
            style={{ width: 24 }}
          />
        </SendButton>
      </SenderContainer>
    </MainView>
  );
};
