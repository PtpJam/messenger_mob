import { TImage } from '@common/types/daleeImage';
import { TRequest } from '../../types';

// Экспорт TPayload отдельно
export type TPayload = {
  prompt: string
};

export type TResponse = {
  image: TImage
}

// Используем TPayload в TPostSendMessageRequest
export type TPostGenerateRequest = TRequest<TPayload, TResponse>;
