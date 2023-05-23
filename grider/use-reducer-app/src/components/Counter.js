import { useState, useReducer } from "react";
import styles from './Counter.module.css';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADD_ALOT = 'add_alot';
const CHANGE_INPUT_VAL = 'change_value';

const reducer = (state, action) => {
  switch(action.type){
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case ADD_ALOT:
      return {
        ...state,
        count: state.count + (Number(state.enteredValue) || 0)
      }
    case CHANGE_INPUT_VAL:
      return {
        ...state,
        enteredValue: action.payload
      }
      
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    enteredValue: ''
  });

  const increment = () => {
    dispatch({type: INCREMENT});
  }

  const decrement = () => {
    dispatch({type: DECREMENT});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ADD_ALOT});
    dispatch({type: CHANGE_INPUT_VAL, payload: ''});
  }

  return(
    <div className={styles.container}>
      <h1>Current count: {state.count}</h1>
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
          value={state.enteredValue}
          onChange={(e) => dispatch({type: CHANGE_INPUT_VAL, payload: e.target.value})}
        />
        <button type='submit'>Add It!</button>
      </form>
    </div>
  )
}

export default Counter;