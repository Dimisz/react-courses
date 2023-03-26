import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  }

  return(
    <div className='ui segment'>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='search-bar'>Search Videos</label>
          <input 
                type='text'
                id='search-bar'
                name='search-bar'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;