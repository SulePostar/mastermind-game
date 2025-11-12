import '@assets/App.css';
import { useState } from 'react';
import { Header, Mode, Footer, Rows, Colors, GameEnd } from '@components';

function App() {

  const [gameStatus, setGameStatus] = useState('ongoing');
  const [activeRow, setActiveRow] = useState(0);

  const advance = () => {
    if(activeRow < 9) {
      setActiveRow(prev => prev + 1);
    } else {
      setGameStatus('lost');
    }
  }

  const reset = () => {
    setActiveRow(0);
    setGameStatus('ongoing');
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
