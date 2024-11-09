import { MessageFromDB } from '@common/socket/interface/chat.interface';

export type TMessageListProps = {
  messages: MessageFromDB[];
  setIsChatGptPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setChatGptRequestText: React.Dispatch<React.SetStateAction<string>>

  setIsDaleePopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setDaleeRequestText: React.Dispatch<React.SetStateAction<string>>

  selectedFile: any,
  setSelectedFile: React.Dispatch<any>,
};
