import { useState } from "react";
import { searchCars, useAppDispatch } from "../store";

const CarSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const dispatch = useAppDispatch();
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    dispatch(searchCars(term));
  }
  return(
    <div>
      <h1>My Cars</h1>
      <input 
        type='text'
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        />
    </div>
  );
}

export default CarSearch;