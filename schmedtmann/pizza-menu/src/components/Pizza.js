const Pizza = ({title, imageUrl, description, price}) => {
  return(
    <div className="pizza">
      <img src={imageUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Pizza;