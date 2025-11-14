import '@assets/App.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header, Mode, Footer, Rows, Colors, GameEnd } from '@components';

function App() {

  const {gameStatus } = useSelector(state => state.game);

  return (
    <div className='game'>
      <Header />
      <Mode />
      <Rows />
      <Colors />
      <Footer />
      <GameEnd status={gameStatus} />
    </div>
  )
}

export default App;
