import { TRequest } from '../../types';

// Экспорт TPayload отдельно
export type TPayload = {
  message?: string;
  fromUid: string;
  toRoomUid: string;
  file?: {
    uri: string;
    name: string;
    type: string;
  };
};

// Используем TPayload в TPostSendMessageRequest
export type TPostSendMessageRequest = TRequest<TPayload, null>;
