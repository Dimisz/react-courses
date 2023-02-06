import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = ({expenses}) => {
  const renderedExpenses = expenses.map((expense) => <ExpenseItem expense={expense} key={expense.id}/>);

  return(
   
      <Card className='expenses'>{renderedExpenses}</Card>
 
  );
}

export default Expenses;