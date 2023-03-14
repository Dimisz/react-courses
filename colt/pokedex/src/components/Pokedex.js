import React from 'react';

import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
  
  render(){
    let title;
    if(this.props.winner){
      title = <h1>Winning hand</h1>;
    }
    else {
      title = <h1>Losing hand</h1>;
    }
    return(
      <div className={`wrapper ${this.props.winner ? 'winner' : 'loser'}`}>
        {title}
        <h2>Total EXP: {this.props.exp}</h2>
        <div className='cards'>
          {this.props.pokemons.map((pokemon) => {
            return <Pokecard key={pokemon.id} pokemon={pokemon}/>
          })}
        </div>
      </div>
    );
  }
};

export default Pokedex;