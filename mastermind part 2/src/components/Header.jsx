import { TITLE } from '../config.js';
import { useSelector } from 'react-redux';

const Header = () => {

  const { gameStatus } = useSelector((state) => state.game);

  return (
    <div className="header">
      {TITLE}<br />
      <span style={{ fontSize: '1rem' }}>{gameStatus}</span>
    </div>
  )
}

export default Header;