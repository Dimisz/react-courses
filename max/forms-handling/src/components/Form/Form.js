import styles from './Form.module.css';
import { useState, useEffect } from 'react';

const Form = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [nameInputValid, setNameInputValid] = useState(false);
  const [nameInputTouched, setNameInputTouched] = useState(false);
  const [emailInputValid, setEmailInputValid] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const [formValid, setFormValid] = useState(true);

  useEffect(() => {
    console.log('useEffect checking validity');
    checkFormIsValid();
  }, [enteredEmail, enteredName]);

  const onChangeName = (e) => {
    setEnteredName(e.target.value);
  }

  const checkName = (e) => {
    if(e.target.value.trim() !== ''){
      setNameInputValid(true);
    }
    else {
      setNameInputValid(false);
    }
  }
  
  const onChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  }

  const checkEmail = () => {
    if(enteredEmail.trim().includes('@')){
      setEmailInputValid(true);
    }
    else {
      setEmailInputValid(false);
    }
  }

  const nameFocusHandler = () => {
    setNameInputTouched(true);
    setNameInputValid(true);
  }

  const emailFocusHandler = () => {
    setEmailInputTouched(true);
    setEmailInputValid(true);
  }
  

  const checkFormIsValid = () => {
    if(enteredName.trim() === ''){
      setFormValid(false);
    }
    else {
      setFormValid(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameInputValid && emailInputValid){
      console.log('form submitted');
      setEnteredName('');
      setNameInputValid(false);
      setNameInputTouched(false);

      setEnteredEmail('');
      setEmailInputValid(false);
      setEmailInputTouched(false);

      setFormValid(false);
    }
    else {
      nameInputTouched(true);
      setEmailInputTouched(true);
    }
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