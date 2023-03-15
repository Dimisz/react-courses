import React from 'react';
import './Ball.css';

class Ball extends React.Component {
  render(){
    return(
      <div className='ball'>{this.props.num}</div>
    );
  }
}

export default Ball;