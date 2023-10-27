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
import SelectedMovieDetails from "./components/selected-movie/SelectedMovieDetails";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelectId = (imdbId: string | null) => {
    setSelectedId(imdbId);
  }


  useEffect(() => {
    // fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`)
    //   .then((res) => res.json())
    //   .then((data) => setMovies(data.Search || []))
    //   .catch((error) => console.log(error));
    const fetchMovies = async () => {
      setMoviesLoading(true);
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query.toLowerCase().trim()}`);
        if(!res.ok) throw new Error('Something went wrong fetching movies. Try again!');
        const data = await res.json();
        setMovies(data.Search || []);
        // console.log(data);
        setError("");
      }
      catch(error: any) {
        console.error(error.message);
        setError(error.message);
      }
      finally {
        setMoviesLoading(false);
      }
    }
    if(query.length < 3){
      setMovies([]);
      setError('');
      return;
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
          {!moviesLoading 
            && !error 
            && movies.length > 0 && <FoundMoviesList movies={movies} handleSelectId={handleSelectId} />}
          {!moviesLoading 
            && !error 
            && movies.length == 0 && <ErrorMessage errorMessage={"No movies found"}/>}
          {moviesLoading && !error && <Loader message='Loading movies...'/>}
          {error && <ErrorMessage errorMessage={error}/>}
        </SectionBox>
        <SectionBox>
          { selectedId && <SelectedMovieDetails selectedId={selectedId} handleSelectId={handleSelectId} /> }
          { !selectedId &&
            <>
              <WatchedMoviesSummary watchedMovies={watched}/>
              <WatchedMoviesList watchedMovies={watched}/>
            </>
          }
        </SectionBox>
      </MainSection>
    </>
  );
}