const Stats = ({items}) => {

  const numItems = items.reduce((qty, i) => {
    return qty + i.quantity;
  }, 0);

  const numPackedItems = items.reduce((qty, i) => {
    if(i.packed){
      return qty + i.quantity;
    }
    else{
      return qty + 0;
    }
  }, 0);
  // console.log(numPackedItems);

  return(
    <footer className="stats">
      <em>🦧You have {numItems} items on your list, and you already packed {numPackedItems} ({Math.round((numPackedItems/numItems)*100)}%).</em>
    </footer>
  );
}

export default Stats;