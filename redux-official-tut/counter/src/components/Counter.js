import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => {
      return previousCount + 1;
    })
  }

  return(
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default Counter;