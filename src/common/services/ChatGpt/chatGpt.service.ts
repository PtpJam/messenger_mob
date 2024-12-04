import { EncryptedStorageService } from '@common/storage/encryptedStorage';
import { apiFormData, apiPrivate } from '../../api';
import { TGetMessages } from './types/getMessages';
import { TGetRoomInfo } from './types/getRoomInfo';
import { TPostSendMessageRequest, TPayload } from './types/postSendMessage';
import { TPostSendMessageInlineRequest } from './types/postSendMessageInline';

export class ChatGptService {
  // static async postCreateRoom(
  //   data: FormData // Ensure this is of type FormData
  // ): Promise<TPostCreateRoom['response']> {
  //   return apiFormData.post('/chat/create-room', data, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
        
  //     },
  //   });
  // }

  static async clearHistory(): Promise<TGetRoomInfo['response']> {
    return apiPrivate.delete(`/chat-gpt/clear-history`,
      {
        headers: {
          "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
        }
      }
    );
  }

  static async loadMessages(): Promise<TGetMessages['response']> {
    return apiPrivate.get(`/chat-gpt/load-messages`, 
      {
        headers: {
          "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
        }
      }
    );
  }

  static async sendMessage(
    data: TPostSendMessageRequest['payload']
  ): Promise<TPostSendMessageRequest['response']> {
    // Отправляем запрос через axios
    return apiPrivate.post('/chat-gpt/message', data, {
      headers: {
        "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
      },
      timeout: 20000,
    });
  }

  static async sendMessageInline(
    data: TPostSendMessageInlineRequest['payload']
  ): Promise<TPostSendMessageInlineRequest['response']> {
    // Отправляем запрос через axios
    return apiPrivate.post('/chat-gpt/message-inline', data, {
      headers: {
        "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
      },
      timeout: 20000,
    });
  }
}
