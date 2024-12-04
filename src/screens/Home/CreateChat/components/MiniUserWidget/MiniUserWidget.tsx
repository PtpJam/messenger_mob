import React, { useEffect, useState } from 'react';
import { MessageContainer, UsernameText, } from './styled';
import { TUserProps } from './types';
import { Image, Text, Linking, View, StyleSheet, Pressable } from 'react-native';
import ProfileDefaultIconSvg from '@assets/icons/ProfileDefault/profile-default.svg'; // Импорт SVG компонента
import Checkmark from '@assets/icons/icons8-checkmark.svg'; // Импорт SVG компонента

// Основной компонент Message
export const MiniUserWidget = ({ user, setListOfSelectedUsers, listOfSelectedUsers }: TUserProps) => {
  const handlePress = (() => {
      setListOfSelectedUsers(listOfSelectedUsers.filter(u => u.uuid !== user.uuid))
    
    
  })
  return (
    <Pressable onPress={handlePress}>
       <MessageContainer>
      {/* Текст сообщения */}
      

        <View style={styles.userContainer}>
        {user.profile_url ? (
            <Image
              source={{ uri: user.profile_url }} // Используем URL аватарки
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginRight: 6,
              }}
            />
          ) : (
            <View
              style={{
                width: 30,
                height: 30,
                marginRight: 6,
                
              }}
            >
              <ProfileDefaultIconSvg width={30} height={30} />
            </View>
          )}
          <UsernameText>{user.nickname}</UsernameText>

        </View>

      
      
      </MessageContainer>


    </Pressable>
   
  );
};

// Стили для изображения и компонента
const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
  },
});
