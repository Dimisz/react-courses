import { useState } from 'react';

const useInputState = (initialState='') => {
  const [currentState, setCurrentState] = useState(initialState);
  const handleChange = (e) => {
    setCurrentState(e.target.value);
  };
  const reset = () => {
    setCurrentState('');
  };
  return [currentState, handleChange, reset];
}

export default useInputState;