import { useSelector } from "react-redux";
import Row from "./Row";

const Rows = () => {
  
  const activeRow = useSelector(state => state.game.activeRow);

  return (
    <div className='rows'>
      {new Array(10).fill('').map((_, i) => (
        <Row key={i} active={i === activeRow} />
      ))}
    </div>
  )
}

export default Rows;