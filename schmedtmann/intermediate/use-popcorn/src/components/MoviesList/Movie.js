const Movie = ({movie, setSelectedId, selectedId}) => {
  const handleSelectId = (id) => {
    if(id === selectedId){
      setSelectedId(null);
    }
    else {
      setSelectedId(id);
    }
  }

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

export default Movie;