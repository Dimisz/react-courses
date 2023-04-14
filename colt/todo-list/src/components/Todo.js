import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.handleDelete(this.props.id);
  }
  render(){
    return(
      <div>
        <button>Edit</button>
        <button onClick={this.handleDelete}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;