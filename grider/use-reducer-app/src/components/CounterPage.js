import { useState } from 'react';
import Panel from './Panel';

const CounterPage = ({initialCount}) => {
  const [count, setCount] = useState(initialCount);

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
    <Panel className="p-8 outline outline-blue-500 rounded m-3 flex flex-col items-center">
      <h1 className='text-xl block'>Count is {count}</h1>
        <div className='block flex flex-row'>
          <button className="m-5 p-3 outline outline-blue-500 rounded" onClick={increment}> + </button>
          <button className="m-5 p-3 outline outline-blue-500 rounded" onClick={decrement}> - </button>
        </div>
        <form className='flex flex-col items-center mt-5'>
          <label>Add A Lot!</label>
          <input className='p-1 m-3 bg-gray-50 border border-gray-300' type="number" />
          <button className='mt-5 pt-3 pb-3 pr-10 pl-10 outline outline-blue-500 rounded block'>Add It</button>
        </form>
    </Panel>
  );
}

export default CounterPage;