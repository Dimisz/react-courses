import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState('');
  
  const createBook = (event) => {
    event.preventDefault();
    setBooks(books.concat({title: bookTitle, id: Math.random()}));
    setBookTitle('');
    console.log(books);
  }

  const handleInput = (event) => {
    setBookTitle(event.target.value);
  }

  return(
    <>
      <h1>Reading List App</h1>
      <BookCreate onCreateBook={createBook} handleInput={handleInput} bookTitle={bookTitle} />
      <BookList books={books} />
    </>
  );
}

export default App;