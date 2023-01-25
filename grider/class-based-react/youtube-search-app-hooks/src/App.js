import React, { useState } from 'react';

import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import youtubeApi from './api/youtubeApi';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onFormSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: term
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  
  return(
    <div className='ui container'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className='five wide column'>
            <VideoList videos={videos}
                        onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;