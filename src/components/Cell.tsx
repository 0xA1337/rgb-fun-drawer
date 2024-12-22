import { type CellPosition } from "../types/types";

interface CellProps {
  isActive: boolean;
  isCenter: boolean;
  position: CellPosition;
  onToggle: (position: CellPosition) => void;
  hasMarker: boolean;
}

const Cell = ({
  isActive,
  isCenter,
  position,
  onToggle,
  hasMarker,
}: CellProps) => {
  const handleClick = () => {
    if (!isCenter) {
      onToggle(position);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isCenter ? -1 : 0}
      aria-label={`Grid cell at row ${position.row + 1}, column ${
        position.col + 1
      }`}
      aria-pressed={isActive}
      className="relative w-12 h-12 transition-colors duration-200"
    >
      <div
        className={`
          w-full h-full
          ${
            isCenter
              ? "bg-black cursor-not-allowed"
              : isActive
                ? "bg-white hover:bg-gray-100 cursor-pointer"
                : "bg-black hover:bg-gray-900 cursor-pointer"
          }
        `}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
      {hasMarker && (
        <div
          className={`
            absolute top-1/3 left-1/3 w-1/3 h-1/3 pointer-events-none
            ${isActive ? "bg-black" : "bg-white"}
          `}
        />
      )}
    </div>
  );
};

export default Cell;
