import React from 'react';

import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends React.Component {
  static defaultProps = {
    pokemons: [
      {id: '004', name: 'Charmander', type: 'fire', base_experience: 62}, 
      {id: '007', name: 'Squirtle', type: 'water', base_experience: 63}, 
      {id: '011', name: 'Metapod', type: 'bug', base_experience: 72}, 
      {id: '012', name: 'Butterfree', type: 'flying', base_experience: 178}, 
      {id: '025', name: 'Pickachu', type: 'electric', base_experience: 112}, 
      {id: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95}, 
      {id: '094', name: 'Gengar', type: 'poison', base_experience: 225}, 
      {id: '133', name: 'Eevee', type: 'normal', base_experience: 65}, 
    ]
  };
  render(){
    return(
      <div className='wrapper'>
        <h1>Pokedex</h1>
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