import { useContext } from "react";
import BooksContext from "../context/books";

import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(BooksContext);
  
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    });
  return(
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderedBooks}
    </div>

  );
}

export default BookList;