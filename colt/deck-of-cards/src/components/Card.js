import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <img 
        src={this.props.image} 
        alt={this.props.name}
        className='card'
      />
    )
  }
}

export default Card;