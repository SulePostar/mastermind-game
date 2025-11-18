import { useSelector, useDispatch } from 'react-redux';
import { COLORS } from '@src/config';
import Circle from './Circle';
import { setActiveColor } from '@store/gameSlice';

const Colors = () => {

  const dispatch = useDispatch();
  const { activeColor } = useSelector((state) => state.game);

  const setColor = index => dispatch(setActiveColor(index));
  
  return (
    <div className='colors'>
      {COLORS.map((color, index) => (
        <Circle
          key={index}
          onSelect={() => setColor(index)} 
          active={activeColor === index}
          color={color} />
      ))}
    </div>
  )
}

export default Colors;