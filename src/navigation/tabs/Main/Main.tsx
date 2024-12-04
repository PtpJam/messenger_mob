import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TMainTab } from './types';
import { ScreenTabOptions } from '../options';
import { EStacks } from '../../stacks/stacks';
import HomeStack from '../../stacks/Chats/Chats';

const Tab = createBottomTabNavigator<TMainTab>();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={ScreenTabOptions}>
      <Tab.Screen component={HomeStack} name={EStacks.Chats} />
    </Tab.Navigator>
  );
};

export default MainTab;
