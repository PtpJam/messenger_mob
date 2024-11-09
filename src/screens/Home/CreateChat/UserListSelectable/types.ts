import { TUser } from '@common/types/user';

export type TUserListProps = {
  users: Array<TUser>;
  setListOfSelectedUsers: React.Dispatch<React.SetStateAction<TUser[]>>
  listOfSelectedUsers: TUser[]
};