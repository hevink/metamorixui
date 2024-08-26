import { useState } from "react";
import { X } from "lucide-react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-20"
      } flex items-center justify-between bg-orange-600 px-4 py-3 text-white transition-transform duration-500 ease-in-out`}
      style={{ transformOrigin: "top" }}
    >
      <span className="grow text-center">
        🚀 Get Premium Components for your next project on Metamorix UI
      </span>
      <button
        className="text-white transition hover:text-gray-300"
        onClick={handleClose}
      >
        <X className="size-5" />
      </button>
    </div>
  );
};

export default Banner;
