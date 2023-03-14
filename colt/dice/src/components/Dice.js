import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <i className={`die fas fa-dice-${this.props.face}`}></i>
    );
  }
}

export default Dice;