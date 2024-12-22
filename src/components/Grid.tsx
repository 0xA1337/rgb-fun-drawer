import { useEffect, useRef, useState } from "react";
import type { CellPosition, GridState } from "../types/types";
import { gridToRGB } from "../utils/colorConverter";
import { computeSignature } from "../utils/signatureUtils";
import { getInitialGrid, gridToString } from "../utils/urlState";
import Cell from "./Cell";
import MintButton from "./MintButton";
import ResetButton from "./ResetButton";
import RGBDisplay from "./RGBDisplay";

const MARKER_POSITIONS = [
  [0, 0],
  [1, 1],
  [2, 2],
  [4, 4],
];

const DEFAULT_TITLE = "RGB.fun Drawer";

const hasMarker = (row: number, col: number): boolean => {
  return MARKER_POSITIONS.some(([r, c]) => r === row && c === col);
};

const isDefaultGrid = (grid: GridState): boolean => {
  return grid.flat().every((cell) => cell === false);
};

const Grid = () => {
  const [grid, setGrid] = useState<GridState>(getInitialGrid);
  const isUpdatingRef = useRef(false);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      if (!isUpdatingRef.current) {
        setGrid(getInitialGrid());
      }
      isUpdatingRef.current = false;
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update page title when grid changes
  useEffect(() => {
    const [r, g, b] = gridToRGB(grid);
    const signature = computeSignature(r, g, b);
    document.title = isDefaultGrid(grid)
      ? DEFAULT_TITLE
      : `${DEFAULT_TITLE} - #${signature}`;
  }, [grid]);

  const updateGridAndHistory = (newGrid: GridState) => {
    isUpdatingRef.current = true;
    const hash = gridToString(newGrid);
    window.location.hash = hash;
    setGrid(newGrid);
  };

  const handleToggle = ({ row, col }: CellPosition) => {
    if (row === 2 && col === 2) return;

    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = !newGrid[row][col];
    updateGridAndHistory(newGrid);
  };

  const handleReset = () => {
    const newGrid = Array(5)
      .fill(null)
      .map(() => Array(5).fill(false));
    updateGridAndHistory(newGrid);
  };

  const [r, g, b] = gridToRGB(grid);
  const borderColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="grid grid-cols-5"
        style={{ border: `30px solid ${borderColor}` }}
      >
        {grid.map((row, rowIndex) =>
          row.map((isActive, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isActive={isActive}
              isCenter={rowIndex === 2 && colIndex === 2}
              position={{ row: rowIndex, col: colIndex }}
              onToggle={handleToggle}
              hasMarker={hasMarker(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <RGBDisplay r={r} g={g} b={b} />
      <div className="flex gap-4">
        <ResetButton onReset={handleReset} />
        <MintButton r={r} g={g} b={b} />
      </div>
    </div>
  );
};

export default Grid;
