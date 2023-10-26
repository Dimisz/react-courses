import { API_KEY } from "./data/API_KEY";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainSection from "./components/main-section/MainSection";
import SectionBox from "./components/layout/section-box/SectionBox";
import WatchedMoviesSummary from "./components/main-section/watched-movies/WatchedMoviesSummary";
import WatchedMoviesList from "./components/main-section/watched-movies/WatchedMoviesList";
import FoundMoviesList from "./components/main-section/found-movies/FoundMoviesList";
import Loader from "./components/layout/indicators/Loader";
import ErrorMessage from "./components/layout/indicators/ErrorMessage";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`)
    //   .then((res) => res.json())
    //   .then((data) => setMovies(data.Search || []))
    //   .catch((error) => console.log(error));
    const fetchMovies = async () => {
      setIsLoading(true);
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`);
        if(!res.ok) throw new Error('Something went wrong fetching movies. Try again!');
        const data = await res.json();
        setMovies(data.Search || []);
        setError("");
      }
      catch(error: any) {
        console.error(error.message);
        setError(error.message);
      }
      finally {
        setIsLoading(false);
      }
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
        <SectionBox>
          {!isLoading 
            && !error 
            && movies.length > 0 && <FoundMoviesList movies={movies}/>}
          {!isLoading 
            && !error 
            && movies.length == 0 && <ErrorMessage errorMessage={"No movies found"}/>}
          {isLoading && !error && <Loader/>}
          {error && <ErrorMessage errorMessage={error}/>}
        </SectionBox>
        <SectionBox>
          <WatchedMoviesSummary watchedMovies={watched}/>
          <WatchedMoviesList watchedMovies={watched}/>
        </SectionBox>
      </MainSection>
    </>
  );
}