import { useDispatch } from 'react-redux';
import { resetGame } from '@store/gameSlice';

const NewGame = () => {

  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetGame())
  }

  return (
    <button onClick={reset}>New Game</button>
  )
}

export default NewGame;