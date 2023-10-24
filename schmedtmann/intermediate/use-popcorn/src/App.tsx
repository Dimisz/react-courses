import { API_KEY } from "./data/API_KEY";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainSection from "./components/main-section/MainSection";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []))
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <>
      <Navbar 
        query={query} 
        setQuery={setQuery} 
        numResults={movies.length}
      />
      <MainSection movies={movies} watchedMovies={watched} />
    </>
  );
}