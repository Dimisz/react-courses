import React from 'react';

import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import youtubeApi from './api/youtubeApi';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render(){
    return(
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo} />}
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos}
                         onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;