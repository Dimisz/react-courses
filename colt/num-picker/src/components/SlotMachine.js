import React from 'react';
import './SlotMachine.css';

class SlotMachine extends React.Component {
  render(){
    const nums = [1, 2, 3];
    const roll = [];
    for(let i = 0; i < 3; i++){
      roll.push(Math.floor(Math.random() * nums.length));
    }

    const rollSet = [...new Set(roll)];
    const win = rollSet.length === 1 ? true : false;

    return(
      <div className={`card ${rollSet.length === 1 ? 'win' : 'lose'}`} >
        <h2>Your roll</h2>
        {roll.map((num) => 
          <div className={`dice ${rollSet.length === 1 ? 'win' : 'lose'}`}>
            {num}
          </div>
        )}
        {rollSet.length === 1 ? <h2>You win!</h2> : <h2>You lost!</h2>}
      </div>
    );
  }
}

export default SlotMachine;