import { MessageFromDB, Room } from '@common/socket/interface/chat.interface';
import { TRequest } from '../../types';

export type TGetMessages = TRequest<TPayload, MessageFromDB[]>;

type TPayload = {
  roomUid: string;
};
