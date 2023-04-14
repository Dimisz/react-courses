import React from 'react';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos: [
      {task: 'Walk the fish'},
      {task: 'Groom chickens'}
    ]};
    this.addToDo = this.addToDo.bind(this);
  }

  addToDo(todo){
    this.setState({todos: [...this.state.todos, todo]});
    this.state.todos.map((todo) => {
      console.log(todo);
    })
  }

  render(){
    const todos = this.state.todos.map((todo) => {
      return <Todo key={todo.task} task={todo.task} />
    });

    return(
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addToDo={this.addToDo} />
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;