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
  toggleCompletedStatus
}) => {
  const renderedTodos = todos.map((todo) => (
    <Fragment key={todo.id}>
      <TodoItem 
        todo={todo} 
        onRemove={onRemove}
        toggleCompletedStatus={toggleCompletedStatus}
      />
      <Divider/>
    </Fragment>
  ));

  return(
    <Paper>
      <List>
        {renderedTodos}
      </List>
    </Paper>
  )
}

export default TodoList;