import React from 'react';
import './ExpenseItem.css'

import Date from './Date';

const ExpenseItem = ({expense}) => {
 
  return(
    <div className='expense-item'>
      <Date date={expense.date} />
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;