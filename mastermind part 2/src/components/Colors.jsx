import { useState } from 'react';
import Circle from './Circle';
import { COLORS } from '@src/config';

const Colors = () => {

  const [activeColor, setActiveColor] = useState(null);
  const onSelect = color => setActiveColor(color);
  
  return (
    <div className='colors'>
      {COLORS.map((color, i) => (
        <Circle
          key={i}
          onSelect={onSelect} 
          active={activeColor === color}
          color={color} />
      ))}
    </div>
  )
}

export default Colors;