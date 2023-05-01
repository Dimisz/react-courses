import { useState } from 'react';

import styles from './NewPost.module.css';

const NewPost = ({addPost, hideModal}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newPost = {
      id: Math.random(),
      author: name.trim(),
      text: text.trim()
    }
    addPost(newPost);
    hideModal();
    setName('');
    setText('');
  }

  return(
    <form 
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <p>
        <label htmlFor='body'>Text</label>
        <textarea 
          id='body' 
          required 
          rows={3} 
          value={text}
          onChange={(e) => {setText(e.target.value)}}
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input 
          id='name' 
          required 
          type='text' 
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </p>
      <div className={styles.actions}>
        <button onClick={hideModal}>Cancel</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;