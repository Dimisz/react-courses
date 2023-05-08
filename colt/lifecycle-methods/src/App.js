import React from 'react';

import Timer from './components/Timer';
import ZenQuote from './components/ZenQuote';
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ZenQuote/>
    );
  }
}

export default App;
