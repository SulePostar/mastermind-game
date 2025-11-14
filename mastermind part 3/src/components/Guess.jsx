import Circle from './Circle';
import { useSelector, useDispatch } from 'react-redux';
import { setSlotColor } from '@store/gameSlice';

const Guess = ({ active}) => {

  const dispatch = useDispatch();
  const activeRow = useSelector(state => state.game.activeRow);
  const guess = useSelector(state => state.game.guess[activeRow]);

  const onSelect = (i) => {
    if (active) {
      dispatch(setSlotColor(i));
    }
  }

  return (
    <div className="guess">
      {guess.map((color, i) => (
        <Circle 
          key={i} 
          onSelect={() => onSelect(i)}
          color={color} />
      ))}
    </div>
  )
}

export default Guess;