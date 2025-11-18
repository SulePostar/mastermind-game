import { useSelector } from "react-redux";

const GameEnd = () => {
  const { gameStatus } = useSelector((state) => state.game);  
  return gameStatus === "ongoing" ? null : <div className="game-end">Game End</div>;
}

export default GameEnd;