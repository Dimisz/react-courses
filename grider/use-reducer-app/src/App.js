import './App.css';
import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
      break;
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
      break;
    case 'CHANGE_VALUE':
      return {
        ...state,
        valueToAdd: action.payload
      }
      break;
    case 'ADD_VALUE':
      return {
        ...state,
        count: state.count + Number(state.valueToAdd),
        valueToAdd: ''
      }
      break;
      
    default:
      break;
  }
  return {
    ...state,
    count: state.count + 1
  }
}

const App = () => {
  // const [count, setCount] = useState(0);
  // const [valueToAdd, setValueToAdd] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount((prev) => {
    //   return prev + Number(valueToAdd.trim());
    // });
    // setValueToAdd('');
    dispatch({
      type: 'ADD_VALUE'
    })
  }

  const increment = () => {
    // setCount((prev) => {
    //   return prev + 1;
    // });
    dispatch({
      type: 'INCREMENT'
    });
  };

  const decrement = () => {
    // setCount((prev) => {
    //   return prev - 1;
    // });
    dispatch({
      type: 'DECREMENT'
    });
  };

  return(
    <main>
      <h1>Counter App</h1>
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={state.valueToAdd}
          onChange={(e) => {dispatch({
            type: 'CHANGE_VALUE', 
            payload: e.target.value
          })}}
        />
        <button type="submit">Add a lot</button>
      </form>
    </main>
  )
}

export default App;