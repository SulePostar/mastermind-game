import Guess from "./Guess";
import Hint from "./Hint";

const Row = () => {
  return (
    <div className="row">
      <Guess />
      <Hint />
    </div>
  )
}

export default Row;