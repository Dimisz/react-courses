import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render(){
    return(
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor="search">Image Search</label>
            <input 
              id="serach" 
              name="search" 
              type="text" 
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;