import MoviesList from "./components/MoviesList";
import { useState, useEffect } from "react";
import './App.css';
import { API_KEY } from "./api-key";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_KEY}/movies.json`, {
      method: 'POST',
      body: JSON.stringify(movieTitle),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    setMovieTitle('');
  }


  const fetchMovies = () => {
    fetch('https://swapi.dev/api/films/')
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
      <h2>Add your own title: </h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
      </form>
      <MoviesList movies={movies} error={error}/>
    </main>
  )
}

export default App;