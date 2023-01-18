import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSerachSubmit = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID acces-key'
      }
    });
    //console.log(response.data.results);
    this.setState({ images: response.data.results });
    
  }
  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSerachSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;