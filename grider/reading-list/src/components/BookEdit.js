import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({ book, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setNewTitle(event.target.value);
    // console.log(`newTitle: ${newTitle}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`new title is: ${newTitle}`)
    onSubmit();
    editBookById(book.id, newTitle);
  };

  return(
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={newTitle} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;