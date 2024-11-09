import React, { useEffect, useState } from 'react';
import { MessageContainer, UsernameText, } from './styled';
import { TUserProps } from './types';
import { Image, Text, Linking, View, StyleSheet, Pressable } from 'react-native';
import ProfileDefaultIconSvg from '@assets/icons/ProfileDefault/profile-default.svg'; // Импорт SVG компонента
import Checkmark from '@assets/icons/icons8-checkmark.svg'; // Импорт SVG компонента

// Основной компонент Message
export const UserInUserListNonSelectable = ({ user }: TUserProps) => {  
  return (
    <View>
       <MessageContainer>
      {/* Текст сообщения */}
      

      <View style={styles.userContainer}>
      {user.profile_url ? (
          <Image
            source={{ uri: user.profile_url }} // Используем URL аватарки
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
        ) : (
          <View
            style={{
              width: 45,
              height: 45,
              marginRight: 10,
              
            }}
          >
            <ProfileDefaultIconSvg width={45} height={45} />
          </View>
        )}
        <View>
            <UsernameText>{user.nickname}</UsernameText>
            <Text style={styles.lastVisit}>Был(а) в 00:00</Text>
        </View>
    
      </View>

      
      
    </MessageContainer>

    <View
        style={{
          marginLeft: 30,
          borderBottomWidth: 1,
          borderBottomColor: '#16202c',
          paddingBottom: 4
        }}
      />
    </View>
   
  );
};

// Стили для изображения и компонента
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    flex: 0,
    marginBottom: 10,
    
  },
  userContainer: {
    flexDirection: 'row',
  },
  lastVisit: {
    fontSize: 12,
    color: '#727C88' /* Светлый цвет текста */
  },
  selectionCheckmark: {
    position: 'absolute',
    
    top: 23,
    left: 29
  }
});
