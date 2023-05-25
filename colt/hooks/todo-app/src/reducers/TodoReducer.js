const ADD_TODO = 'add_todo';
const REMOVE_TODO = 'remove_todo';
const EDIT_TODO = 'edit_todo';
const TOGGLE_COMPLETED_STATUS = 'toggle_completed_status';

const todoReducer = (state, action) => {
  switch(action.type){
    case(ADD_TODO):
      const newTodo = {
        id: Math.random(),
        task: action.payload.task.trim(),
        completed: false
      }
      return [...state, newTodo];

    case(REMOVE_TODO):
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    
    case(EDIT_TODO):
      const editedTodo = {
        ...action.payload.todo,
        task: action.payload.newTask.trim()
      }
      const filteredTodos = state.filter((todo) => {
        return todo.id !== editedTodo.id;
      });
      return [...filteredTodos, editedTodo];
    
    case(TOGGLE_COMPLETED_STATUS):
      return state.map((todo) => (
        todo.id === action.payload.todoId ? {...todo, completed: !todo.completed} : todo
      ));
    default:
      return state;
    }
};

export default todoReducer;


  