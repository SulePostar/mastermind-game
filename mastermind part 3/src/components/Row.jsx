import Guess from "./Guess";
import Hint from "./Hint";

const Row = ({ active }) => {
  return (
    <div className={`row ${active ? "active" : ""}`}>
      <Guess />
      <Hint />
    </div>
  )
}

export default Row;