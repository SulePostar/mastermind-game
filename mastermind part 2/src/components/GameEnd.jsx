import { useSelector } from 'react-redux';

export default () => {
  const { gameStatus } = useSelector(state => state.game);

  return (
    (gameStatus === "ongoing") ?
      null :
      <div className="game-end">Game End</div>
  );
}