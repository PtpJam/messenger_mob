import { MessageFromDB } from '@common/socket/interface/chat.interface';

export type TChatGptPopUpProps = {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setMessageText: React.Dispatch<React.SetStateAction<string>>,
    chatGptRequestText: string,
    setChatGptRequestText: React.Dispatch<React.SetStateAction<string>>
};
