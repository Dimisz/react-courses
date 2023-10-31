import "./index.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useAppDispatch } from "./store";
import { songsSlice } from "./store/songsSlice";
import { moviesSlice } from "./store/moviesSlice";

export default function App() {
  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    dispatch(songsSlice.actions.clearSongs());
    dispatch(moviesSlice.actions.clearMovies());
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