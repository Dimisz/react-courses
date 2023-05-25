import { createContext, useReducer } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import todoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext();
export const DispatchContext = createContext();
export const TodoContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  // const [todos, setTodos] = useLocalStorageState("todos", []);
  // const addTodo = (todoText) => {
  //   const newTodo = {
  //     id: Math.random(),
  //     task: todoText.trim(),
  //     completed: false
  //   }
  //   setTodos((prev) => {
  //     return [...prev, newTodo]
  //   });
  // }

  // const removeTodo = (todoId) => {
  //   const updatedTodos = todos.filter((todo) => {
  //     return todo.id !== todoId;
  //   });
  //   setTodos(updatedTodos);
  // }

  // const editTodo = (todo, todoText) => {
  //   const editedTodo = {
  //     ...todo,
  //     task: todoText.trim()
  //   }
  //   const filteredTodos = todos.filter((todo) => {
  //     return todo.id !== editedTodo.id;
  //   });
  //   const editedTodos = [...filteredTodos, editedTodo];
  //   setTodos(editedTodos);
  // }

  // const toggleCompletedStatus = (todoId) => {
  //   const updatedTodos = todos.map((todo) => (
  //     todo.id === todoId ? {...todo, completed: !todo.completed} : todo
  //   ))
  //   // console.log('clicked');
  //   setTodos(updatedTodos);
  // }


  return(
    <TodoContext.Provider
      // value={{
      //   todos,
      //   addTodo,
      //   removeTodo,
      //   editTodo,
      //   toggleCompletedStatus
      // }}
      value={todos}
    >
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  )
}
