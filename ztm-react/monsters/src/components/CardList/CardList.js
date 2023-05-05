import './CardList.css';
import CardItem from './CardItem';

const CardList = ({monsters}) => {
  const renderedMonsters = monsters.map((monster) => {
    const { name, email, id } = monster;
    return(
      <CardItem 
        key={id}
        name={name}
        email={email}
        id={id}
      />
    );
  });

  return(
    <div className='card-list'>
      {renderedMonsters}
    </div>
  );
}

export default CardList;