import { useState } from 'react';
import human from '@images/human.png';
import robot from '@images/robot.png';

const Mode = () => {

  const [mode, setMode] = useState('human');

  const setmode = () => {
    setMode(prev => prev === 'human' ? 'robot' : 'human');
  }

  return (
    <div className="mode">
      <button onClick={setmode}>
        <img src={mode === 'human' ? human : robot} alt="Player Mode" />
      </button>
    </div>
  )
}

export default Mode;