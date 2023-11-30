import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Michael', age: 20 },
  { name: 'Alex', age: 20 },
]

const UserSearchWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [foundUsers, setFoundUsers] = useState<{name: string; age: number}[]>([]);

  useEffect(() => {
    if(!inputRef.current) return;
    inputRef.current.focus();
  }, []);

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
          ref={inputRef}
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

export default UserSearchWithRef;