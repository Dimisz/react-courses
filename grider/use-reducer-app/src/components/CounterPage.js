// import { useState } from 'react';
import { useReducer } from 'react';
import Panel from './Panel';

const reducer = (state, action) => {
  if(action.type === 'increment-count'){
    return {
      ...state,
      count: state.count + 1
    };
  }

  if(action.type === 'decrement-count'){
    return {
      ...state,
      count: state.count - 1
    };
  }

  if(action.type === 'value-change'){
    return {
      ...state,
      enteredValue: action.payload
    };
  }

  if(action.type === 'submit'){
    return {
      ...state,
      count: state.count + state.enteredValue,
      enteredValue: 0
    };
  }

  return state;
};

const CounterPage = ({initialCount}) => {
  // const [count, setCount] = useState(initialCount);
  // const [enteredValue, setEnteredValue] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    enteredValue: 0
  });

  console.log(state);

  const increment = () => {
    // setCount((count) => {
    //   return count + 1;
    // });
    dispatch({
      type: 'increment-count'
    });
  }

  const decrement = () => {
    // setCount((count) => {
    //   return count - 1;
    // });
    dispatch({
      type: 'decrement-count'
    });
  }

  const handleChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    // setEnteredValue(val);
    dispatch({
      type: 'value-change',
      payload: val
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount((count) => {
    //   return count + enteredValue;
    // });
    // setEnteredValue(0);
    dispatch({
      type: 'submit'
    });
  }

  return(
    <Panel className="p-8 outline outline-blue-500 rounded m-3 flex flex-col items-center">
      <h1 className='text-xl block'>Count is {state.count}</h1>
        <div className='block flex flex-row'>
          <button className="m-5 p-3 outline outline-blue-500 rounded" onClick={increment}> + </button>
          <button className="m-5 p-3 outline outline-blue-500 rounded" onClick={decrement}> - </button>
        </div>
        <form 
          className='flex flex-col items-center mt-5'
          onSubmit={handleSubmit}
        >
          <label>Add A Lot!</label>
          <input 
            className='p-1 m-3 bg-gray-50 border border-gray-300' 
            type="number" 
            value={state.enteredValue || ''}
            onChange={handleChange}
          />
          <button className='mt-5 pt-3 pb-3 pr-10 pl-10 outline outline-blue-500 rounded block'>Add It</button>
        </form>
    </Panel>
  );
}

export default CounterPage;