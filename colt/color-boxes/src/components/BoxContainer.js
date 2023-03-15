import React from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends React.Component {
  static defaultProps = {
    numBoxes: 18
  }

  constructor(props){
    super(props);
  }

  render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(() => <Box/>)
    return(
      <div className='box-container'>
        {boxes}
      </div>
    )
  }
}

export default BoxContainer;