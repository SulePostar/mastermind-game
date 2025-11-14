import { COLORS, MAX_PEGS, MAX_ROWS } from "@src/config.js";

export const makeRows = () => {
  let rows = [];
  let row = [];
  for (let i = 0; i < MAX_PEGS; i++) row.push('');
  for (let i = 0; i < MAX_ROWS; i++) rows.push([row]);
  return rows;
}

export const makeSecret = () => {
  let secret = [];
  for (let i = 0; i < MAX_PEGS; i++) {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    secret.push(COLORS[randomIndex]);
  }
  return secret;
}