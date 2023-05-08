import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.handleDelete(this.props.id);
  }
  render(){
    if(this.state.isEditing){
      return(
        
      )
    }
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