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
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;