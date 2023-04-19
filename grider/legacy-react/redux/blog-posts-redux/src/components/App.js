import React from 'react';

import PostList from './PostList';

class App extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className='ui container'>
        <PostList/>
      </div>
    );
  }
}

export default App;