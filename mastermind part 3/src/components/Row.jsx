import { useSelector } from "react-redux";
import Guess from "./Guess";
import Hint from "./Hint";

const Row = ({ index }) => {

  const { activeRow } = useSelector(state => state.game);
  const active = index === activeRow;

  return (
    <div className={`row ${active ? "active" : ""}`}>
      <Guess index={index} active={active} />
      <Hint index={index} />
    </div>
  )
}

export default Row;