import { Socket, io } from 'socket.io-client';
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from './interface/chat.interface';
import { SOCKET, EXPO_PUBLIC_HOST } from '@env';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  `${SOCKET}/chat`,
  {
    transports: ['websocket', 'polling'],
    reconnection: true,
  },
);

export default socket;
