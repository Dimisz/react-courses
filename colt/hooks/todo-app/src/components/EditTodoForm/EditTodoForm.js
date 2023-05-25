import { 
  Paper,
  TextField
 } from "@mui/material";
import useInputState from "../../hooks/useInputState";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const EditTodoForm = ({onEdit, todo, toggleIsEditing}) => {
  const [value, handleChange, reset] = useInputState(todo.task);
  const {dispatch} = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'edit_todo', payload: {todo: todo, newTask: value}});
    // onEdit(todo, value);
    reset();
    toggleIsEditing();
}

  return(
    <Paper style={{
      margin: '0',
      // padding: '0 1rem',
      width: '100%'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          width: '100%',
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          // margin='normal'
          label='Edit Todo'
          fullWidth
          autoFocus
        />
      </form>
    </Paper>
  )
}

export default EditTodoForm;