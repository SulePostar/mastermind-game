import '@styles/App.css';
import { Header, Mode, Footer, Rows, Colors, GameEnd } from '@components';

export default () => (
  <div className='game'>
    <Header />
    <Mode />
    <Rows />
    <Colors />
    <Footer />
    <GameEnd />
  </div>
);