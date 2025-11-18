import { useDispatch } from 'react-redux';
import { setNewGame } from '@store/gameSlice';

const NewGame = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setNewGame());
  };
  
  return (
    <button className="button" onClick={onClick}>New Game</button>
  )
}

export default NewGame;