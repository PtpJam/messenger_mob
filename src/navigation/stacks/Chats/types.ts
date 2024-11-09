import { TChatMainParamList } from 'src/screens/Home/Chat/types';
import { EScreens } from '../../screens';
import { TChatGptParamList } from 'src/screens/Home/ChatGpt/types';
import { TCreateChatParamList } from 'src/screens/Home/CreateChat/CreateChat/types';

export type TChatsStack = {
  [EScreens.ChatsList]: undefined;
  [EScreens.CreateChat]: TCreateChatParamList;
  [EScreens.SelectUsersForChat]: undefined;
  [EScreens.ChatMain]: TChatMainParamList;
  [EScreens.ChatGpt]: TChatGptParamList;
  [EScreens.CallScreen]: undefined
};