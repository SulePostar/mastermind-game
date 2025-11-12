import React from 'react'
import Circle from './Circle';

const Hint = ({ index }) => {
  return (
    <div className="hint">
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </div>
  )
}

export default Hint;