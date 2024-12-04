import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TChatsStack } from './types';
import { EScreens } from '../../screens';
import { ScreenNavigationOptions } from '../options';
import { ChatsScreens } from '../../../screens/Home';

const Stack = createNativeStackNavigator<TChatsStack>();

const ChatsStack = () => {
  useEffect(() => {
    console.log(ChatsScreens)
  })
  return (
    <Stack.Navigator screenOptions={ScreenNavigationOptions}>
      <Stack.Screen
        name={EScreens.ChatsList}
        component={ChatsScreens.ChatsList}
      />
      <Stack.Screen
        name={EScreens.CreateChat}
        component={ChatsScreens.CreateChat}
      />
      <Stack.Screen
        name={EScreens.SelectUsersForChat}
        component={ChatsScreens.SelectUsersForChat}
      />
      <Stack.Screen name={EScreens.ChatMain} component={ChatsScreens.Chat} />
      <Stack.Screen name={EScreens.ChatGpt} component={ChatsScreens.ChatGpt} />
      {/* <Stack.Screen name={EScreens.CallScreen} component={ChatsScreens.CallScreen} /> */}
    </Stack.Navigator>
  );
};

export default ChatsStack;
