import Item from "./Item";


const PackingList = ({items, setItems}) => {
  const handleDelete = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  }

  const renderedItems = items.map((i) => {
    return(<Item key={i.id} item={i} handleDelete={handleDelete}/>);
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