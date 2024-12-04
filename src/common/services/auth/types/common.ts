import { EUserStatus } from '../../types';

export type TUser = {
  nickname: string;
  profile_url: string;
  phone: string;
  email: string;
  password: string;
  is_activated: boolean;
  status: EUserStatus;
};
