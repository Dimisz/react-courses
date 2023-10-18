import { WatchedMovie } from "../../../models/watchedMovie";
import WatchedMovieCard from "./WatchedMovieCard";

interface Props {
  watchedMovies: WatchedMovie[];
}

const WatchedMoviesList = ({watchedMovies}:Props) => {
  return(
    <ul className="list">
      {watchedMovies.map((watchedMovie) => (
        <WatchedMovieCard key={watchedMovie.imdbID} watchedMovie={watchedMovie}/>
      ))}
    </ul>
  );
}

export default WatchedMoviesList;