const EventComponent: React.FC = (props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };
  
  return (
    <div>
      <h3>Event Component</h3>
      <p>Check the console!</p>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponent;