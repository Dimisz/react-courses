import { WatchedMovie } from "../../models/watchedMovie";
import { Movie } from "../../models/movie";

import FoundMoviesBox from "./found-movies/FoundMoviesBox";
import WatchedMoviesBox from "./watched-movies/WatchedMoviesBox";

interface Props {
  movies: Movie[];
  watchedMovies: WatchedMovie[];
}

const MainSection = ({ movies, watchedMovies }: Props) => {
  return(
    <main className="main">
        <FoundMoviesBox movies={movies}/>
        <WatchedMoviesBox watchedMovies={watchedMovies}/>
      </main>
  );
}
export default MainSection;