import { useSelector } from "react-redux";
import Guess from "./Guess";
import Hint from "./Hint";

const Row = ({ index }) => {
  const { activeRow } = useSelector(state => state.game);
  const active = index === activeRow;
  console.log(activeRow, index);
  

  return (
    <div className={`row ${active ? "active" : ""}`}>
      {index}
      <Guess />
      <Hint />
    </div>
  );
}

export default Row;