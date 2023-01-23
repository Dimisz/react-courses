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

  const renderedResults = results.map((result) => {
    return(
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a 
            className='ui button'
            href={`https://en.wikipedia.org/wiki/${result.title}`}
            target='_blank'
          
          >Go</a>
        </div>
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;