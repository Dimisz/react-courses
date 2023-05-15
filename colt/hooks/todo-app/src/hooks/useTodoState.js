import { useState } from 'react';

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: (todoText) => {
      const newTodo = {
        id: Math.random(),
        task: todoText.trim(),
        completed: false
      }
      setTodos((prev) => {
        return [...prev, newTodo]
      });
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => {
        return todo.id !== todoId;
      });
      setTodos(updatedTodos);
    },
    editTodo: (todo, todoText) => {
      const editedTodo = {
        ...todo,
        task: todoText.trim()
      }
      const filteredTodos = todos.filter((todo) => {
        return todo.id !== editedTodo.id;
      });
      const editedTodos = [...filteredTodos, editedTodo];
      setTodos(editedTodos);
    },
    toggleCompletedStatus: (todoId) => {
      const updatedTodos = todos.map((todo) => (
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      ))
      // console.log('clicked');
      setTodos(updatedTodos);
    }
  }
}







