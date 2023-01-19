import React from 'react';

import SearchBar from './components/SearchBar';
import youtubeApi from './api/youtubeApi';

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render(){
    return(
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <p>I have {this.state.videos.length} videos.</p>
      </div>
    );
  }
}

export default App;