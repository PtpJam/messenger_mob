import { ImageSourcePropType } from 'react-native';

export type TFormInputProps = {
  placeholder: string;
  onTextChange: (text: string) => void;
  isSensitive?: boolean;
  iconActive: ImageSourcePropType;
  iconInactive: ImageSourcePropType;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};
