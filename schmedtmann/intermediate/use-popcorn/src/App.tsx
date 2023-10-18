import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { movies as tempMoviesData} from "./data/movies";
import { watchedMovies } from "./data/watchedMovies";
import MainSection from "./components/main-section/MainSection";

export default function App() {
  const [movies, setMovies] = useState(tempMoviesData);
  const [watched, setWatched] = useState(watchedMovies);
  const [query, setQuery] = useState("");

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