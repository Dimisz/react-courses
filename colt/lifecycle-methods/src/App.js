import React from 'react';

import Timer from './components/Timer';
import ZenQuote from './components/ZenQuote';
import GitHubUserInfo from './components/GithubUserInfo';
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      // <GitHubUserInfo username='Dimisz'/>
      <ZenQuote/>
    );
  }
}

export default App;
