import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 px-8 py-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="network"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 L100 50 M50 0 L50 100"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>

      <motion.div
        className="absolute left-0 top-1/2 h-32 w-32 rounded-full bg-blue-500 opacity-20 blur-3xl filter"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <motion.div
          className="flex-1"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="mb-2 text-2xl font-bold">Metamorix UI</h2>
          <p className="max-w-md text-blue-300">
            Forge the future of web design with our cutting-edge premium
            components
          </p>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="hidden text-blue-300 sm:block">
            Ready to innovate?
          </span>
          <motion.a
            href="#"
            className="group relative flex items-center space-x-2 overflow-hidden rounded-full bg-blue-500 px-6 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
