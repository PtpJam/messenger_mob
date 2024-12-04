import { ETab } from '../../tabs/tabs';

export type TMainStack = {
  [ETab.Main]: undefined;
  [ETab.Auth]: undefined;
};

export type TCheckUserLogIn = {
  isAuth: boolean;
  isLoading: boolean;
};
