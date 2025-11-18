import '@styles/App.css';
import { Header, Footer, Rows, Colors, GameEnd } from '@components';

function App() {

  return (
    <div className='game'>
      <Header />
      <Rows />
      <Colors />
      <Footer />
      <GameEnd />
    </div>
  )
}

export default App;
