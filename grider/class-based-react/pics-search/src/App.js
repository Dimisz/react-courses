import React from 'react';
import unsplash from './api/unsplash';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: [] };

  onSerachSubmit = async(term) => {
    const response = await unsplash.get('/search/photos',{
      params: { query: term },
    });
    //console.log(response.data.results);
    this.setState({ images: response.data.results });
    
  }
  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSerachSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;