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