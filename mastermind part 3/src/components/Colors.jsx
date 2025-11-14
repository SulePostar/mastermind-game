import Circle from './Circle';
import { COLORS } from '@src/config';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveColor } from '@src/store/gameSlice';

const Colors = () => {

  const {activeColor} = useSelector(state => state.game);
  const dispatch = useDispatch();

  const onSelect = color => dispatch(setActiveColor(color));
  
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