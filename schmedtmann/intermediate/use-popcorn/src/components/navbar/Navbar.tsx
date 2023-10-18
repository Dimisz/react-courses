import Logo from "./Logo";
import NumResults from "./NumResults";
import SearchBar from "./SearchBar";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  numResults: number;
}

const Navbar = ({ query, setQuery, numResults } : Props) => {
  return(
    <nav className="nav-bar">
        <Logo/>
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults numResults={numResults} />
      </nav>
  )
}

export default Navbar;