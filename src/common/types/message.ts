import { TAbstract } from './abstract';
import { TChat } from './chat';
import { TUser } from './user';

export type TMessage = {
  text: string;
  sender: TUser;
  chat: TChat;
} & TAbstract;
