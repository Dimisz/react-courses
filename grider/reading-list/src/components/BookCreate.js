import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" onChange={handleInput} value={title}/>
        <button className="button" type="submit"> Create! </button>
      </form>
    </div>
  );
}

export default BookCreate;