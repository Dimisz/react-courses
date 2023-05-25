import { useContext } from "react";
import { 
  Paper,
  TextField
 } from "@mui/material";
import useInputState from "../../hooks/useInputState";
import { DispatchContext } from "../../context/TodoContext";

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  // const { addTodo } = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // addTodo(value);
    dispatch({type: 'add_todo', payload: {task: value}});
    reset();
  }

  return(
    <Paper style={{
      margin: '1rem 0',
      padding: '0 1rem',
    }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm;