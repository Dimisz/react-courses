import { Movie } from "../../models/movie";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  movies: Movie[];
}

const Navbar = ({ query, setQuery, movies } : Props) => {
  return(
    <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
  )
}

export default Navbar;