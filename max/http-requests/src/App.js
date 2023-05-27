import MoviesList from "./components/MoviesList";
import { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    fetch('https://swapi.dev/api/film/')
      .then((res) => {
        if(!res.ok){
          throw new Error('Something went wrong!');
        };
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((e) => setError(e.message));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return(
    <main>
      <h1>Movies</h1>
      <MoviesList movies={movies} error={error}/>
    </main>
  )
}

export default App;