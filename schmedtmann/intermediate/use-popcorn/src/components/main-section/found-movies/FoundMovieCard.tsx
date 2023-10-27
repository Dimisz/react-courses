import { Movie } from "../../../models/movie";

interface Props {
  movie: Movie;
  handleSelectId: (imdbId: string) => void;
}

const FoundMovieCard = ({ movie, handleSelectId }: Props) => {
  return(
    <li onClick={() => handleSelectId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
export default FoundMovieCard;