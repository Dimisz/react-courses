import { useState } from "react";

const Item = ({item, handleDelete}) => {
  const [packed, setPacked] = useState(false);
  const deleteItem = () => {
    handleDelete(item.id);
  }

  return(
      <li>
        <input type='checkbox' onChange={() => setPacked(!packed)}/>
        <span style={packed ? {textDecoration: 'line-through'} : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={deleteItem}>X</button>
      </li>
  );
}

export default Item;