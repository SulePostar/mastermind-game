import { createSlice } from '@reduxjs/toolkit';
import { COLORS } from '@src/config';
import { makeRows, makeSecret } from '@services/helper';

const initialState = {
  gameMode: 'human', // 'human', 'computer'
  gameStatus: 'ongoing', // 'ongoing', 'won', 'lost'
  activeRow: 0,
  activeColor: 0,
  guess: makeRows(),
  hints: makeRows(),
  secret: makeSecret()
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNewGame() { return initialState; },
    setGameMode(state, action) { return { ...state, gameMode: action.payload }; },
    setGameStatus(state, action) { return { ...state, gameStatus: action.payload }; },
    setActiveColor(state, action) { return { ...state, activeColor: action.payload }; },
    setActiveRow(state, action) { return { ...state, activeRow: action.payload }; },
    setSlotColor(state, action) { state.guess[state.activeRow][action.payload] = COLORS[state.activeColor]; }
  }
});

const { actions, reducer } = gameSlice;
export const { setNewGame, setGameMode,setGameStatus, setActiveColor, setActiveRow, setSlotColor } = actions;
export default reducer;