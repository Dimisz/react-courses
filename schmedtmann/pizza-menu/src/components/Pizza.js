const Pizza = ({pizza}) => {
  //title, imageUrl, description, price
  return(
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={`images/${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold out' : `$${pizza.price}`}</span>
      </div>
    </li>
  );
}

export default Pizza;