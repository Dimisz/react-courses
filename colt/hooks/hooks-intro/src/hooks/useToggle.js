import React, {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [currentState, setCurrentState] = useState(initialValue);
  const toggle = () => {
    setCurrentState((prev) => {
      return !prev;
    });
  }
  return [currentState, toggle];
}

export default useToggle;