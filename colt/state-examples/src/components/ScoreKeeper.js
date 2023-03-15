import React from 'react';

class ScoreKeeper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0
    }
    this.incrementByOne = this.incrementByOne.bind(this);
    this.incrementByThree = this.incrementByThree.bind(this);
  }

  //1.  SIMPLE WAY, BETTER TO AVOID AT TIMES
  incrementByOne(){
    this.setState({score: this.state.score + 1});
  }

  // incrementByThree(){
  //   this.setState({score: this.state.score + 3});
  // }

  //2.  CALLBACK FORM, PREFERRED WAY
  // incrementByThree(){
  //   this.setState((st) => {return {score: st.score + 3}});
  // }

  //3. CALLBACK FORM EXTRACTING THE CALLBACK INTO A SEPARATE FUNCTION
  incrementScore(curState){
    return {score: curState.score + 2};
  }
  incrementByThree(){
    this.setState(this.incrementScore);
  }

  render(){
    return(
      <>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.incrementByOne}>Add One</button>
        <button onClick={this.incrementByThree}>Add Three</button>
      </>
    )
  }
}

export default ScoreKeeper;