import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import { Service } from '@common/services';
import { useUserData } from '../../../../store/tools';
import { useDispatch } from 'react-redux';
import { FormView, Input, MainView, NextButton } from './styled';
import * as ImagePicker from 'expo-image-picker';
import { useLoad } from '@common/hooks/useLoad';
import { TCreateChatProps } from './types';
import { Row } from '@components/common';
import RoundButton from '@components/telegramStaff/RoundButton/RoundButton';
import WhiteCheckmark from '@assets/icons/icons8-checkmark(1).svg'
import Camera from '@assets/icons/photo-camera-svgrepo-com.svg'
import { UserListNonSelectable } from '../UserListNonSelectable';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

export const CreateChat = ({ route }: TCreateChatProps) => {
  const { user } = useUserData();
  const dispatch = useDispatch();
  const users = route.params.listOfSelectedUsers
  const [chatName, setChatName] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { loadUserAndChats } = useLoad();
  const navigation = useNavigation<any>();

  const handlePickImage = async () => {
   
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled)
    setImageUri(result.assets[0].uri)
  
    console.log(result.assets[0].uri)


    // launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     Alert.alert('Image selection canceled');
    //   } else if (response.errorCode) {
    //     Alert.alert('ImagePicker Error', response.errorMessage || 'Unknown error');
    //   } else if (response.assets && response.assets.length > 0) {
    //     setImageUri(response.assets[0].uri);
    //     Alert.alert('Image selected', 'You have selected an image for the chat.');
    //   }
    // });
  };

  const handleCreateChat = () => {
    
    if (!user?.uuid) {
      Alert.alert("Can't create room, because User UUID is not found!");
      return;
    }
    if (users.length === 0) {
      Alert.alert("Can't create room, because you didn't pick any users!");
      return;
    }
    // if (!imageUri) {
    //   Alert.alert("Please select an image for the chat!");
    //   return;
    // }
  
    const formData = new FormData();
    formData.append('name', chatName);
    users.forEach((user) => {
      console.log(user.uuid)
      formData.append('users', user.uuid);
    });
    formData.append('users', user.uuid)
    if (imageUri) {
      formData.append('file', {
        uri: imageUri,
        type: 'image/jpeg', // Adjust the type based on the selected image type
        name: 'chat_image.jpg',
      });
    }
    else {
      
    }
    
    console.log(formData)
    Service.ChatService.postCreateRoom(formData)
      .then((res) => {
        console.log(res.data);
        Alert.alert(`Chat ${chatName} created successfully`);
        loadUserAndChats()
        navigation.navigate('ChatsStack', { screen: 'ChatsList' });
      })
      .catch((e) => {
        console.log(e.response);
        Alert.alert("Error creating chat", e.response?.data?.message || "An unexpected error occurred");
      });
    
  };

  return (
    <MainView style={{
      marginTop: Constants.statusBarHeight
    }}>
      <Row
        style={{
          alignItems: 'center',
          height: 50,
          backgroundColor: '#222e3e',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 50 },
          shadowOpacity: 0.25,
          shadowRadius: 5.84,
        }}
      >
        
        <Text
          style={{
            flex: 1,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Создать группу
        </Text>
        <View style={{ width: 35 }} />
      </Row>
      <FormView>
        <View style={{height: 70, paddingLeft: 20, paddingRight: 20 }}>
          
          {!imageUri ? (
            <>
              <RoundButton
              Icon={Camera}
              size={70}
              onPress={handlePickImage}
              backgroundColor="#639fd8"
              iconColor="#ffffff"
              />
            </>
          ) : ( 
            <>
              {imageUri && (
                <Pressable onPress={handlePickImage}>
                  <Image 
                    source={{uri: imageUri}}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                    }}
                  />
                </Pressable>
              
              )}
            </>
 
          )}
            
        </View>

        <Input
          placeholder="Enter chat name"
          placeholderTextColor={'#8f9296'}
          borderBottomWidth={2}
          borderBottomColor={'#71B2EC'}
          value={chatName}
          onChangeText={setChatName}
        />
      </FormView>

      <View style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 10 }}>
            <RoundButton
            Icon={WhiteCheckmark}
            size={70}
            onPress={handleCreateChat}
            backgroundColor="#639fd8"
            iconColor="#ffffff"
            />
      </View>

      <View style={{ paddingTop: 80}}>
        <Text style={styles.memberCount}>{users.length} участника</Text>

        <UserListNonSelectable users={users}/>
      </View>
      
      
    </MainView>
  );
};

// Стили для изображения и компонент
const styles = StyleSheet.create({
  memberCount: {
    fontSize: 16,
    color: '#4EA9F0',
    paddingLeft: 15
  },
  
});
