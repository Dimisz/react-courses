import React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component {
  
  render(){
    const renderedVideos = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} />
    });
    return(
      <div className='ui relaxed divided list'>
        {renderedVideos}
      </div>
    );
  }
}

export default VideoList;