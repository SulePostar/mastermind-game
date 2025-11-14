import { createSlice } from '@reduxjs/toolkit';
import { makeRows, makeSecret } from '@services/helper';

const initialState = {
  gameStatus: 'ongoing', // 'ongoing', 'won', 'lost'
  activeRow: 0,
  activeColor: null,
  guess: new Array(10).fill().map(() => new Array(4).fill('')),
  hints: new Array(10).fill().map(() => new Array(4).fill('')),
  secret: makeSecret()
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: () => initialState,
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
      return state;
    }
  }
});

const { actions, reducer } = gameSlice;
export const { resetGame, setGameStatus } = actions;
export default reducer;