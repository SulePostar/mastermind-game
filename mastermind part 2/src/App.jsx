import '@styles/App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Mode, Footer, Rows, Colors, GameEnd } from '@components';
import { setGameStatus } from '@store/gameSlice';

function App() {

  const dispatch = useDispatch();
  const { gameStatus } = useSelector((state) => state.game);
  const game = useSelector((state) => state.game);
  console.log(game);
  
  const [activeRow, setActiveRow] = useState(0);

  const advance = () => {
    if(activeRow < 9) {
      setActiveRow(prev => prev + 1);
    } else {
      dispatch(setGameStatus('lost'));
    }
  }

  const reset = () => {
    setActiveRow(0);
    dispatch(setGameStatus('ongoing'));
  }

  return (
    <div className='game'>
      <Header />
      <Mode />
      <Rows activeRow={activeRow} />
      <Colors />
      <Footer onClick={advance} onReset={reset}/>
      <GameEnd status={gameStatus} />
    </div>
  )
}

export default App;
