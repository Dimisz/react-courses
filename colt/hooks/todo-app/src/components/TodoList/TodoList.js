import { 
  Paper, 
  List,
  Divider
 } from "@mui/material";

import { Fragment, useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  
  const renderedTodos = todos.map((todo, i) => (
    <Fragment key={todo.id}>
      <TodoItem todo={todo} />
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