import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  
  render(){

    return(
      <img 
        src={this.props.image} 
        alt={this.props.name}
        className='card'
        style={{transform: this.props.transformStyle }}
      />
    )
  }
}

export default Card;