import Item from "./Item";


const PackingList = ({items, setItems, setPacked}) => {
  const handleDelete = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  }

  const renderedItems = items.map((i) => {
    return(<Item key={i.id} item={i} handleDelete={handleDelete} setPacked={setPacked}/>);
  });

  return(
    <div className='list'>
      <ul>
        {renderedItems}
      </ul>
    </div>
  );
}

export default PackingList;