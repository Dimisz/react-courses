import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [typedValue, setTypedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount((prev) => {
      return prev + Number(typedValue.trim());
    });
    setTypedValue('');
  }

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };

  return(
    <main>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={typedValue}
          onChange={(e) => {setTypedValue(e.target.value)}}
        />
        <button type="submit">Add a lot</button>
      </form>
    </main>
  )
}

export default App;