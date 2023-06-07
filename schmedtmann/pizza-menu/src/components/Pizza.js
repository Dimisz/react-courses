const Pizza = ({pizza}) => {
  //title, imageUrl, description, price
  return(
    <li className="pizza">
      <img src={`images/${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;