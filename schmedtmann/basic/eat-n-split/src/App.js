import { useState } from "react";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
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
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends(friends => [...friends, friend]);
    setShowAddFriendForm(false);
  }

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
    setShowAddFriendForm(false);
  }

  const handleSplitBill = (value) => {
    setFriends(friends => {
      const selectedFriendID = selectedFriend ? selectedFriend.id : null;
      return friends.map((friend) => {
        if(friend.id === selectedFriendID){
          return {...friend, balance: friend.balance + value}
        }
        else{ 
          return friend;
        }
      });
    });
    setSelectedFriend(null);
  }
  
  return(
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} handleSelectFriend={handleSelectFriend} selectedFriend={selectedFriend} />
        {
          showAddFriendForm &&
          <>
            <FormAddFriend handleAddFriend={handleAddFriend}/>
            <Button onClick={() => setShowAddFriendForm(false)}>Close</Button>
          </>
        }
        
        {!showAddFriendForm && 
          <Button 
            onClick={() => setShowAddFriendForm(true)}>
              Add Friend
          </Button>
        }
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}/>}
    </div>
  );
}

export default App;