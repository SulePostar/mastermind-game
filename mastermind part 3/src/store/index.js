import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
  devTools: true
});

export default store;