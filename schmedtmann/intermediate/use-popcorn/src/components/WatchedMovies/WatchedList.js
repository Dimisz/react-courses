import WatchedMovie from "./WatchedMovie";

const WatchedList = ({watched}) => {
  return(
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;