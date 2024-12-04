import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Row } from '@components/common';
import { ElemDateText, ElemNameText, NormalText } from './styled';
import { TChatListElemProps } from './types';
import { useNavigation } from '@react-navigation/native';
import ProfileDefaultIcon from '@assets/icons/ProfileDefault/ProfileDefaultIcon';

export const ChatListElem = ({ chat }: TChatListElemProps) => {
  const navigation = useNavigation<any>();

  const handleMoveToChat = () => {
    navigation.navigate('ChatMain', { roomUid: chat.uuid });
  };

  return (
    <TouchableOpacity onPress={handleMoveToChat}>
      <Row
        style={{
          height: 75,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        {/* Проверяем наличие аватарки, если её нет, используем аватар по умолчанию */}
        {chat.logo_url ? (
          <Image
            source={{ uri: chat.logo_url }} // Используем URL аватарки
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ) : (
          <View
            style={{
              width: 50,
              height: 50,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProfileDefaultIcon width={50} height={50} />
          </View>
        )}

        {/* Название чата и последнее сообщение */}
        <View style={{ flex: 1, marginLeft: 10 }}>
          <ElemNameText>{chat.name || 'Без названия'}</ElemNameText>
          <NormalText numberOfLines={1} style={{ color: '#7d8b97' }}>
            {chat.lastMessage || 'Нет сообщений'}
          </NormalText>
        </View>

        {/* Время последнего сообщения */}
        <View style={{ alignItems: 'flex-end' }}>
          <ElemDateText>
            {chat.updated_at
              ? new Date(chat.updated_at).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })
              : ''}
          </ElemDateText>
        </View>
      </Row>

      {/* Разделительная линия */}
      <View
        style={{
          marginLeft: 60,
          borderBottomWidth: 1,
          borderBottomColor: '#16202c',
        }}
      />
    </TouchableOpacity>
  );
};
