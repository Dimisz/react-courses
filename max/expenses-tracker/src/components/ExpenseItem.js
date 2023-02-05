import React from 'react';

import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  const expenseDate = new Date().toLocaleDateString();

  return(
    <div className='expense-item'>
      <div>{expense.date}</div>
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;