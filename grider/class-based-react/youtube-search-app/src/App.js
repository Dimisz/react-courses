import React from 'react';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Youtube search app.</h1>
        <SearchBar />
      </div>
    );
  }
}

export default App;