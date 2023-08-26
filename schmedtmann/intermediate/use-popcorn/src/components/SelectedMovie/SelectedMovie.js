import { useEffect, useState } from "react";
import { API_KEY } from "../../API_KEY";
import StarRating from "../StarRating/StarRating";
import Loader from "../UI/Loader";

const SelectedMovie = ({selectedId, setSelectedId}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const {
    Title: title, 
    Year: year, 
    Poster: poster, 
    Runtime: runtime, 
    imdbRating, 
    Plot: plot, 
    Released: released, 
    Actors: actors,
    Director: director,
    Genre: genre
  } = movie;

  console.log(title, year);

  useEffect(() => {
    const getMovieDetails = async() => {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  return(
   <> {
    isLoading
    ?
    <Loader />
    :
      <div className="details">
      <header>
        <button 
          className="btn-back" 
          onClick={() => setSelectedId(null)}>
            &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p><span>⭐️</span>{imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          <StarRating
              size={24}
              maxRating={10}
            />
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  }</>
  );
}

export default SelectedMovie;