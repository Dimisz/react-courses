import { useState } from 'react';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
       {id: Math.round(Math.random() * 999), title}
    ];
    setBooks(updatedBooks);
  }

  return(
    <div className='app'>
      <h1>Reading List App</h1>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreateBook={createBook} />
    </div>
  );
}

export default App;