import React from 'react';
// import NumPicker from "./components/NumPicker";
import SlotMachine from './components/SlotMachine';
class App extends React.Component {
  render(){
    return(
      <>
        <SlotMachine title='First Roll' />
        <SlotMachine title='Second Roll' />
        <SlotMachine/>
      </>
    )
  }
}

export default App;