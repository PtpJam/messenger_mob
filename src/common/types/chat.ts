import { TUser } from '@common/services/auth/types/common';
import { TAbstract } from './abstract';
import { TMessage } from './message';

export enum EChatTypes {
  PRIVATE = 'private',
  GROUP = 'group',
}

export type TChat = {
  title: string;

  type: EChatTypes;

  photo_url: string;

  members: TUser[];

  last_message?: TMessage | null;
} & TAbstract;
