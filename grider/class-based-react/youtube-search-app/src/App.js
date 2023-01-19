import React from 'react';

import SearchBar from './components/SearchBar';
import youtubeApi from './api/youtubeApi';

class App extends React.Component {

  onFormSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    console.log(response.data.items.length);
  };

  render(){
    return(
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;