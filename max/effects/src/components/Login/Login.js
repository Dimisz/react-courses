import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const CHANGE_EMAIL_VALUE = 'change-email-value';
const CHECK_EMAIL_VALIDITY ='check-email-vality';
const CHANGE_PASSWORD_VALUE = 'change-password-value';
const CHECK_PASSWORD_VALIDITY ='check-password-vality';
const CHECK_FORM_VALIDITY ='check-form-vality';

const reducer = (state, action) => {
  switch(action.type){
    case CHANGE_EMAIL_VALUE:
      return {
        ...state,
        enteredEmail: action.payload
      };
    case CHECK_EMAIL_VALIDITY:
      return {
        ...state,
        emailIsValid: state.enteredEmail.includes('@')
      };
    case CHANGE_PASSWORD_VALUE:
      return {
        ...state,
        enteredPassword: action.payload
      };
    case CHECK_PASSWORD_VALIDITY:
      return {
        ...state,
        passwordIsValid: state.enteredPassword.trim().length > 6
      };
    case CHECK_FORM_VALIDITY:
      return {
        ...state,
        formIsValid: state.enteredPassword.trim().length > 6 && state.enteredEmail.includes('@')
      };
    default:
      console.log('Reducer func fell through to the default case');
      break;
  }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    enteredEmail: '',
    emailIsValid: false,
    enteredPassword: '',
    passwordIsValid: false,
    formIsValid: false
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // console.log('checking form...');
      // setFormIsValid(
      //   enteredPassword.trim().length > 6 && enteredEmail.includes('@')
      // );
      dispatch({
        type: CHECK_FORM_VALIDITY
      });
    }, 500);

    return () => {
      // console.log('cleanup');
      clearTimeout(timeoutId);
    };
  }, [state.enteredEmail, state.enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatch({
      type: CHANGE_EMAIL_VALUE,
      payload: event.target.value
    });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatch({
      type: CHANGE_PASSWORD_VALUE,
      payload: event.target.value
    });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatch({
      type: CHECK_EMAIL_VALIDITY
    });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatch({
      type: CHECK_PASSWORD_VALIDITY
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.enteredEmail, state.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            state.emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            state.passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!state.formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
