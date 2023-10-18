import { useState } from "react";
import { Movie } from "../../../models/movie";
import ToggleButton from "../../layout/toggle-button/ToggleButton";
import FoundMoviesList from "./FoundMoviesList";
interface Props {
  movies: Movie[];
}

const FoundMoviesBox = ({ movies }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return(
    <div className="box">
      <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && <FoundMoviesList movies={movies}/>}
    </div>
  )
}
export default FoundMoviesBox;