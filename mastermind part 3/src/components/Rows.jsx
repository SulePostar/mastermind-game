import { MAX_ROWS } from "@src/config";
import Row from "./Row";

const Rows = () => (
  <div className='rows'>
    {new Array(MAX_ROWS).fill('').map((_, index) => (
      <Row key={index} index={index} />
    ))}
  </div>
);

export default Rows;