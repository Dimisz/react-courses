import { Movie } from "../../../models/movie";
import FoundMovieCard from "./FoundMovieCard";

interface Props {
  movies: Movie[];
}

const FoundMoviesList = ({ movies }: Props) => {
  return(
    <ul className="list">
      {movies?.map((movie) => (
        <FoundMovieCard key={movie.imdbID} movie={movie}/>
      ))}
    </ul>
  );
}

export default FoundMoviesList;