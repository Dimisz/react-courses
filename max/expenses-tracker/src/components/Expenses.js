import './Expenses.css';

import ExpenseItem from './ExpenseItem';

const Expenses = ({expenses}) => {
  const renderedExpenses = expenses.map((expense) => <ExpenseItem expense={expense} key={expense.id}/>);

  return(
    
    <div className='expenses'>{renderedExpenses}</div>
  );

}

export default Expenses;