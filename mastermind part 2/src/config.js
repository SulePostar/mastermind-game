export const TITLE = import.meta.env.VITE_TITLE || "No ENV file found";
export const COLORS = import.meta.env.VITE_COLORS ? import.meta.env.VITE_COLORS.split(',') : ["red", "blue", "green", "yellow"];
export const MAX_ROWS = import.meta.env.VITE_MAX_ROWS || 10;
export const MAX_PEGS = import.meta.env.VITE_MAX_PEGS || 4;