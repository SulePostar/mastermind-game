import { COLORS, MAX_PEGS } from '@src/config';

export const makeSecret = () => {
  let secret = [];
  const colorsCopy = [...COLORS];
  for(let i=0; i<MAX_PEGS; i++) {
    const randIndex = Math.floor(Math.random() * colorsCopy.length);
    secret.push(colorsCopy[randIndex]);
    colorsCopy.splice(randIndex, 1);
  }
  return secret;
}

export const makeRows = () => {
  return Array.from({ length: 10 }, () => Array.from({ length: MAX_PEGS }, () => ''));
}