import React from 'react';
import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ expense }) => {
  const month = expense.date.toLocaleString('en-US', {month: 'long'});
  const year = expense.date.getFullYear();
  const day = expense.date.toLocaleString('en-US', {day: '2-digit'})

  return(
    <div className='expense-item'>
      <ExpenseDate month={month} day={day} year={year} />
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;