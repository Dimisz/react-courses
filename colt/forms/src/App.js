import React from 'react';

import ShoppingList from './components/ShoppingList';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ShoppingList />
    );
  }
}

export default App;