import { WatchedMovie } from "../../../models/watchedMovie";

interface Props {
  watchedMovie: WatchedMovie;
  handleDeleteWatchedMovie: (id: string | null) => void;
}

const WatchedMovieCard = ({watchedMovie, handleDeleteWatchedMovie}:Props) => {
  return(
    <li>
      <img src={watchedMovie.Poster} alt={`${watchedMovie.Title} poster`} />
      <h3>{watchedMovie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watchedMovie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watchedMovie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watchedMovie.runtime}</span>
        </p>
        <button 
          className="btn-delete" 
          onClick={() => handleDeleteWatchedMovie(watchedMovie.imdbID || '')}
        >x</button>
      </div>
    </li>
  );
}
export default WatchedMovieCard;