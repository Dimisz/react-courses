import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = ({handleSubmit}) => {
  return(
    <div className='new-expense'>
      <NewExpenseForm handleSubmit={handleSubmit}/>
    </div>
  );
};

export default NewExpense;