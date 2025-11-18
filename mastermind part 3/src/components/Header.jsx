import { useSelector } from 'react-redux';
import human from '@images/human.png';
import robot from '@images/robot.png';
import { TITLE } from '@src/config.js';

const Header = () => {

  const { gameMode } = useSelector(store => store.game);

  return (
    <div className="header">
      <div className="title">{TITLE}</div>
      <div className="mode">
        {gameMode === 'human' ?
          <img src={human} alt="Human" className="image" /> :
          <img src={robot} alt="Robot" className="image" />
        }
      </div>
    </div>
  );
}

export default Header;