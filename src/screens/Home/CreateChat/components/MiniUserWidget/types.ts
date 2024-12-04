
import { TUser } from '@common/types/user';

export type TUserProps = {
    user: TUser;
    setListOfSelectedUsers: React.Dispatch<React.SetStateAction<TUser[]>>
    listOfSelectedUsers: TUser[]
};
  