import { useState } from 'react';
import './ExpenseItem.css'

import Date from './Date';
import Card from '../ui/Card';

const ExpenseItem = ({expense}) => {
  const [title, setTitle] = useState(expense.title);

  const handleClick = () => {
    console.log('Button clicked');
    setTitle('Changed');
  };

  return(
    
      <Card className='expense-item'>
        <Date date={expense.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${expense.amount}</div>
        </div>
        <button onClick={handleClick}>Change Title</button>
      </Card>
    
  );
}

export default ExpenseItem;