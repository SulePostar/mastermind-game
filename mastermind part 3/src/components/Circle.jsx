const Circle = ({ color='transparent', active=false, onSelect }) => { 

  const onClick = () => {
    if (onSelect) {
      onSelect();
    }
  }
  
  return (
    <div 
      onClick={onClick}
      className={`circle ${color} pointer ${active ? "active" : ""}`} />
  )
}
export default Circle;