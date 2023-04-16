import { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  }

  const decrement = () => {
    setCount((count) => {
      return count - 1;
    });
  }

  return(
    <>
      <h1>Count is {count}</h1>
      <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
      </div>
    </>
  );
}

export default CounterPage;