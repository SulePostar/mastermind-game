import { useSelector, useDispatch } from "react-redux";
import Circle from './Circle';
import { setSlotColor } from "@store/gameSlice";

const Guess = ({ index, active }) => {

  const dispatch = useDispatch();
  const { guess } = useSelector((state) => state.game);
  const row = guess[index];
  
  const selectSlot = index => dispatch(setSlotColor(index));

  return (!row ? null :
    <div className="guess">
      {row.map((color, index) => (
        <Circle key={index} color={color} onSelect={() => selectSlot(index)} />
      ))}
    </div>
  )
}

export default Guess;