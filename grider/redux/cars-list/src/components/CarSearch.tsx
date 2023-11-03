import { setSearchTerm, useAppDispatch, useAppSelector } from "../store";

const CarSearch = () => {
  const searchTerm = useAppSelector(state => state.searchState.searchTerm);
  const dispatch = useAppDispatch();
  
  return(
    <div className="list-headers">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label" htmlFor="search">Search</label>
        <input 
          className="input"
          name="search"
          id="search"
          type='text'
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
    </div>
  );
}

export default CarSearch;