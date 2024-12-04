import { Asset } from 'react-native-image-picker';
import { TBasicDataResponse, TRequest } from '../../types';
import { TUser } from './common';

export type TPostUserSignUpRequest = TRequest<TPayload, TResponse>;

type TPayload = {
  nickname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: Asset | null;
};

type TResponse = {
  success: boolean;
  message: string;
  user: TUser;
};
