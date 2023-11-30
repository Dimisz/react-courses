import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Michael', age: 20 },
  { name: 'Alex', age: 20 },
]

const UserSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundUsers, setFoundUsers] = useState<{name: string; age: number}[]>([]);

  const handleSearchUsers = () => {
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFoundUsers(filteredUsers);
  };

  return(
    <div>
      <div>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearchUsers}>Search Users</button>
      </div>
      <ul>
        {foundUsers.map((foundUser) => {
          return <li key={foundUser.name}>Name: {foundUser.name}, Age: {foundUser.age}</li>
        })}
      </ul>
    </div>
  );
}

export default UserSearch;