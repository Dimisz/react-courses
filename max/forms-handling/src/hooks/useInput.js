import { useState, useEffect } from "react";
const useInput = (inputType='name') => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueInputValid, setValueInputValid] = useState(false);
  const [valueInputTouched, setValueInputTouched] = useState(false);

  // useEffect(() => {
  //   checkValue();
  // }, [enteredValue]);

  const onChangeValue = (e) => {
    setEnteredValue(e.target.value);
  }

  const checkValue = () => {
    if(inputType === 'email'){
      if(enteredValue.trim().includes('@')){
        setValueInputValid(true);
      }
      else{
        setValueInputValid(false);
      }
    }
    else{
      if(enteredValue.trim() !== ''){
        setValueInputValid(true);
      }
      else {
        setValueInputValid(false);
      }
    }
  }

  const valueFocusHandler = () => {
    setValueInputTouched(true);
    setValueInputValid(true);
  }

  const resetName = () => {
    setEnteredValue('');
    setValueInputTouched(false);
    setValueInputValid(false);
  }

  return [enteredValue, valueInputValid, valueInputTouched, onChangeValue, valueFocusHandler, checkValue, resetName];
}

export default useInput;