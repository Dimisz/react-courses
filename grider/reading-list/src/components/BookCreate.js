import { useState } from 'react';

const BookCreate = ({ onCreateBook }) => {
  const [title, setTitle] = useState('');

  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateBook(title);
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