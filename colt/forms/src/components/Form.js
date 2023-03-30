import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '', email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    alert(`Username: ${this.state.username}\nemail: ${this.state.email}\nPassword: ${this.state.password}`);
    this.setState({username: '', password: '', email: ''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Form</h1>
        <input 
          type='text'
          name='username' 
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input 
          type='email'
          name='email'
          placeholder='emal'
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default Form;