import { useSelector } from 'react-redux';
import Circle from './Circle';

const Hint = ({ index }) => {

  const { hints } = useSelector(state => state.game);
  const hint = hints[index];

  return (
    <div className="hint">
      {hint.map((color, index) => (
        <Circle key={index} color={color} />
      ))}
    </div>
  )
}

export default Hint;