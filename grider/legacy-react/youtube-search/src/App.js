import React from 'react';
import youtube from './api/youtube';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { videos: [] };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  async onFormSubmit(term){
    const response = await youtube.get('/search', {
      params: { q: term }
    });
    this.setState({ videos: response.data.items });
  }

  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;