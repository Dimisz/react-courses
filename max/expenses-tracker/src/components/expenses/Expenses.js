import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card';
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
  return(
    <Card className='expenses'>
      <ExpensesFilter expenses={expenses} />
    </Card>
  )
}

export default Expenses;