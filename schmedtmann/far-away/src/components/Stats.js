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
  const percentage = Math.round((numPackedItems/numItems)*100);
  // console.log(numPackedItems);

  return(
    <footer className="stats">
      {
      percentage === 100
      ?
      <em>You got everything ready to go!</em>
      :
      <em>🦧You have {numItems} items on your list, and you already packed {numPackedItems} ({percentage}%).</em>
      }
      
    </footer>
  );
}

export default Stats;