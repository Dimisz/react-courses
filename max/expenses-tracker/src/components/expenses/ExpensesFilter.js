import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpensesFilter = ({expenses}) => {
  //console.log(`filter called`);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  // const [selectedYear, setSelectedYear] = useState('all');

  const handleSelect = (e) => {
    const selected = e.target.value;
    // console.log(`selected: ${selected}`);
    if(selected === 'all'){
      setFilteredExpenses([...expenses]);
    }
    else {
      setFilteredExpenses(expenses.filter((expense) => {
        return expense.date.getFullYear() === Number(selected);
      }));
    }
  }

  const renderedExpenses = filteredExpenses.length === 0 
          ? <p>No expenses found</p>
          : filteredExpenses.map((expense) => {
            return(
                <ExpenseItem key={expense.id} expense={expense}/>
            );
  }); 

  return(
    <>
      <label htmlFor='year-selected'>Filter by year</label>
      <select id='year-selected' name="year-selected" onChange={handleSelect}>
        <option value='all'>All</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      {renderedExpenses}
    </>
  )
};

export default ExpensesFilter;