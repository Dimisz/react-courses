import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <i className={`die fas fa-dice-${this.props.face} ${this.props.rolling ? 'rolling' : ''}`}></i>
    );
  }
}

export default Dice;