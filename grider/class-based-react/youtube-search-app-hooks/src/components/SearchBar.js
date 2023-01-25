import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
    setSearchTerm('');
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return(
    <div className='search-bar ui segment'>
      <form className='ui form' 
            onSubmit={handleFormSubmit}
      >
        <div className='field'>
          <label>
            Video Search
          </label>
          <input type='text'
                  onChange={onInputChange}
                  value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
}


export default SearchBar;