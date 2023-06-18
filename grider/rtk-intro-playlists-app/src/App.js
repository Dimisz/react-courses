import "./styles.css";
import { useDispatch } from 'react-redux';
import { resetMovies, resetSongs } from './store';

import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";


export default function App() {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(resetMovies());
    dispatch(resetSongs());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}