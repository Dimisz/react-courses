import { WatchedMovie } from "../../../models/watchedMovie";
import WatchedMovieCard from "./WatchedMovieCard";

interface Props {
  watchedMovies: WatchedMovie[];
  handleDeleteWatchedMovie: (id: string | null) => void;
}

const WatchedMoviesList = ({watchedMovies, handleDeleteWatchedMovie}:Props) => {
  return(
    <ul className="list">
      {watchedMovies.map((watchedMovie) => (
        <WatchedMovieCard 
          key={watchedMovie.imdbID} 
          watchedMovie={watchedMovie} 
          handleDeleteWatchedMovie={handleDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;