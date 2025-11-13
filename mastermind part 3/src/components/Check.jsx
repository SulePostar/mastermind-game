import React from 'react'

const Check = ({ onClick }) => {
  
  const check = () => {
    onClick();
  };

  return (
    <button onClick={check}>Check</button>
  )
}

export default Check;