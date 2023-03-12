import React from 'react';
// import NumPicker from "./components/NumPicker";
import SlotMachine from './components/SlotMachine';
class App extends React.Component {
  render(){
    return(
      <>
        <h1 sty>Slot Machines!</h1>
        <SlotMachine/>
        <SlotMachine/>
        <SlotMachine/>
      </>
    )
  }
}

export default App;