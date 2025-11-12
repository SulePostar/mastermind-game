import '@assets/App.css';
import { Header, Mode, Footer, Rows, Colors } from '@components';

function App() {

  return (
    <div className='game'>
      <Header />
      <Mode />
      <Rows />
      <Colors />
      <Footer />
    </div>
  )
}

export default App;
