import { EScreens } from '@navigation/screens';
import { TChatsStack } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TChatMainParamList = {
  roomUid: string;
};

export type TChatMainProps = NativeStackScreenProps<
  TChatsStack,
  EScreens.ChatMain
>;
