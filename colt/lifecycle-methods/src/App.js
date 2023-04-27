import React from 'react';

import Timer from './components/Timer';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Timer />
    );
  }
}

export default App;
