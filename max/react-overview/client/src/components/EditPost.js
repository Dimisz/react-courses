import { useState } from 'react';

import styles from './NewPost.module.css';

const EditPost = ({editPost, editedPost, hideModal}) => {
  const [name, setName] = useState(editedPost.author);
  const [text, setText] = useState(editedPost.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const changedPost = {
      id: editedPost.id,
      author: name.trim(),
      text: text.trim()
    };

    editPost(changedPost);
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
    </form>
  );
}

export default EditPost;