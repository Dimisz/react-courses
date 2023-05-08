import { useState, useEffect } from 'react';
import axios from 'axios';

const SWMovies = () => {
  const [selected, setSelected] = useState(1);
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://swapi.dev/api/films/${selected}`);
      setMovie({
        director: res.data.director,
        title: res.data.title
      });
    }
    getData();
  }, [selected]);

  const movieParts = [1, 2, 3, 4, 5, 6];
  const renderedOptions = movieParts.map((part) => {
    return <option key={part} value={part}>{part}</option>;
  });

  return(
    <div>
      <h1>Pick a movie</h1>
      <p>You chose {selected}</p>
      {movie 
        &&
      <div>
        <h2>{movie.title}</h2>
        <p>by {movie.director}</p>
      </div>
      }
      
      <select 
        value={selected} 
        onChange={(e) => setSelected(e.target.value)}
      >
        {renderedOptions}
      </select>
    </div>
  )
}

export default SWMovies;