import { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = ({handleSubmit}) => {
  
  const [newExpense, setNewExpense] = useState({
    id: '',
    title: '',
    amount: '', 
    date: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    setNewExpense((prevExpense) => {
      return {...prevExpense, id: `${prevExpense.title}${prevExpense.amount}`}
    });
    handleSubmit(
      {
      ...newExpense, date: new Date(newExpense.date)
      }
    );
    setNewExpense({
      id: '',
      title: '',
      amount: '', 
      date: ''
    })
  }

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input type='text' 
                 id='title' 
                 name='title' 
                 onChange={(e) => setNewExpense((prevExpense) => {
                  return {...prevExpense, title: e.target.value}
                 })}
                 value={newExpense.title}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input type='number' 
                 id='amount' 
                 name='amount' 
                 min='0.01'
                 step='0.01'
                 onChange={(e) => setNewExpense((prevExpense) => {
                  return {...prevExpense, amount: e.target.value}
                 })}
                 value={newExpense.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input type='date' 
                 id='date' 
                 name='date' 
                 min='2023-01-01'
                 step='2024-12-31'
                 onChange={(e) => setNewExpense((prevExpense) => {
                    return {...prevExpense, date: e.target.value}
                 })}
                 value={newExpense.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
    </form>
  );
};

export default NewExpenseForm;