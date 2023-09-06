const Square = ({ value, onSquareClick }) => {
  const handleClick = () => {
    setValue('X');
  }

  return(
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;