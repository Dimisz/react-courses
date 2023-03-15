import React from 'react';
import './Lottery.css';
import Ball from './Ball';

class Lottery extends React.Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }

  constructor(props){
    super(props);
    this.state = { nums: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const numBalls = Math.floor(Math.random() * this.props.maxBalls) + 1;
    const balls = [];
    for(let i = 0; i < numBalls; i++){
      balls.push(Math.floor(Math.random() * this.props.maxNum) + 1);
    }
    this.setState((st) => {
      return {nums: balls};
    })
  }

  render(){
    return(
      <section className='lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num, i) => {
            return <Ball key={`${num}${i}`} num={num} />
          })}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    )
  }
}

export default Lottery;