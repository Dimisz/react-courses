import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = { time: new Date() };
    console.log('IN CONSTRUCTOR');
  }
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000);
    console.log('component did mount');
  }

  render(){
    console.log('in render');
    return(
      <>
        <h1>TIMER</h1>
        <h2>{this.state.time.getSeconds()}</h2>
      </>
    );
  }
}

export default Timer;