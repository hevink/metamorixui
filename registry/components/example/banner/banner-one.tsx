"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="block md:flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div>
            <Cookie className="size-5 text-gray-500" />
          </div>
          <p className="text-sm text-gray-700">
            We use third-party cookies in order to personalise your experience.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Read our Cookie Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-end space-x-2 mt-2 md:mt-0">
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 w-full"
          >
            Decline
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full"
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
