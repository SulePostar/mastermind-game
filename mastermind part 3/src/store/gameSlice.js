import { createSlice } from '@reduxjs/toolkit';
import { makeRows, makeSecret } from '@services/helper';

const initialState = {
  activeColor: '',
  activeRow: 0,
  gameStatus: 'ongoing', // 'ended'
  guess: makeRows(),
  hint: makeRows(),
  secret: makeSecret()
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state) => initialState,
    setActiveColor(state, action) {
      state.activeColor = action.payload;
    },
    setActiveRow(state, action) {
      state.activeRow = action.payload;
    },
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
    },
    setSlotColor(state, action) {
      state.guess[state.activeRow][action.payload] = state.activeColor;
    },
  }
});

const { actions, reducer } = gameSlice;
export const { resetGame, setActiveColor, setActiveRow, setGameStatus, setSlotColor } = actions;
export default reducer;