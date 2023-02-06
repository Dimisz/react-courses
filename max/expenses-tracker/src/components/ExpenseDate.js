const ExpenseDate = ({ month, day, year }) => {
  
  return(
    <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
  );
}

export default ExpenseDate;