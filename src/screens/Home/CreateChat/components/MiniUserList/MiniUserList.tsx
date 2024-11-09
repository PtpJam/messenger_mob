import React, { useEffect, useRef } from 'react';
import { TUserListProps } from './types.ts';
import { StyledView } from './styled.ts';
import { MiniUserWidget } from '../MiniUserWidget/MiniUserWidget.tsx';

export const MiniUserList = ({ setListOfSelectedUsers, listOfSelectedUsers }: TUserListProps) => {
  return (
    <StyledView 
    
    >
      {listOfSelectedUsers.map((user) => {
        return (
          <MiniUserWidget
            key={user.uuid}
            user={user}
            setListOfSelectedUsers={setListOfSelectedUsers}
            listOfSelectedUsers={listOfSelectedUsers}
          />
        );
      })}

    
      
    </StyledView>
  );
};
