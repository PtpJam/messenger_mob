import { TChatGptMessage, TChatGptMessageIntoDB } from '@common/types/chatGPT';
import { TRequest } from '../../types';

// Экспорт TPayload отдельно
export type TPayload = {
  request: TChatGptMessageIntoDB
};

export type TResponse = {
  chatGptResponseMessage: TChatGptMessageIntoDB
}

// Используем TPayload в TPostSendMessageRequest
export type TPostSendMessageInlineRequest = TRequest<TPayload, TResponse>;
