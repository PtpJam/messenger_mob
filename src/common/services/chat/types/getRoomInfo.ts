import { Room } from '@common/socket/interface/chat.interface';
import { TRequest } from '../../types';

export type TGetRoomInfo = TRequest<TPayload, Room>;

type TPayload = {
  roomUid: string;
};
