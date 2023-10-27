import { useEffect, useState } from "react";
import { SelectedMovie } from "../../models/selectedMovie";
import Loader from "../layout/indicators/Loader";
import ErrorMessage from "../layout/indicators/ErrorMessage";
import SelectedMovieCard from "./SelectedMovieCard";
import { API_KEY } from "../../data/API_KEY";

interface Props {
  selectedId: string | null;
  handleSelectId: (id: string | null) => void;
}

const SelectedMovieDetails = ({selectedId, handleSelectId}: Props) => {

  const [selectedMovie, setSelectedMovie] = useState<SelectedMovie | null>(null);
  const [selectedMovieLoading, setSelectedMovieLoading] = useState(false);
  const [selectedMovieError, setSelectedMovieError] = useState("");

  const handleResetSelectedMovie = () => {
    handleSelectId(null);
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
  
  return(
      <>
        <button className="btn-back" onClick={handleResetSelectedMovie}>&larr;</button>
        { selectedMovieLoading && !selectedMovieError && <Loader message={'Loading the selected movie...'}/> }
        { selectedMovieError && <ErrorMessage errorMessage={"Failed to fetch movie details("}/> }
        { selectedMovie && !selectedMovieLoading && !selectedMovieError && <SelectedMovieCard movie={selectedMovie} /> }
      </>
  );
}

export default SelectedMovieDetails;