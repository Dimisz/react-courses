import { useThunk } from "../hooks/useThunk";
import { User } from "../models/user";
import { deleteUser } from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

interface Props {
  user: User;
}

const UserListItem = ({ user }: Props) => {
  const [ doDeleteUser, isDeletingUser, deletingUserError ] = useThunk(deleteUser);
  return(
    <div key={user.id} className='mb-2 border rounded'>
        <div className='flex p-2 justify-between items-center cursor-pointer'>
          <div className="flex flex-row items-center justify-between">
            <Button
              className="mr-3"
              loading={isDeletingUser}
              onClick={() => doDeleteUser(user)}
            >
              <GoTrash/>
            </Button>
            {deletingUserError && <div>'Error deleting user'</div>}
            {user.name}
          </div>
        </div>
      </div>
  );
}

export default UserListItem;