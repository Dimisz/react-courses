const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = () => {
    console.log('started dragging');
  }
  return(
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me</div>
    </div>
  )
}

export default EventComponent;