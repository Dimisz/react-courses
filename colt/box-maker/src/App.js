import React from 'react';

import BoxList from './components/BoxList';
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div><BoxList /></div>
    )
  }
}

export default App;