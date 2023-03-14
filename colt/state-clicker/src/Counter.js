import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = { randomNumber: Math.floor(Math.random() * 10) + 1 };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }

  generateRandomNumber(){
    this.setState({ randomNumber: Math.floor(Math.random() * 10) + 1 });
  }
  

  render(){
    const btn = <button onClick={this.generateRandomNumber}>Generate random number</button>;
    const winnerMessage = <h2>YOU WIN!!!</h2>;

    return(
      <div style={{fontFamily: 'sans-serif', textAlign:'center'}}>
        <h1>Your random number: {this.state.randomNumber}</h1>
        { this.state.randomNumber === 7 ? winnerMessage : btn }
      </div>
    )
  }
}

export default Counter;