import React from 'react';

class Timer extends React.Component {
  constructor(props){
    super(props);
    console.log('IN CONSTRUCTOR');
  }
  componentDidMount(){
    console.log('component did mount');
  }
  
  render(){
    console.log('in render');
    return(
      <h1>TIMER</h1>
    );
  }
}

export default Timer;