import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 px-6 py-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-16 w-16 rounded-full bg-white opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + index * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
        <motion.div
          className="flex items-center space-x-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-300">
            <svg
              className="h-8 w-8 text-purple-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Premium Components</h2>
            <p className="text-sm text-violet-300">
              Elevate your projects with Metamorix UI
            </p>
          </div>
        </motion.div>

        <motion.a
          href="#"
          className="flex max-w-40 items-center space-x-2 rounded-full bg-violet-300 px-4 py-2 font-bold text-purple-900 shadow-lg hover:shadow-xl sm:max-w-full sm:px-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get Started</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            animate={{ x: 5 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Banner;
