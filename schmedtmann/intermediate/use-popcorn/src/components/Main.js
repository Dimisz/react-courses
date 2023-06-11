import { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedMovies/WatchedBox";

const Main = ({movies, watched, average}) => {
  // const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);

 
  return(
    <main className="main">
        <ListBox movies={movies} />
        <WatchedBox watched={watched} average={average}/>
    </main>
  )
}

export default Main;