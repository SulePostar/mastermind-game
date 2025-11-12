const GameEnd = ({ status }) => {
  return (
    (status === "ongoing") ?
      null :
      <div className="game-end">Game End</div>
  );
}

export default GameEnd;