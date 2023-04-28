import { useState } from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  }

  return(
    <>
      <AddUser addUser={addUser} />
      {users.length > 0 && <UsersList users={users} />}
    </>
  );
}

export default App;