import { useState, useRef } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = ({addUser}) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDismissError = () => {
    setErrorTitle('');
    setErrorMessage('');
    setShowErrorModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // console.log(age)
    if(enteredName.trim().length === 0){
      setErrorTitle('Invalid Name');
      setErrorMessage('Name field should not be empty');
      setShowErrorModal(true);
    } 
    else if(enteredAge.trim().length === 0){
      setErrorTitle('Invalid Age');
      setErrorMessage('Age field should not be empty');
      setShowErrorModal(true);
    }
    else if(Number(enteredAge) < 0){
      setErrorTitle('Invalid Age');
      setErrorMessage('Age value should be greater than 0');
      setShowErrorModal(true);
    }
    else {
      const user = {
        id: Math.random(),
        name: enteredName.trim(),
        age: enteredAge.trim()
      };

      addUser(user);
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  }

  return(
    <>
    { showErrorModal 
      &&
      <ErrorModal  
        errorTitle={errorTitle} 
        errorMessage={errorMessage}
        handleDismiss={handleDismissError}
      /> 
    }
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input 
            type='text' 
            id='username' 
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input 
            type='number' 
            id='age' 
            ref={ageInputRef}
          />
          <Button type='submit'>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;