import { EncryptedStorageService } from '@common/storage/encryptedStorage';
import { apiFormData, apiPrivate } from '../../api';
import { TPostGenerateRequest } from './types/postGenerate';

export class DaleeService {
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

  static async generateImage(
    data: TPostGenerateRequest['payload']
  ): Promise<TPostGenerateRequest['response']> {
    // Отправляем запрос через axios
    return apiPrivate.post('/dalee/generate', data, {
      headers: {
        "Authorization": `Bearer ${EncryptedStorageService.getTokenSync()}`
      },
      timeout: 20000,
    });
  }
}
