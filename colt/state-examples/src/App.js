import React from 'react';
import './App.css';
// import ScoreKeeper from './components/ScoreKeeper';
import Ball from './components/Ball';

class App extends React.Component {
  render(){
    return(
      <Ball num={1}/>
    );
  }
}

export default App;