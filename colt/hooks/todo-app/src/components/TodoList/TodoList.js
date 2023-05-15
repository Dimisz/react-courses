import { 
  Paper, 
  List,
  Divider
 } from "@mui/material";
import { Fragment } from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({
  todos, 
  onRemove, 
  onEdit,
  toggleCompletedStatus
}) => {
  const renderedTodos = todos.map((todo, i) => (
    <Fragment key={todo.id}>
      <TodoItem 
        todo={todo} 
        onRemove={onRemove}
        onEdit={onEdit}
        toggleCompletedStatus={toggleCompletedStatus}
      />
      {i < todos.length - 1 && <Divider/>}
    </Fragment>
  ));

  return(
    <>
      {todos.length > 0 &&
        <Paper>
          <List>
            {renderedTodos}
          </List>
        </Paper>
      }
    </>
  )
}

export default TodoList;