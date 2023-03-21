import React from 'react';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props){
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(term){
    alert(`App recieved search term: ${term}`);
  }

  render(){
    return(
      <SearchBar onFormSubmit={this.onFormSubmit} />
    );
  }
}

export default App;