import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from './AddUser.module.css';

const AddUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('from AddUser');
  }

  return(
    <Card className={styles.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' />
        <Button type='submit'>
          Add User
        </Button>
      </form>
    </Card>
  );
}

export default AddUser;