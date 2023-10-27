import { Movie } from "../../../models/movie";
import FoundMovieCard from "./FoundMovieCard";

interface Props {
  movies: Movie[];
  handleSelectId: (imdbId: string) => void;
}

const FoundMoviesList = ({ movies, handleSelectId }: Props) => {
  return(
    <ul className="list">
      {movies?.map((movie) => (
        <FoundMovieCard key={movie.imdbID} movie={movie} handleSelectId={handleSelectId}/>
      ))}
    </ul>
  );
}

export default FoundMoviesList;