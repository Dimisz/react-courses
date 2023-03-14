import React from 'react';
import Dice from './Dice';

class RollDice extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      rolling: false
    }
    this.roll = this.roll.bind(this);
  }

  roll(){
    this.setState({
      rolling: true
    });
    setTimeout(() => this.setState({ 
      num1: Math.floor(Math.random() * 6) + 1,
      num2: Math.floor(Math.random() * 6) + 1,
      rolling: false
    }), 2500);
  }

  render(){
    return(
      <>
        <Dice num={this.state.num1} />
        <Dice num={this.state.num2} />
        <button onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'ROLL'}</button>
      </>

    )
  }
}

export default RollDice;