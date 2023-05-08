import React from 'react';
import axios from 'axios';

class GitHubUserInfo extends React.Component {
  constructor(props){
    super(props);
    this.state= {name: '', avatar: ''};
  }

  async componentDidMount(){
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    console.log(response.data);
    this.setState({
      name: response.data.name,
      avatar: response.data.avatar_url
    });
  }

  render(){
    return(
      <div>
        <h1>GitHub User Info</h1>
        <h2>{this.state.name}</h2>
        <img src={this.state.avatar} />
      </div>
    )
  }
}

export default GitHubUserInfo;