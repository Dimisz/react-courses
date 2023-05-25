import useToggle from "../../hooks/useToggle";
import EditTodoForm from "../EditTodoForm/EditTodoForm";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

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

const TodoItem = ({todo}) => {
  // const {removeTodo, editTodo, toggleCompletedStatus} = useContext(TodoContext);
  const { dispatch } = useContext(TodoContext);

  const [isEditing, toggleIsEditing] = useToggle(false);
  return(
    <ListItem style={{height: '5rem'}}>
      {
        isEditing 
        ?
        <EditTodoForm 
          // onEdit={editTodo} 
          todo={todo} 
          toggleIsEditing={toggleIsEditing}
        />
        :
        <>
          <Checkbox
            checked={todo.completed}
            tabIndex={-1}
            // onClick={() => toggleCompletedStatus(todo.id)}
            onClick={() => dispatch({type: 'toggle_completed_status', payload: {todoId: todo.id}})}
          />
          <ListItemText style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label='delete' 
              // onClick={() => removeTodo(todo.id)}
              onClick={() => dispatch({type: 'remove_todo', payload: {id: todo.id}})}
            >
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