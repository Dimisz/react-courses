import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.css';

const AddUser = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

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
    if(enteredUsername.trim().length === 0){
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
        name: enteredUsername,
        age: enteredAge
      };

      addUser(user);
      setEnteredUsername('');
      setEnteredAge('');
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
            value={enteredUsername}
            onChange={(e) => {setEnteredUsername(e.target.value)}}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input 
            type='number' 
            id='age' 
            value={enteredAge}
            onChange={(e) => {setEnteredAge(e.target.value)}}
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