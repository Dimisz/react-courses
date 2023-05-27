const movies = [
  { id: 'm1', name: 'Star Wars', director: 'Spielberg' },
  { id: 'm2', name: 'Micky', director: 'Hammlberg' },
  { id: 'm3', name: 'Bar Wars', director: 'Olo' },
]


const MoviesList = () => {
  const renderedMovies = movies.map((movie) => {
    return(
      <li key={movie.id}>{movie.name} by {movie.director}</li>
    );
  });
  return(
    <ul>
      {renderedMovies}
    </ul>
  )
}

export default MoviesList;