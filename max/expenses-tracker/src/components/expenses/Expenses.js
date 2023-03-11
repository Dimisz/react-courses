import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
  return(
    <>
      <Card className='expenses'>
        <ExpensesChart expenses={expenses} />
      </Card>
      <Card className='expenses'>
        <ExpensesFilter expenses={expenses} />
      </Card>
    </>
  )
}

export default Expenses;