import styles from './Form.module.css';
import { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';

const Form = () => {
  const [
    enteredName, nameInputValid, 
    nameInputTouched, onChangeName, 
    nameFocusHandler, checkName, resetName] = useInput();

  const [
    enteredEmail, emailInputValid, 
    emailInputTouched, onChangeEmail, 
    emailFocusHandler, checkEmail, resetEmail] = useInput('email');
  

  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    console.log('useEffect checking validity');
    checkFormIsValid();
  }, [enteredEmail, enteredName]);
  

  const checkFormIsValid = () => {
    console.log(`nameinput: ${nameInputValid}`);
    console.log(`emailinput: ${emailInputValid}`);
    setFormValid(nameInputValid && emailInputValid);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValid){
      console.log('form submitted');
      resetName();
      resetEmail();
      setFormValid(false);
    }
    // else {
    //   nameInputTouched(true);
    //   setEmailInputTouched(true);
    // }
  }


  return(
    <form 
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles['input-group']}>
        <label htmlFor='username'>User Name</label>
        <input
          id='username'
          name='username'
          className={`${styles.input} ${!nameInputValid && nameInputTouched ? styles.invalid : ''}`}
          type='text'
          value={enteredName}
          onChange={onChangeName}
          onFocus={nameFocusHandler}
          onBlur={checkName}
        />
        {!nameInputValid && nameInputTouched && <p className={styles['error-message']}>Enter your name</p>}
      </div>
      <div className={styles['input-group']}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          className={`${styles.input} ${!emailInputValid && emailInputTouched ? styles.invalid : ''}`}
          type='email'
          value={enteredEmail}
          onChange={onChangeEmail}
          onFocus={emailFocusHandler}
          onBlur={checkEmail}
        />
        {!emailInputValid && emailInputTouched && <p className={styles['error-message']}>Enter your email</p>}
      </div>
      <button 
        type='submit'
        disabled={!formValid}
        className={styles.btn}
      >Submit</button>
    </form>
  )
}

export default Form;