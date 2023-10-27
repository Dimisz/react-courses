import { SelectedMovie } from "../../models/selectedMovie";
import StarRating from "../star-rating/StarRating";
interface Props {
  movie: SelectedMovie;
}

const SelectedMovieCard = ({movie}: Props) => {
  const movieRating = Math.ceil(Number(movie.imdbRating) || 0);

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
          <StarRating maxRating={10} size={24} currentRating={movieRating}/>
        </div>
        <p><em>{movie.Plot}</em></p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}

export default SelectedMovieCard;