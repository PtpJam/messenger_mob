import { Room } from '@common/socket/interface/chat.interface';
import { TBasicDataResponse, TRequest } from '../../types';

export type TGetMyRoomsRequest = TRequest<null, TResponse>;

type TResponse = any;
