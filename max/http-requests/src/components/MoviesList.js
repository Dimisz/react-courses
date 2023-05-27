import styles from './MoviesList.module.css';

const MoviesList = ({movies, error}) => {
  const renderedMovies = movies.map((movie) => {
    return(
      <li key={movie.episode_id} className={styles.card}>
          <h2>{movie.title} by {movie.director}</h2>
          <p>{movie.opening_crawl}</p>
          <p className={styles['release-date']}>Released on {movie.release_date}</p>
      </li>
    );
  });
  console.log(error);

  return(
    <ul className={styles.list}>
      {error 
      ? <h2>{error}</h2>
      : movies.length > 0 
      ? renderedMovies 
      : <h2>Loading...</h2>
    }
    </ul>
  )
}

export default MoviesList;