import { useDispatch } from 'react-redux';
import { resetGame } from '@store/gameSlice';

const NewGame = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetGame());
  };
  
  return (
    <button onClick={onClick}>New Game</button>
  )
}

export default NewGame;