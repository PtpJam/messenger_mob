import { MessageFromDB } from '@common/socket/interface/chat.interface';
import { Modal, ModalProps } from 'react-native';

export type TModalProps =  ModalProps & {
  isVisible: boolean;
  withInput: boolean;
};
