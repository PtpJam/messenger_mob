import { MessageFromDB } from '@common/socket/interface/chat.interface';
import { DocumentPickerAsset } from 'expo-document-picker';

export type TDaleePopUpProps = {
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    daleeRequestText: string,
    setDaleeRequestText: React.Dispatch<React.SetStateAction<string>>

    selectedFile: any,
    setSelectedFiles: React.Dispatch<React.SetStateAction<DocumentPickerAsset[] | null>>
};
