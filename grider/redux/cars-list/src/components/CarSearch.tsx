import { setSearchTerm, useAppDispatch } from "../store";

const CarSearch = () => {
  
  const dispatch = useAppDispatch();
  return(
    <div>
      <h1>My Cars</h1>
      <input 
        type='text'
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </div>
  );
}

export default CarSearch;