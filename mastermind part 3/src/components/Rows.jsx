import { useState } from "react";
import Row from "./Row";

const Rows = ({ activeRow }) => {

  return (
    <div className='rows'>
      {new Array(10).fill('').map((_, i) => (
        <Row key={i} active={i === activeRow} />
      ))}
    </div>
  )
}

export default Rows;