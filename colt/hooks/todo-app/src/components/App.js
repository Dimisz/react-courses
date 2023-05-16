import TodoApp from "./TodoApp/TodoApp";
import { TodoContextProvider } from "../context/TodoContext";

const App = () => {
  return(
    <TodoContextProvider>
      <TodoApp/>
    </TodoContextProvider>
  );
}

export default App;