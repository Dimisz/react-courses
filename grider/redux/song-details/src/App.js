import React from 'react';
import { selectSong } from './actions';

import SongList from './components/SongList';

const App = () => {
  return(
    <div>
      <SongList />
    </div>
  );
}

export default App;