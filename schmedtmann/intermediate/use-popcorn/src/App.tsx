import { API_KEY } from "./data/API_KEY";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainSection from "./components/main-section/MainSection";
import FoundMoviesBox from "./components/main-section/found-movies/FoundMoviesBox";
import WatchedMoviesBox from "./components/main-section/watched-movies/WatchedMoviesBox";

const Loader = () => {
  return <p className="loader">Loading movies...</p>;
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`)
    //   .then((res) => res.json())
    //   .then((data) => setMovies(data.Search || []))
    //   .catch((error) => console.log(error));
    const fetchMovies = async () => {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`);
      const data = await res.json();
      setMovies(data.Search || []);
      setIsLoading(false);
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar 
        query={query} 
        setQuery={setQuery} 
        numResults={movies.length}
      />

      <MainSection>
        {isLoading ? <Loader/> : <FoundMoviesBox movies={movies}/>}
        <WatchedMoviesBox watchedMovies={watched}/>
      </MainSection>
    </>
  );
}