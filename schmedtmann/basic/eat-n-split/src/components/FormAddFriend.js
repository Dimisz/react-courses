import { useState } from 'react';

import Button from "./Button";

const FormAddFriend = ({handleAddFriend}) => {
  const [name, setName] = useState('');
  // const [image, setImage] = useState('');
  
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  // const handleChangeImage = (e) => {
  //   setImage(e.target.value);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name){
      return;
    }

    const id = crypto.randomUUID();
    const newFriend = {
      name: name, 
      image: `https://i.pravatar.cc/48?u=${id}`, 
      balance: 0,
      id: id,
    }

    handleAddFriend(newFriend);
    setName('');
    // console.log(newFriend);
  }

  return(
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>🦈 Friend Name</label>
      <input 
        value={name}
        onChange={handleChangeName}
        type='text' />

      {/* <label>🐢 Image URL</label>
      <input 
        value={image}
        onChange={handleChangeImage}
        type='text' /> */}
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;