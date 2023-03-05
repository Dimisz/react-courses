import { useState } from 'react';

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expense-input/NewExpense";
import ExpensesFilter from './components/expenses/ExpensesFilter';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [items, setItems] = useState(expenses);
  
  const onSubmit = (newExpense) => {
    setItems((prevItems) => {
      return [...prevItems, newExpense]
    });
  }

  return (
      <>
        <NewExpense handleSubmit={onSubmit}/>
        <Expenses expenses={items}/>
      </>
  );
}

export default App;
