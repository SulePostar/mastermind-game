import { COLORS, MAX_PEGS } from "@src/config.js";

export const makeSecret = () => {
  let secret = [];
  let copyColors = [...COLORS];
  for (let i = 0; i < MAX_PEGS; i++) {
    const randomIndex = Math.floor(Math.random() * copyColors.length);
    secret.push(copyColors[randomIndex]);
    copyColors.splice(randomIndex, 1);
  }
  return secret;
}