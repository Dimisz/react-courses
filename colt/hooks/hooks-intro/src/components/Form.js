import { useState } from 'react';
import useInputState from '../hooks/useInputState';

const Form = () => {
  const [email, setEmail, resetEmail] = useInputState();
  const [name, setName, resetName] = useInputState();

  return(
    <div>
      <h1>Your entered: {email}</h1>
      <input 
        type='text'
        value={email}
        onChange={(e) => setEmail(e)}
      />
      <button onClick={resetEmail}>Reset</button>
      <h1>Your entered: {name}</h1>
      <input 
        type='text'
        value={name}
        onChange={(e) => setName(e)}
      />
      <button onClick={resetName}>Reset</button>
    </div>
  );
}

export default Form;