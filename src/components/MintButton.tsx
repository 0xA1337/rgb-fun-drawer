interface MintButtonProps {
  r: number;
  g: number;
  b: number;
}

const MintButton = ({ r, g, b }: MintButtonProps) => {
  const handleClick = () => {
    window.open(`https://rgb.fun/?r=${r}&g=${g}&b=${b}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 text-white rounded-lg transition-colors duration-200 w-40
        bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
      aria-label="Mint on RGB.fun"
    >
      Mint on RGB.fun
    </button>
  );
};

export default MintButton;
