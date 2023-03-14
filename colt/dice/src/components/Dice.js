import React from 'react';

class Dice extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let num = 'one';
    switch(this.props.num){
      case 1:
        num = 'one';
        break;
      case 2:
        num = 'two';
        break;
      case 3:
        num = 3;
        break;
      case 4:
        num = 'four';
        break;
      case 5: 
        num = 'five';
        break;
      case 6:
        num = 'six';
        break;
      default:
        num = 'six';
        break;
    }
    return(
      <i className={`fas fa-dice-${num}`}></i>
    );
  }
}

export default Dice;