import { TUser } from '@common/types/user';

export type TUserListProps = {
  setListOfSelectedUsers: React.Dispatch<React.SetStateAction<TUser[]>>
  listOfSelectedUsers: TUser[]
};