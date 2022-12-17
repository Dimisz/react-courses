import BookShow from "./BookShow";

const BookList = ({ books }) => {
  return(
    <div>
      <h1>Book List</h1>
      {books.map((book) => <BookShow key={book.id} title={book.title}/>)}

    </div>

  );
}

export default BookList;