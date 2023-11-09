import { useEffect } from "react";
import { useAppDispatch, fetchUsers, useAppSelector, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(addUser());
  }

  if(isLoading) return <Skeleton times={6} className="h-10 w-full"/>;
  if(error) return <div>{error.message}</div>;

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
        <Button onClick={handleClick}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;