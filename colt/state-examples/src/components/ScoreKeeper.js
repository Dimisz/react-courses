import React from 'react';

class ScoreKeeper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
    this.increment = this.increment.bind(this);
  }

  increment(){
    this.setState({score: this.state.score + 1});
  }

  render(){
    return(
      <>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.increment}>Add Score</button>
      </>
    )
  }
}

export default ScoreKeeper;