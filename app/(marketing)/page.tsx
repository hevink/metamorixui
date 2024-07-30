"use client";

import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  const [gradientIndex, setGradientIndex] = useState(0);

  const gradients = [
    "from-violet-600 to-purple-600",
    "from-blue-600 to-cyan-600",
    "from-green-600 to-emerald-600",
    "from-yellow-600 to-orange-600",
    "from-red-600 to-pink-600",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-110px)] relative">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-gradient-to-br ${gradients[gradientIndex]} rounded-3xl blur-[200px] -z-50 transition-colors duration-1000`}
      />

      <Tooltip>
        <TooltipTrigger asChild>
          <p
            className={`bg-gradient-to-r ${gradients[gradientIndex]}  bg-clip-text text-transparent text-4xl font-bold`}
          >
            Rukja ja bhai abhi banaunga
          </p>
        </TooltipTrigger>
        <TooltipContent>
          <p>Work in progress brother 😊</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
