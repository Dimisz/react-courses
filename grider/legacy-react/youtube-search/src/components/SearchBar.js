import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  }

  render(){
    return(
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label htmlFor='search-bar'>Search Videos</label>
            <input 
                  type='text'
                  id='search-bar'
                  name='search-bar'
                  onChange={this.handleChange}
                  value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;