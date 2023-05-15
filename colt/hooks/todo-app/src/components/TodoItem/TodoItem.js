import { 
  ListItem, 
  ListItemText,
  Checkbox,
  IconButton, 
  ListItemSecondaryAction
 } from "@mui/material";
import {
  DeleteForeverOutlined,
  EditOutlined
} from '@mui/icons-material';

const TodoItem = ({todo, onRemove, toggleCompletedStatus}) => {
  return(
    <ListItem>
      <Checkbox 
        checked={todo.completed}
        tabIndex={-1}
        onClick={() => toggleCompletedStatus(todo.id)}
      />
      <ListItemText style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='delete' onClick={() => onRemove(todo.id)}>
          <DeleteForeverOutlined />
        </IconButton>
        <IconButton aria-label='edit'>
          <EditOutlined/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;