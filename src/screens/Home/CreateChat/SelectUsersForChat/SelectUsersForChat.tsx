import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
import { Service } from '@common/services';
import { useUserData } from '../../../../store/tools';
import { useDispatch } from 'react-redux';
import { FormView, MainView } from './styled';
import * as ImagePicker from 'expo-image-picker';
import { useLoad } from '@common/hooks/useLoad';
import { TUser } from '@common/types/user';
import MenuIcon from '@assets/icons/Menu/MenuIcon';
import { Row } from '@components/common';
import RoundButton from '@components/telegramStaff/RoundButton/RoundButton';
import ArrowRight from '@assets/icons/arrow-right-line.svg'
import { useNavigation } from '@react-navigation/native';
import { UserListSelectable } from '../UserListSelectable';
import { MiniUserList } from '../components/MiniUserList';
import Constants from 'expo-constants';

export const SelectUsersForChat = () => {
  const navigation = useNavigation<any>();
  const { user } = useUserData();
  const dispatch = useDispatch();
  const [users, setUsers] = useState<Array<TUser>>([]);
  const [chatName, setChatName] = useState<string>('');
  const [dropdownValue, setDropdownValue] = useState<Array<string>>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { loadUserAndChats } = useLoad();
  const [listOfSelectedUsers, setListOfSelectedUsers] = useState<Array<TUser>>([]);
  useEffect(() => {
    Service.UserService.getAllUsers().then((res) => {
        for (let index = 0; index < res.data.length; index++) {
            if (res.data[index].uuid === user?.uuid) {
                res.data.splice(index, 1)
                setUsers(res.data)
                return
            }
            
        }
    });
  }, []);

  // const handleCreateChat = () => {
  //   if (!user?.uuid) {
  //     Alert.alert("Can't create room, because User UUID is not found!");
  //     return;
  //   }
  //   if (dropdownValue.length === 0) {
  //     Alert.alert("Can't create room, because you didn't pick any users!");
  //     return;
  //   }
  //   // if (!imageUri) {
  //   //   Alert.alert("Please select an image for the chat!");
  //   //   return;
  //   // }
  
  //   const formData = new FormData();
  //   formData.append('name', chatName);
  //   dropdownValue.forEach((uuid) => {
  //     formData.append('users', uuid);
  //   });
  //   formData.append('users', user.uuid)
  //   if (imageUri) {
  //     formData.append('file', {
  //       uri: imageUri,
  //       type: 'image/jpeg', // Adjust the type based on the selected image type
  //       name: 'chat_image.jpg',
  //     });
  //   }
  //   else {
      
  //   }
    
  
  //   Service.ChatService.postCreateRoom(formData)
  //     .then((res) => {
  //       console.log(res.data);
  //       Alert.alert(`Chat ${chatName} created successfully`);
  //     })
  //     .catch((e) => {
  //       console.log(e.response);
  //       Alert.alert("Error creating chat", e.response?.data?.message || "An unexpected error occurred");
  //     });
  //   loadUserAndChats()
  // };

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
        <MiniUserList setListOfSelectedUsers={setListOfSelectedUsers} listOfSelectedUsers={listOfSelectedUsers}></MiniUserList>

        <UserListSelectable users={users} setListOfSelectedUsers={setListOfSelectedUsers} listOfSelectedUsers={listOfSelectedUsers}></UserListSelectable>


        <View style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 10 }}>
            <RoundButton
            Icon={ArrowRight}
            size={70}
            onPress={() => navigation.navigate("CreateChat", {listOfSelectedUsers : listOfSelectedUsers})}
            backgroundColor="#639fd8"
            iconColor="#ffffff"
            />
      </View>
      </FormView>

      
    </MainView>
  );
};
