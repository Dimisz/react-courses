import { useEffect, useContext } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

const App = () => {
  
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
    //console.log(`Called fetch books from APP: ${books}`);
  }, []);


  

  return(
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;