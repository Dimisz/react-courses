import { createRandomMovie } from "../data/data";
import { useAppDispatch, useAppSelector } from "../store";
import { moviesSlice } from "../store/moviesSlice";

const MoviePlaylist = () => {
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const handleMovieAdd = (movie: string) => {
    dispatch(moviesSlice.actions.addMovie(movie));
  };
  const handleMovieRemove = (movie: string) => {
    dispatch(moviesSlice.actions.removeMovie(movie));
  };

  const renderedMovies = movies.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;