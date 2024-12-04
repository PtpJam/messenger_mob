import { TRequest } from '../../types';

export type TPostCreateRoomResponse = any; // Adjust this to the actual expected response structure if available

// If you're still using TRequest for other endpoints, keep it as is
export type TPostCreateRoom = TRequest<
  FormData,
  TPostCreateRoomResponse
>;
