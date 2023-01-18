import React from 'react';

class ImageList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const renderedImages = this.props.images.map((image) => {
      return <img key={image.id} 
                  src={image.urls.regular} 
                  alt={image.alt_description}
              />;
    });

    return(
      <div>{renderedImages}</div>
    );
  }
}

export default ImageList;