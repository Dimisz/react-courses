import Item from "./Item";


const PackingList = ({items}) => {
  const renderedItems = items.map((i) => {
    return(<Item key={i.id} item={i} />);
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