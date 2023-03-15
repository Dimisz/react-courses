import React from 'react';
import './Box.css';

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: this.pickRandomColor() };
    this.changeColor = this.changeColor.bind(this);
    this.pickRandomColor = this.pickRandomColor.bind(this);
  }

  pickRandomColor(){
    const colors = ['red', 'green', 'blue', 'white', 'black', 'yellow', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  changeColor(){
    let randomColor = this.pickRandomColor();
    while(randomColor === this.state.color){
      randomColor = this.pickRandomColor();
    }
    this.setState((st) => {return {color: randomColor}});
  }

  render(){
    return(
      <div 
        className='box' 
        style={{backgroundColor: this.state.color}}
        onClick={this.changeColor}
      >
      </div>
    );
  }
}

export default Box;