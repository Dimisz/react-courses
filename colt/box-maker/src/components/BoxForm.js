import React from 'react';

class BoxForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const box = {
      width: this.state.width, 
      height: this.state.height,
      backgroundColor: this.state.backgroundColor,
      id: Math.random()
    }
    this.props.handleSubmit(box);
    this.setState({width: '', height: '', backgroundColor: ''});
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='width'>Width: </label>
        <input
          type='number'
          name='width'
          id='width'
          placeholder='width'
          value={this.state.width}
          onChange={this.handleChange}
        />

        <label htmlFor='height'>Height: </label>
        <input
          type='number'
          name='height'
          id='height'
          placeholder='height'
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor='backgroundColor'>Background Color: </label>
        <input
          type='text'
          name='backgroundColor'
          id='backgroundColor'
          placeholder='backgroundColor'
          value={this.state.backgroundColor}
          onChange={this.handleChange}
        />
        <button>Add a box</button>
      </form>
    )
  }
}

export default BoxForm;