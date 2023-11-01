import "./index.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useAppDispatch } from "./store";
import { clearMovies, clearSongs } from "./store";

export default function App() {
  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    dispatch(clearSongs());
    dispatch(clearMovies());
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