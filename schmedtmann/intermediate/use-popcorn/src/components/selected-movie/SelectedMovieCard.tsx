import { SelectedMovie } from "../../models/selectedMovie";
interface Props {
  movie: SelectedMovie;
}

const SelectedMovieCard = ({movie}: Props) => {
  return(
    <div className="details">
      <header>
        <img src={movie.Poster} />
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>
            <span>{movie.Released}</span> * 
            <span>{movie.Runtime}</span>
          </p>
          <p>{movie.Genre}</p>
          <p>⭐️ {movie.imdbRating} IMDB rating</p>
        </div>
      </header>
      <section>
        <p>{movie.Plot}</p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
    </div>
  );
}

export default SelectedMovieCard;