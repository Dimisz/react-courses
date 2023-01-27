const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' }, 
    { title: 'All Stars', duration: '3:15' },
    { title: 'I want it that way', duration: '2:05' },
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};