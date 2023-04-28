import { useState } from 'react';

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './AddUser.module.css';

const AddUser = ({addUser}) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      console.log('Empty name or age');
    }
    else if(Number(enteredAge) < 0){
      console.log('Age should be greater than 0');
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
  );
}

export default AddUser;