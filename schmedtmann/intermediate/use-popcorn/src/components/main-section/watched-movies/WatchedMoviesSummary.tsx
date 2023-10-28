import { WatchedMovie } from "../../../models/watchedMovie";

interface Props {
  watchedMovies: WatchedMovie[];
}

const average = (arr: number[]) =>
  arr.reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);

const WatchedMoviesSummary = ({watchedMovies}:Props) => {
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => Number(movie.runtime.split(' ')[0])));
  return(
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed()} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedMoviesSummary;