import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
  render(){
    const {id, name, type, base_experience} = this.props.pokemon;
    // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    return(
      <div className='card'>
        <h1 className='title'>{name}</h1>
        <div className='image'><img src={url} alt={name}></img></div>
        <p className='data'>Type: {type}</p>
        <p className='data'>EXP: {base_experience}</p>
      </div>
    );
  }
};

export default Pokecard;

// `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`