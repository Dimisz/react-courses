import { useState } from 'react';

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);
  
  const incrementCount = () => {
    setCurrentCount((prev) => {
      return prev + 1;
    });
  }

  const decrementCount = () => {
    setCurrentCount((prev) => {
      return prev - 1;
    });
  }

  return(
    <div>
      <h1>Current count: {currentCount}</h1>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
  )
}
export default Counter;