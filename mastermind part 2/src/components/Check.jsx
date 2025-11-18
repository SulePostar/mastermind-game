import { useSelector, useDispatch } from 'react-redux';
import { MAX_ROWS } from '@src/config';
import { setActiveRow, setGameStatus } from '../store/gameSlice';

export default () => {

  const { activeRow } = useSelector(state => state.game);
  const dispatch = useDispatch();

  const check = () => {
    if(activeRow < MAX_ROWS){
      dispatch(setActiveRow(activeRow + 1));
    } else {
      setGameStatus('endgame');
    }
  };

  return (
    <button onClick={check}>Check</button>
  );
}