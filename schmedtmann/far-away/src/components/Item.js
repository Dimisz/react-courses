const Item = ({item, handleDelete, setPacked}) => {
  
  const deleteItem = () => {
    handleDelete(item.id);
  }

  const handleCheckboxClicked = () => {
    setPacked(item.id);
  }

  return(
      <li>
        <input type='checkbox' onChange={handleCheckboxClicked} checked={item.packed}/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={deleteItem}>X</button>
      </li>
  );
}

export default Item;