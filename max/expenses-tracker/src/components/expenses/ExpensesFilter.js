import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesFilter = ({expenses}) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const handleSelect = (e) => {
    // setSelectedYear(e.target.value);
    const selected = e.target.value;
    if(selected === 'all'){
      setFilteredExpenses([...expenses]);
    }
    else {
      setFilteredExpenses(expenses.filter((expense) => {
        return expense.date.getFullYear() === Number(selected);
      }));
    }
  }

  return(
    <>
      <label htmlFor='year-selected'></label>
      <select id='year-selected' name="year-selected" onChange={handleSelect}>
        <option value='all'>All</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
      {filteredExpenses.map((expense) => {
        return(
            <ExpenseItem key={expense.id} expense={expense}/>
        );
      })}
    </>
  )
};

export default ExpensesFilter;