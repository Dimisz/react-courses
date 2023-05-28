import styles from './Form.module.css';
import { useState } from 'react';

const Form = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [formInvalid, setFormInvalid] = useState(false);

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  }

  const checkFormIsValid = () => {
    if(enteredValue === ''){
      setFormInvalid(true);
    }
    else {
      setFormInvalid(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formInvalid){
      console.log('form submitted');
      setEnteredValue('');
    }
  }


  return(
    <form 
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input 
        className={`${styles.input} ${formInvalid ? styles.invalid : ''}`}
        type='text'
        value={enteredValue}
        onChange={changeHandler}
        onFocus={() => setFormInvalid(false)}
        onBlur={checkFormIsValid}
      />
      <button 
        type='submit'
        className={styles.btn}
        disabled={formInvalid}
      >Submit</button>
    </form>
  )
}

export default Form;