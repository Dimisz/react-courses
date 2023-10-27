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
import { SelectedMovie } from "./models/selectedMovie";
import SelectedMovieCard from "./components/selected-movie/SelectedMovieCard";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [moviesLoading, setMoviesLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [selectedId, setSelectedId] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie | null>(null);
  const [selectedMovieLoading, setSelectedMovieLoading] = useState(false);
  const [selectedMovieError, setSelectedMovieError] = useState("");

  const handleSelectId = (imdbId: string) => {
    setSelectedId(imdbId);
  }

  const handleResetSelectedMovie = () => {
    setSelectedId('');
    setSelectedMovie(null);
    setSelectedMovieLoading(false);
    setSelectedMovieError('');
  }

  useEffect(() => {
    const fetchSelectedMovie = async () => {
      setSelectedMovieLoading(true);
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}&plot=full`);
        if(!res.ok) throw new Error('Something went wrong fetching movies. Try again!');
        const data = await res.json();
        setSelectedMovie({
          Title: data.Title,
          Released: data.Released,
          Runtime: data.Runtime,
          Genre: data.Genre,
          imdbRating: Number(data.imdbRating) || 0,
          Plot: data.Plot,
          Actors: data.Actors,
          Director: data.Director,
          Poster: data.Poster
        } || null);
        // console.log(data);
        setSelectedMovieError("");
      }
      catch(error: any) {
        // console.error(error.message);
        setSelectedMovieError(error.message);
      }
      finally {
        setSelectedMovieLoading(false);
      }
    }

    if(selectedId === '') return;
    fetchSelectedMovie();
  }, [selectedId]);


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
          {selectedMovieLoading && !selectedMovieError && <Loader message={'Loading the selected movie...'}/>}
          {selectedMovieError && 
            <>
              <button className="btn-back" onClick={handleResetSelectedMovie}>{'<-'}</button>
              <ErrorMessage errorMessage={"Failed to fetch movie details("}/>
            </>
          }
          {selectedMovie && !selectedMovieLoading && 
            <>
              <button className="btn-back" onClick={handleResetSelectedMovie}>{'<-'}</button>
              <SelectedMovieCard movie={selectedMovie} />
            </>
          }
          {!selectedMovie && !selectedMovieLoading && !selectedMovieError &&
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