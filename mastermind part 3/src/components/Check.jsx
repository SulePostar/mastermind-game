import { useSelector, useDispatch } from 'react-redux';
import { setActiveRow, setGameStatus } from '@store/gameSlice';

const Check = () => {

  const dispatch = useDispatch();
  const { activeRow } = useSelector(state => state.game);

  const advance = () => {
    if (activeRow < 9) {
      dispatch(setActiveRow(activeRow + 1));
    } else {
      dispatch(setGameStatus('lost'));
    }
  }

  return (
    <button onClick={advance}>Check</button>
  )
}

export default Check;