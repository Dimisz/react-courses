import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

import { useDispatch } from 'react-redux';
import { clearSongs, clearMovies } from './store';

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(clearMovies());
    dispatch(clearSongs());
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