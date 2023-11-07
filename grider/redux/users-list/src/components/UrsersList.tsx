import { useEffect } from "react";
import { useAppDispatch, fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return "Users list";
}

export default UsersList;