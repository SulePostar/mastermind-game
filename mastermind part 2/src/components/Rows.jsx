import Row from "./Row";
import { MAX_ROWS } from "@src/config";

export default () => (
  <div className='rows'>
    {new Array(MAX_ROWS).fill('').map((_, index) => (
      <Row key={index} index={index} />
    ))}
  </div>
);