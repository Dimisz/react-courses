import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  
  useEffect(() => {
    // first approach
    // (async () => {
    //   await axios.get('hhhhh');
    // })();

    // second approach
    // axios.get('kkkk')
    //   .then((response) => {
    //     console.log(response)
    //   });

    //  RECOMMENDED APPROACH
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
    };
    search();

  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  }

  return(
    <div>
      <div className='ui form' onSubmit={handleSubmit}>
        <form className='field'>
          <label htmlFor='search-field'>Enter Search Term</label>
          <input 
              id='search-field' 
              name='search-field' 
              className='input'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;