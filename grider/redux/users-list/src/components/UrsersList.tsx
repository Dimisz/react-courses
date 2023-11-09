import { useEffect, useState } from "react";
import { useAppDispatch, fetchUsers, useAppSelector, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { ResError } from "../models/error";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState<ResError | null>(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState<ResError | null>(null);

  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err))
      .finally(() => setIsLoadingUsers(false))
    ;
  }, [dispatch]);

  const handleAddUser = () => {
    setIsCreatingUser(true)
    dispatch(addUser())
      .unwrap()
      .catch((e) => setCreatingUserError(e))
      .finally(() => setIsCreatingUser(false))
    ;
  }

  if(isLoadingUsers) return <Skeleton times={6} className="h-10 w-full"/>;
  if(loadingUsersError) return <div>{loadingUsersError.message}</div>;

  const renderedUsers = data.map((user) => {
    return(
      
        <div key={user.id} className='mb-2 border rounded'>
          <div className='flex p-2 justify-between items-center cursor-pointer'>
            {user.name}
          </div>
        </div>
    )
  })

  return(
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        {
          isCreatingUser 
          ?
          'Creating user...'
          :
          <Button 
            onClick={handleAddUser}
          >+ Add User</Button>
        }
        { creatingUserError && 'Error creating user' }
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;