import { useThunk } from "../hooks/useThunk";
import { User } from "../models/user";
import { deleteUser } from "../store";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

interface Props {
  user: User;
}

const UserListItem = ({ user }: Props) => {
  const [ doDeleteUser, isDeletingUser, deletingUserError ] = useThunk(deleteUser);

  const header = 
    <>
      <Button
        className="mr-3"
        loading={isDeletingUser}
        onClick={() => doDeleteUser(user)}
      >
        <GoTrash/>
      </Button>
      {deletingUserError && <div>'Error deleting user'</div>}
      {user.name}
    </>;
  return(
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>

  );
}

export default UserListItem;