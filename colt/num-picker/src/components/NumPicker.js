import React from 'react';

function pickNumber(){
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = pickNumber();
    return(
      <React.Fragment>
        <h1>Your number is: {num}</h1>
        <p>{num === 7 ? `Congrats! It's 7` : `Oh no, it's just ${num}`}</p>
      </React.Fragment>
    );
  }
}

export default NumPicker;