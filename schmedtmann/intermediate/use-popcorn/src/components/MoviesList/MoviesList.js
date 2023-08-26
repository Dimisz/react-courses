import Movie from "./Movie";

const MoviesList = ({movies, setSelectedId, selectedId}) => {
  return(
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie 
          key={movie.imdbID} 
          movie={movie} 
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>
  );
}

export default MoviesList;