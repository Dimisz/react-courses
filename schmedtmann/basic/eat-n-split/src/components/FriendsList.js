import Button from "./Button";

const FriendsList = ({friends, selectedFriend, handleSelectFriend}) => {
  const selectedFriendID = selectedFriend ? selectedFriend.id : null;
  const renderedFriends = friends.map((friend) => {
    const selected = selectedFriendID === friend.id;
    return(<li key={friend.id} className={selected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      { friend.balance < 0 &&
          <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
      }
      {friend.balance === 0 &&
        <p>You and {friend.name} are even!</p>
      }
      {friend.balance > 0 &&
        <p className="green">{friend.name} owes you ${friend.balance}</p>
      }
      {!selected && <Button onClick={() => {handleSelectFriend(friend)}}>Select</Button>}
      {selected && <Button onClick={() => {handleSelectFriend(null)}}>Close</Button>}
    </li>);
  })
  return(
    <ul>
      {renderedFriends}
    </ul>
  );
}

export default FriendsList;