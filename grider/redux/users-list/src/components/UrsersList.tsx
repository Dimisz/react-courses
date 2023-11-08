import { useEffect } from "react";
import { useAppDispatch, fetchUsers, useAppSelector, addUser } from "../store";
import Skeleton from "./Skeleton";


const UsersList = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
      {renderedUsers}
      <button onClick={() => dispatch(addUser())}>Add User</button>
    </div>
  );
}

export default UsersList;