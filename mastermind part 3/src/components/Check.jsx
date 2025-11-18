import { useSelector, useDispatch } from "react-redux";
import { setActiveRow } from "@src/store/gameSlice";

const Check = () => {

  const dispatch = useDispatch();
  const { activeRow } = useSelector((state) => state.game);

  const onClick = () => {
    dispatch(setActiveRow(activeRow + 1));
  };
  
  return (
    <button className="button" onClick={onClick}>Check</button>
  )
}

export default Check;