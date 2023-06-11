import ListBox from "./MoviesList/ListBox";
import WatchedBox from "./WatchedMovies/WatchedBox";

const Main = ({children}) => {
  // const [movies, setMovies] = useState(tempMovieData);
  // const [watched, setWatched] = useState(tempWatchedData);

 
  return(
    <main className="main">
        {children}
    </main>
  )
}

export default Main;