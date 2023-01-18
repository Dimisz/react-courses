import React from 'react';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar />
      </div>
    );
  }
}

export default App;