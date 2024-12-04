import React from 'react';
import { TForm, TFormProps } from './types.ts';
import { MainView } from './styled.ts';
import { FormInput } from '@components/common';
import { Images } from '@assets/Images.ts';

export const Form = ({ setFormData }: TFormProps) => {
  const handleChange = (key: keyof TForm, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <MainView>
      <FormInput
        placeholder="Login"
        onTextChange={(newText) => handleChange('login', newText)}
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
    </MainView>
  );
};
