import React from 'react';
//   {id: 4, name: 'Charmander', type: 'fire', base_experrience: 62}, 
import './Pokecard.css';

class Pokecard extends React.Component {
  render(){
    const {id, name, type, base_experience} = this.props.pokemon;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return(
      <div className='card'>
        <h1>{name}</h1>
        <img src={url} alt={name}></img>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
};

export default Pokecard;