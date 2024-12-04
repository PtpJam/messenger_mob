import { TAbstract } from './abstract';
import { TChat } from './chat';

export type TUser = {
  nickname: string;
  profile_url: string;
  phone: string;
  email: string;
  status: string;
  is_activated: boolean;
} & TAbstract;
