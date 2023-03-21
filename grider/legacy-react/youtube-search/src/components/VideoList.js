import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, onSelectVideo}) => {
  return(
    <div className='ui relaxed divided list'>
      {videos.map((video) => {
          return <VideoItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />
        })}
    </div>
  );
}

export default VideoList;