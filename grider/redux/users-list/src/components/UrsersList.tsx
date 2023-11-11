import { useEffect } from "react";
import { fetchUsers, useAppSelector, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";



const UsersList = () => {
  const [ doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
  const [ doCreateUser, isCreatingUser, creatingUserError ] = useThunk(addUser);

  const { data } = useAppSelector(state => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  }

  const renderedUsers = data.map((user) => {
    return(
      <UserListItem user={user} key={user.id}/>
    );
  })

  return(
    <div>
      <div className='flex flex-row justify-between m-3 items-center'>
        <h1 className='m-2 text-xl'>Users</h1>
        
        <Button 
            loading={isCreatingUser}
            onClick={handleAddUser}
          >
            + Add User
        </Button>
        { creatingUserError && 'Error creating user' }
      </div>
      { isLoadingUsers 
        ? 
        <Skeleton times={6} className="h-10 w-full"/> 
        : 
        loadingUsersError
          ?
          <div>{loadingUsersError.message}</div>
          :
          renderedUsers 
      }
    </div>
  );
}

export default UsersList;