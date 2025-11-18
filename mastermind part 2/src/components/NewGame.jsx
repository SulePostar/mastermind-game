import { useDispatch } from 'react-redux';
import { resetGame } from '@store/gameSlice';

export default () => {
  const dispatch = useDispatch();
  
  return (
    <button onClick={dispatch(resetGame())}>New Game</button>
  )
}