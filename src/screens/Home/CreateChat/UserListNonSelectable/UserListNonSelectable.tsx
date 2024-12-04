import React, { useEffect, useRef } from 'react';
import { TUserListProps } from './types.ts';
import { StyledScrollView } from './styled.ts';
import { useUserData } from '@store/tools.ts';
import { View } from 'react-native';
import ArrowRight from '@assets/icons/arrow-right-line.svg'
import RoundButton from '@components/telegramStaff/RoundButton/RoundButton.tsx';
import { UserInUserListNonSelectable } from '../UserInUserListNonSelectable';
export const UserListNonSelectable = ({ users }: TUserListProps) => {
  const scrollViewRef = useRef();
  return (
    <StyledScrollView 
    
    >
      {users.map((user) => {
        return (
          <UserInUserListNonSelectable
            key={user.uuid}
            user={user}
          />
        );
      })}

    
      
    </StyledScrollView>
  );
};
