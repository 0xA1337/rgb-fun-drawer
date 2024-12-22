import type { GridState } from "../types/types";

// Convert grid to a string of 0s and 1s
export const gridToString = (grid: GridState): string => {
  return grid
    .flat()
    .map((cell) => (cell ? "1" : "0"))
    .join("");
};

// Convert string back to grid
export const stringToGrid = (str: string): GridState => {
  const cells = str.split("").map((char) => char === "1");
  const grid: GridState = [];
  for (let i = 0; i < 5; i++) {
    grid.push(cells.slice(i * 5, (i + 1) * 5));
  }
  return grid;
};

// Get initial grid state from URL or return empty grid
export const getInitialGrid = (): GridState => {
  const hash = window.location.hash.slice(1);
  if (hash.length === 25 && /^[01]+$/.test(hash)) {
    return stringToGrid(hash);
  }
  return Array(5)
    .fill(null)
    .map(() => Array(5).fill(false));
};

// Update URL with new grid state
export const updateUrlState = (grid: GridState, createHistoryEntry = true) => {
  const hash = gridToString(grid);
  if (createHistoryEntry) {
    window.history.pushState(null, "", `#${hash}`);
  } else {
    window.history.replaceState(null, "", `#${hash}`);
  }
};
