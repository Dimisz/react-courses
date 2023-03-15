import React from 'react';
import './App.css';
// import ScoreKeeper from './components/ScoreKeeper';
// import Ball from './components/Ball';
import Lottery from './components/Lottery';
class App extends React.Component {
  render(){
    return(
      <>
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4}/>
      </>
    );
  }
}

export default App;