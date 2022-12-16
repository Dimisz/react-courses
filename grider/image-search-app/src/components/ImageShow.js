function ImageShow({ image }){
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}></img>
    </div>
    );
}

export default ImageShow;