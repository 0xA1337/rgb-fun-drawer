interface RGBDisplayProps {
  r: number;
  g: number;
  b: number;
}

const RGBDisplay = ({ r, g, b }: RGBDisplayProps) => {
  return (
    <div className="flex items-center gap-2 text-lg font-mono">
      <span>
        RGB({r}, {g}, {b})
      </span>
    </div>
  );
};

export default RGBDisplay;
