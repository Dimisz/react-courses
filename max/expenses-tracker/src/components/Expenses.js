import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return(
    <Card className='expenses'>
      {expenses.map((expense) => {
        return(
          <ExpenseItem key={expense.id} expense={expense}/>
        );
      })}
    </Card>
  )
}

export default Expenses;