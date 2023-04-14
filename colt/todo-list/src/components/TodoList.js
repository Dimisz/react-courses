import React from 'react';
import uuid from 'react-uuid';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos: [
      { 
        id: uuid(),
        task: 'Walk the fish'
      },
      {
        id: uuid(),
        task: 'Groom chickens'
      }
    ]};
    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(todo){
    this.setState({todos: [...this.state.todos, todo]});
  }

  deleteToDo(todoId){
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== todoId;
      })
    })
  }

  render(){
    const todos = this.state.todos.map((todo) => {
      return( 
        <Todo 
          key={todo.id} 
          task={todo.task} 
          id={todo.id}
          handleDelete={this.deleteToDo}
        />
      );
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