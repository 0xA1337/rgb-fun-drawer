import { RotateCcw } from "lucide-react";

const ResetButton = ({ onReset }: { onReset: () => void }) => {
  return (
    <button
      onClick={onReset}
      className="w-12 h-12 flex items-center justify-center text-gray-700 
                bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
      aria-label="Reset grid"
    >
      <RotateCcw className="w-5 h-5" />
    </button>
  );
};

export default ResetButton;
