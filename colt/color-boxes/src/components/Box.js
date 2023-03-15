import React from 'react';
import { chooseColor } from './helpers';

import './Box.css';

class Box extends React.Component {
  static defaultProps = {
    colors: ['red', 'green', 'blue', 'white', 'black', 'yellow', 'purple']
  }
  constructor(props){
    super(props);
    this.state = { color: chooseColor(this.props.colors) };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    let randomColor;
    do {
      randomColor = chooseColor(this.props.colors);
    } while(randomColor === this.state.color);
    
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