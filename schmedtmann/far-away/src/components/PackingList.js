import { useEffect, useState } from "react";
import Item from "./Item";

const PackingList = ({items, setItems, setPacked}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  const sortItems = () => {
    if(sortBy === 'input'){
      return items.slice();
    }
    else if(sortBy === 'description'){
      // console.log('sorting by description');
      return items.slice().sort((a, b) => a.description.localeCompare(b.description) );
    }
    else if(sortBy === 'packed'){
      return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }
  }

  sortedItems = sortItems();
  // useEffect(() => {
  //   sortedItems = sortItems();
  // }, [sortBy]);
  

  const handleDelete = (itemId) => {
    const filteredItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(filteredItems);
  }

  const handleClearList = () => {
    setItems([]);
  }

  const renderedItems = sortedItems.map((i) => {
    return(<Item key={i.id} item={i} handleDelete={handleDelete} setPacked={setPacked}/>);
  });

  return(
    <div className='list'>
      <ul>
        {renderedItems}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;