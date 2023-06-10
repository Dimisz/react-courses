import Button from "./Button";

const FriendsList = ({friends}) => {
  const renderedFriends = friends.map((friend) => {
    return(<li key={friend.id}>
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
      <Button>Select</Button>
    </li>);
  })
  return(
    <ul>
      {renderedFriends}
    </ul>
  );
}

export default FriendsList;