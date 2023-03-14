import React from 'react';
import Pokedex from './Pokedex';

class Pokegame extends React.Component {
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
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while(hand1.length < hand2.length){
      let randInd = Math.floor(Math.random() * hand2.length);
      hand1.push(hand2[randInd]);
      hand2.splice(randInd, 1);
    }

    const hand1Exp = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const hand2Exp = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    console.log(`hand1 exp: ${hand1Exp} hand2 exp: ${hand2Exp}`);
    return(

      <>
        <Pokedex pokemons={hand1} exp={hand1Exp} winner={hand1Exp >= hand2Exp} />
        <Pokedex pokemons={hand2} exp={hand2Exp} winner={hand2Exp >= hand1Exp}/>
      </>
    );
  }
}

export default Pokegame;