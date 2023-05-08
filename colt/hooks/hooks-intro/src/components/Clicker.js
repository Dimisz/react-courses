import { useState, useEffect } from 'react';

const Clicker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
  }, [count]);

  return(
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}

export default Clicker;