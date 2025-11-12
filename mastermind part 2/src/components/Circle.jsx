const Circle = ({ color='transparent', active=false, onSelect }) => {
  
  const onClick = () => onSelect(color);
  
  return (
    <div 
      onClick={onClick}
      className={`circle ${color} pointer ${active ? "active" : ""}`} />
  )
}

export default Circle;