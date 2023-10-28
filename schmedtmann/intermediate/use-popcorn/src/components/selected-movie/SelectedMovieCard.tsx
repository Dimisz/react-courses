import { useState } from "react";
import { SelectedMovie } from "../../models/selectedMovie";
import { WatchedMovie } from "../../models/watchedMovie";
import StarRating from "../star-rating/StarRating";
interface Props {
  movie: SelectedMovie;
  addWatchedMovie: (watchedMovie: WatchedMovie) => void;
  handleResetSelectedMovie: () => void;
}

const SelectedMovieCard = ({movie, addWatchedMovie, handleResetSelectedMovie}: Props) => {
  const movieRating = Math.ceil(Number(movie.imdbRating) || 0);
  const [userRating, setUserRating] = useState(movieRating);

  const addMovieToWatched = () => {
    const watchedMovie = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Released,
      Poster: movie.Poster,
      runtime: movie.Runtime,
      imdbRating: movie.imdbRating,
      userRating: userRating
    };
    addWatchedMovie(watchedMovie);
    handleResetSelectedMovie();
  }

  return(
    <div className="details">
      <header>
        <img src={movie.Poster} alt={`Poster of the ${movie.Title} movie`}/>
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>{movie.Released} &bull; {movie.Runtime}</p>
          <p>{movie.Genre}</p>
          <p>⭐️ {movie.imdbRating} IMDB rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating maxRating={10} size={24} currentRating={movieRating} setUserRating={setUserRating}/>
        </div>
        <button 
          onClick={addMovieToWatched}
          className="btn-add"
        >
          Add to Watched
        </button>
        <p><em>{movie.Plot}</em></p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}

export default SelectedMovieCard;