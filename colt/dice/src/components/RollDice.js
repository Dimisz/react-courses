import React from 'react';
import Dice from './Dice';

import './RollDice.css';

class RollDice extends React.Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  }

  constructor(props){
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    }
    this.roll = this.roll.bind(this);
  }

  roll(){
    this.setState({
      rolling: true
    });
    setTimeout(() => this.setState({ 
      die1: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
      die2: this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
      rolling: false
    }), 500);
  }

  render(){
    return(
      <div className='roll-dice'>
        <div className='dice-container'>
          <Dice face={this.state.die1} />
          <Dice face={this.state.die2} />
        </div>
        <button onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'ROLL'}</button>
      </div>

    )
  }
}

export default RollDice;