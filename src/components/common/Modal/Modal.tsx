import React from 'react';
import { useUserData } from '@store/tools.ts';
import { Button, KeyboardAvoidingView, Modal, Platform, TextInput, View } from 'react-native';
import { TModalProps } from './types';
import { StyledKeyboardAvoidingView, StyledView } from './styled';

export const ModalBase = ({ isVisible, withInput, children, ...rest }: TModalProps) => {
  const content = withInput ? (
    <StyledKeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {children}
    </StyledKeyboardAvoidingView>
  ) : (
    <StyledView>
       {children}
    </StyledView>
  )
  return (
    <Modal 
    visible={isVisible} 
    transparent 
    statusBarTranslucent 
    {...rest}
    >
      {content}
    </Modal>
  );
};
