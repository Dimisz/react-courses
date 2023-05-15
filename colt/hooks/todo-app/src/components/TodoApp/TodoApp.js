import { 
  Paper, 
  AppBar,
  Toolbar,
  Typography,
  Grid
} from "@mui/material";
import { useEffect } from 'react';
import useTodoState from "../../hooks/useTodoState";

import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
  const { todos, addTodo, removeTodo, editTodo, toggleCompletedStatus } = useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return(
    <Paper 
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
      >
        <AppBar 
          color='primary'
          position='static'
          style={{height: '64px'}}
        >
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{
          marginTop: '1rem',
          justifyContent: 'center'
        }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo}/>
            <TodoList 
              todos={todos} 
              onRemove={removeTodo}
              onEdit={editTodo}
              toggleCompletedStatus={toggleCompletedStatus}
            />
          </Grid>
        </Grid>
      </Paper>
  );
}

export default TodoApp;