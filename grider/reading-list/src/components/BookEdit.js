import { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (event) => {
    setNewTitle(event.target.value);
    // console.log(`newTitle: ${newTitle}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(`new title is: ${newTitle}`)
    onEdit(book.id, newTitle);
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