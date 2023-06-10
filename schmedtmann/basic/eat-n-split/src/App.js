import { useState } from "react";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return(
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends}/>
        {
          showForm &&
          <>
            <FormAddFriend />
            <Button onClick={() => setShowForm(false)}>Close</Button>
          </>
        }
        
        {!showForm && 
          <Button 
            onClick={() => setShowForm(true)}>
              Add Friend
          </Button>
        }
      </div>
    </div>
  );
}

export default App;