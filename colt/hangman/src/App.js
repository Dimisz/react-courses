import React from 'react';
import './App.css';

import Hangman from './components/Hangman';

class App extends React.Component {
  render(){
    return(
      <div className='app'>
        <Hangman />
      </div>
    );
  }
}

export default App;