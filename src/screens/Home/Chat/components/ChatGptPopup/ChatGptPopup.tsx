import React, { useState } from 'react';
import { TChatGptPopUpProps } from './types.ts';
import { ActivityIndicatorContainer, StyledButtonView, StyledInput, StyledView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { Message } from '../Message/Message.tsx';
import { ActivityIndicator, Button, Image, Keyboard, Modal, Pressable, Text, TextInput, View } from 'react-native';
import CloseIconSvg from '@assets/icons/ChatGpt/cross-close-svgrepo-com.svg'; // Импорт SVG компонента
import CheckMark from '@assets/icons/CheckMarkIcon/checkmark-done-sharp-svgrepo-com.svg'; // Импорт SVG компонента
import { ChatGptService } from '@common/services/ChatGpt/chatGpt.service.ts';

export const ChatGptPopUp = ({ setIsVisible, setMessageText, chatGptRequestText, setChatGptRequestText }: TChatGptPopUpProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSend = async () => {
    setIsLoading(true)
    // Проверяем, что есть текст или файл
    setChatGptRequestText('');
    Keyboard.dismiss();
    try {
      const response = await ChatGptService.sendMessageInline({
        request: {
          role: 'user',
          content: chatGptRequestText,
        },
      });
      setMessageText(response.data.chatGptResponseMessage.content)
    }
    catch {

    }
    finally {
      setIsLoading(false)
    }
    setIsVisible(false)
  };

  const handleTextChange = (newText: string) => {
    setChatGptRequestText(newText);
  };

  return (
    <StyledView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <StyledButtonView onPress={() => {
          setIsVisible(false)
        }}
        >
          <View>
            <CloseIconSvg width={12} height={12}></CloseIconSvg>
          </View>
        </StyledButtonView>
        <Text style={{
          verticalAlign: 'middle',
          paddingRight: 10
        }}>ChatGPT</Text>
      </View>

      <StyledInput
          value={chatGptRequestText}
          keyboardAppearance="dark"
          placeholder="Введите запрос"
          placeholderTextColor={'#6d7883'}
          textAlignVertical='top'
          multiline={true}
          onChangeText={handleTextChange}
        />
      <Button onPress={handleSend} title='Отправить'></Button>
     {isLoading && <ActivityIndicatorContainer>
        <ActivityIndicator size={'large'} color={'#fff'} />
      </ActivityIndicatorContainer>}
    </StyledView>
      
  );
};
