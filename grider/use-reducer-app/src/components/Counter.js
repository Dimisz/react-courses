import { useState } from "react";
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [enteredValue, setEnteredValue] = useState('');

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  }

  const decrement = () => {
    setCount((prev) => {
      return prev - 1;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount((prev) => {
      return prev + (Number(enteredValue) || 0);
    })
  }

  return(
    <div className={styles.container}>
      <h1>Current count: {count}</h1>
      <div className={styles.btns}>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='add-alot'>Add a lot</label>
        <input 
          type='number' 
          id='add-alot' 
          name='add-alot' 
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
        <button type='submit'>Add It!</button>
      </form>
    </div>
  )
}

export default Counter;