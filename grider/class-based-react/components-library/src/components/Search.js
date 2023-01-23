import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    // CANNOT USE ASYNC-EFFECT DIRECTLY AS AN ARGUMENT OF useEffect
    // OPTION 1
    const search = async() => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm,
        }
      });
      setResults(data.query.search);
    };
    if(searchTerm){
      search();
    }

    // OPTION 2
    // (async () => {
    //   await axios.get()
    // })(); // immediately executed anonymous function

    // OPTION 3 with promises
    // axios.get('...')
    //   .then((response) => {
    //     console.log(response.data);
    //   });
  }, [searchTerm]);

  return(
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input className='input' 
                 onChange={(event) => setSearchTerm(event.target.value)}
                 value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;