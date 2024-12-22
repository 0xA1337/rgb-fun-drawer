export const gridToRGB = (grid: boolean[][]): [number, number, number] => {
  const spiral: boolean[] = [];
  const size = grid.length;
  let top = 0,
    bottom = size - 1,
    left = 0,
    right = size - 1;

  while (spiral.length < 24) {
    // Top row
    for (let i = left; i <= right && spiral.length < 24; i++) {
      if (!(top === 2 && i === 2)) {
        // Skip center
        spiral.push(grid[top][i]);
      }
    }
    top++;

    // Right column
    for (let i = top; i <= bottom && spiral.length < 24; i++) {
      if (!(i === 2 && right === 2)) {
        // Skip center
        spiral.push(grid[i][right]);
      }
    }
    right--;

    // Bottom row
    for (let i = right; i >= left && spiral.length < 24; i--) {
      if (!(bottom === 2 && i === 2)) {
        // Skip center
        spiral.push(grid[bottom][i]);
      }
    }
    bottom--;

    // Left column
    for (let i = bottom; i >= top && spiral.length < 24; i--) {
      if (!(i === 2 && left === 2)) {
        // Skip center
        spiral.push(grid[i][left]);
      }
    }
    left++;
  }

  const r = parseInt(
    spiral
      .slice(0, 8)
      .map((b) => (b ? "1" : "0"))
      .join(""),
    2
  );
  const g = parseInt(
    spiral
      .slice(8, 16)
      .map((b) => (b ? "1" : "0"))
      .join(""),
    2
  );
  const b = parseInt(
    spiral
      .slice(16, 24)
      .map((b) => (b ? "1" : "0"))
      .join(""),
    2
  );

  return [r, g, b];
};
