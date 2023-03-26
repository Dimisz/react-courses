import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Search for videos.</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return(
    <div>
      <div className='ui embed'>
        <iframe src={videoUrl} />
      </div>
      <div className='ui segment'>
        <h2 className='ui header'>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;