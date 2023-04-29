import './App.css';
import { useReducer } from 'react';

const INCREMENT_VALUE = 'INCREMENT';
const DECREMENT_VALUE = 'DECREMENT';
const CHANGE_VALUE = 'CHANGE_VALUE';
const ADD_VALUE = 'ADD_VALUE';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT_VALUE:
      return {
        ...state,
        count: state.count - 1
      }
    case CHANGE_VALUE:
      return {
        ...state,
        valueToAdd: action.payload
      }
    case ADD_VALUE:
      return {
        ...state,
        count: state.count + Number(state.valueToAdd),
        valueToAdd: ''
      }
    default:
      return {
        ...state
      }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE
    })
  }

  const increment = () => {
    dispatch({
      type: INCREMENT_VALUE
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_VALUE
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
            type: CHANGE_VALUE, 
            payload: e.target.value
          })}}
        />
        <button type="submit">Add a lot</button>
      </form>
    </main>
  )
}

export default App;