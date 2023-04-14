import React from 'react';

class NewTodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addToDo({task: this.state.task});
    console.log(`from the form, task: ${this.state.task}`);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input 
          type='text' 
          placeholder='New Todo' 
          id='task'
          name='task'
          value={this.state.task}
          onChange={(e) => this.setState({task: e.target.value})}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;