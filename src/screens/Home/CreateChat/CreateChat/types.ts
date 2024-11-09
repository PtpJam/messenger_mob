import { TUser } from '@common/types/user';
import { EScreens } from '@navigation/screens';
import { TChatsStack } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TCreateChatParamList = {
    listOfSelectedUsers: TUser[];
};

export type TCreateChatProps = NativeStackScreenProps<
  TChatsStack,
  EScreens.CreateChat
>;
