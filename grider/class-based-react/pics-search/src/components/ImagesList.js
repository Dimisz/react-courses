import React from 'react';

import ImageCard from './ImageCard';
import './ImagesList.css';

class ImagesList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const renderedImages = this.props.images.map((image) => {
      return <ImageCard key={image.id} image={image}/>;
    });

    return(
      <div className='image-list'>{renderedImages}</div>
    );
  }
}

export default ImagesList;