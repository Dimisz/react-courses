import React, { useState } from 'react';
import youtube from './api/youtube';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const onSelectVideo = (video) => {
    setSelectedVideo(video);
    // console.log(`selected ${video.snippet.title}`);
  }

  const onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return(
    <div className='ui container' style={{marginTop: '10px'}}>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onSelectVideo={onSelectVideo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;