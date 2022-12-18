const BookShow = ({book, onDelete}) => {
  return(
     <div className="book-show">
        {book.title}
        <div className="actions">
          <button className="delete" onClick={() => onDelete(book.id)}>
            Delete
          </button>
        </div>
      </div>
  );
}

export default BookShow;