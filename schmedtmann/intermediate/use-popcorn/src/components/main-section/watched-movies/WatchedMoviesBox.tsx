import { useState } from "react";
import { WatchedMovie } from "../../../models/watchedMovie";
import WatchedMoviesSummary from "./WatchedMoviesSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import ToggleButton from "../../layout/toggle-button/ToggleButton";

interface Props {
  watchedMovies: WatchedMovie[];
}

const WatchedMoviesBox = ({watchedMovies} : Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return(
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <>
          <WatchedMoviesSummary watchedMovies={watchedMovies}/>
          <WatchedMoviesList watchedMovies={watchedMovies}/>
        </>
      )}
    </div>
  );
}

export default WatchedMoviesBox;