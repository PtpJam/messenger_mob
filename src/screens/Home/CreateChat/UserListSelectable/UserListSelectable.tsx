import React, { useEffect, useRef } from 'react';
import { TUserListProps } from './types.ts';
import { StyledScrollView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { UserInUserListSelectable } from '../UserInUserListSelectable';
import { View } from 'react-native';
import ArrowRight from '@assets/icons/arrow-right-line.svg'
import RoundButton from '@components/telegramStaff/RoundButton/RoundButton.tsx';
export const UserListSelectable = ({ users, setListOfSelectedUsers, listOfSelectedUsers }: TUserListProps) => {
  const scrollViewRef = useRef();
  return (
    <StyledScrollView 
    
    >
      {users.map((user) => {
        return (
          <UserInUserListSelectable
            key={user.uuid}
            user={user}
            setListOfSelectedUsers={setListOfSelectedUsers}
            listOfSelectedUsers={listOfSelectedUsers}
          />
        );
      })}

    
      
    </StyledScrollView>
  );
};
