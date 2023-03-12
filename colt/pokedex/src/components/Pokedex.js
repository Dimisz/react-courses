import React from 'react';

import './Pokedex.css';
import Pokecard from './Pokecard';

const pokemons = [
  {id: '004', name: 'Charmander', type: 'fire', base_experience: 62}, 
  {id: '007', name: 'Squirtle', type: 'water', base_experience: 63}, 
  {id: '011', name: 'Metapod', type: 'bug', base_experience: 72}, 
  {id: '012', name: 'Butterfree', type: 'flying', base_experience: 178}, 
  {id: '025', name: 'Pickachu', type: 'electric', base_experience: 112}, 
  {id: '039', name: 'Jigglypuff', type: 'normal', base_experience: 95}, 
  {id: '094', name: 'Gengar', type: 'poison', base_experience: 225}, 
  {id: '133', name: 'Eevee', type: 'normal', base_experience: 65}, 
];

class Pokedex extends React.Component {
  render(){
    return(
      <div className='wrapper'>
        <h1>Pokedex</h1>
        {pokemons.map((pokemon) => {
          return <Pokecard key={pokemon.id} pokemon={pokemon}/>
        })}
      </div>
    );
  }
};

export default Pokedex;