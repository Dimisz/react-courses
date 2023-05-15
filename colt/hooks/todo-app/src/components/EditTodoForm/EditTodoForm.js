import { 
  Paper,
  TextField
 } from "@mui/material";
import useInputState from "../../hooks/useInputState";

const EditTodoForm = ({onEdit, todo, toggleIsEditing}) => {
  const [value, handleChange, reset] = useInputState(todo.task);

  const handleSubmit = (e) => {
  e.preventDefault();
  onEdit(todo, value);
  reset();
  toggleIsEditing();
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
          label='Edit Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default EditTodoForm;