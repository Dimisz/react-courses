const BookCreate = ({ onCreateBook, handleInput, bookTitle }) => {
  return (
    <form onSubmit={onCreateBook}>
      <input type="text" onChange={handleInput} value={bookTitle}/>
      <button> Add </button>
    </form>
  );
}

export default BookCreate;