import useToggle from "../../hooks/useToggle";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

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

const TodoItem = ({todo, onRemove, onEdit, toggleCompletedStatus}) => {
  const [isEditing, toggleIsEditing] = useToggle(false);
  return(
    <ListItem style={{height: '5rem'}}>
      {
        isEditing 
        ?
        <EditTodoForm onEdit={onEdit} todo={todo} toggleIsEditing={toggleIsEditing}/>
        :
        <>
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
            <IconButton 
              aria-label='edit'
              onClick={toggleIsEditing}
            >
              <EditOutlined/>
            </IconButton>
          </ListItemSecondaryAction>
        </>
    }
    </ListItem>
  );
}

export default TodoItem;