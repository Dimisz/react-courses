import { 
  Paper, 
  AppBar,
  Toolbar,
  Typography,
  Grid
} from "@mui/material";
import { useState, useEffect } from 'react';

import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
  // const initialTodos = [
  //   { id: 1, task: 'Clean Fishtank', completed: false },
  //   { id: 2, task: 'Wash Car', completed: true },
  //   { id: 3, task: 'Grow Beard', completed: false }
  // ];
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Math.random(),
      task: todoText.trim(),
      completed: false
    }
    setTodos((prev) => {
      return [...prev, newTodo]
    });
  }

  const editTodo = (todo, todoText) => {
    const editedTodo = {
      ...todo,
      task: todoText.trim()
    }
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== editedTodo.id;
    });
    const editedTodos = [...filteredTodos, editedTodo];
    setTodos(editedTodos);
  }

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updatedTodos);
  }

  const toggleCompletedStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => (
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
    ))
    // console.log('clicked');
    setTodos(updatedTodos);
  }

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