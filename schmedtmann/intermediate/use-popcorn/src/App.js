import { useState, useEffect } from "react";

//navbar components
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Navbar/Search";
import NumResults from "./components/Navbar/NumResults";
//main section components
import Main from "./components/Main";
import ListBox from "./components/UI/ListBox";

import MoviesList from "./components/MoviesList/MoviesList";
// UI Notifications
import Loader from "./components/UI/Loader";
import ErrorMessage from "./components/UI/ErrorMessage";

import Summary from "./components/WatchedMovies/Summary";
import WatchedList from "./components/WatchedMovies/WatchedList";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";

import { API_KEY } from "./API_KEY";


const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchMovies = async() => {
      try{
        setIsLoading(true);
        setHasError(false);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        if(!res.ok){
          setErrorMessage("Unable to fetch data");
          throw new Error("Something went wrong with fetching movies");
        }

        
        const data = await res.json();
        if(data.Response === 'False'){
          setErrorMessage("Movie not found");
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
      }
      catch(err){
        setHasError(true);
        console.error(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    if(query.length < 3){
      setMovies([]);
      setHasError(false);
      return;
    }

    fetchMovies();
  }, [query]);
  

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
      <Main>
        <ListBox>
          {
            isLoading && !hasError && <Loader />
          }
          {
            !isLoading && !hasError && <MoviesList movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
          }
          {
            hasError && <ErrorMessage message={errorMessage} />
          }


        </ListBox>
        <ListBox>
          {
            selectedId 
            ?
            <SelectedMovie setSelectedId={setSelectedId} selectedId={selectedId}/>
            :
            <>
              <Summary watched={watched} average={average}/>
              <WatchedList watched={watched} />
            </>
          }
          
        </ListBox>
      </Main>
    </>
  );
}