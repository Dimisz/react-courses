import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

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
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });
      setResults(data.query.search);
      console.log(results);
      console.log(term);
    };

    if(term){search();}

  }, [term]);

  const renderedResults = results.map((result) => {
    return(
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a 
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
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
    )
  })
  return(
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='search-field'>Enter Search Term</label>
          <input 
              id='search-field' 
              name='search-field' 
              className='input'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
}

export default Search;