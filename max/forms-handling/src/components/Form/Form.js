import styles from './Form.module.css';
import { useState } from 'react';

const Form = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    setEnteredValue('');
  }


  return(
    <form 
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input 
        className={styles.input}
        type='text'
        value={enteredValue}
        onChange={changeHandler}
      />
      <button 
        type='submit'
        className={styles.btn}
      >Submit</button>
    </form>
  )
}

export default Form;