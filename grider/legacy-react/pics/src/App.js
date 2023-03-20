import React from 'react';
import unsplash from './api/unsplash';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  

  async onSearchSubmit (term){
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({images: response.data.results});
  }

  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar handleSubmit={this.onSearchSubmit} />
        {this.state.images.map((image) => {
          return <img key={image.id} src={image.urls.regular} style={{width: '150px'}} />
        })}
      </div>
    );
  }
}

export default App;