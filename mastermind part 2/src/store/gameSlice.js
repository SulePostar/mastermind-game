import { createSlice } from '@reduxjs/toolkit';
import { makeSecret } from '@services/helper';

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
    setGameStatus: (state, action) => { return { ...state, gameStatus: action.payload }},
    setActiveColor: (state, action) => { return { ...state, activeColor: action.payload }},
    setActiveRow: (state, action) => { return { ...state, activeRow: action.payload }},
  }});

const { actions, reducer } = gameSlice;
export const { resetGame, setGameStatus, setActiveColor, setActiveRow } = actions;
export default reducer;