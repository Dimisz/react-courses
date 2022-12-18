import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} />
    });
  return(
    <div className="book-list">
      {renderedBooks}
    </div>

  );
}

export default BookList;