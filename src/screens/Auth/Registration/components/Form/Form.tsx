import React from 'react';
import { TForm, TFormProps } from './types.ts';
import { MainView } from './styled.ts';
import { FormInput } from '@components/common/index.ts';
import { Images } from '@assets/Images.ts';

export const Form = ({ setFormData }: TFormProps) => {
  const handleChange = (key: keyof TForm, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <MainView>
      <FormInput
        placeholder="Email"
        onTextChange={(newText) => handleChange('email', newText)}
        keyboardType="email-address"
        iconActive={Images.EmailSelected}
        iconInactive={Images.EmailInactive}
      />
      <FormInput
        placeholder="Phone"
        keyboardType="phone-pad"
        onTextChange={(newText) => handleChange('phone', newText)}
        iconActive={Images.PhoneSelected}
        iconInactive={Images.PhoneInactive}
      />
      <FormInput
        placeholder="Nickname"
        onTextChange={(newText) => handleChange('nickname', newText)}
        iconActive={Images.UserSelected}
        iconInactive={Images.UserInactive}
      />
      <FormInput
        placeholder="Password"
        onTextChange={(newText) => handleChange('password', newText)}
        isSensitive
        iconActive={Images.KeySelected}
        iconInactive={Images.KeyInactive}
      />
      <FormInput
        placeholder="Confirm Password"
        onTextChange={(newText) => handleChange('confirmPassword', newText)}
        isSensitive
        iconActive={Images.KeySelected}
        iconInactive={Images.KeyInactive}
      />
    </MainView>
  );
};
