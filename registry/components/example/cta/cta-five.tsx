import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 text-orange-900 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute left-0 top-0 h-1/2 w-1/2 -translate-x-1/4 -translate-y-1/4 transform rounded-full bg-gradient-to-br from-orange-400 to-amber-300 blur-3xl filter dark:from-blue-700 dark:to-blue-900"></div>
        <div className="absolute bottom-0 right-0 h-1/2 w-1/2 translate-x-1/4 translate-y-1/4 transform rounded-full bg-gradient-to-tl from-red-400 to-pink-400 blur-3xl filter dark:from-purple-700 dark:to-purple-900"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-24 sm:px-6 lg:flex-row lg:px-8">
        <div className="mb-12 lg:mb-0 lg:w-1/2 lg:pr-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-extrabold leading-tight sm:text-7xl"
          >
            Ignite Your
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-600">
              {" "}
              Digital Journey
            </span>
          </motion.h2>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-orange-800 dark:text-gray-300"
          >
            Join a community of visionaries and trailblazers. Our platform fuels
            your creativity and propels your success in the digital realm.
          </motion.p>
          <motion.form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-full border border-orange-300 bg-white bg-opacity-50 px-6 py-4 transition duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:border-gray-600 dark:bg-gray-700 dark:focus:border-gray-400 dark:focus:ring-gray-500"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:from-orange-600 hover:to-red-600 dark:from-blue-500 dark:to-purple-600 dark:hover:from-blue-600 dark:hover:to-purple-700"
            >
              Get Started
            </motion.button>
          </motion.form>
        </div>
        <div className="relative lg:w-1/2">
          <motion.div
            className="relative z-10 h-80 w-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <svg viewBox="0 0 400 300" className="h-full w-full">
              <rect width="400" height="300" fill="url(#bg-gradient)" />

              <motion.path
                d="M0,100 Q100,50 200,100 T400,100"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              <motion.path
                d="M0,300 L50,300 L50,250 L100,250 L100,300 L150,300 L150,200 L200,200 L200,300 L250,300 L250,150 L300,150 L300,300 L350,300 L350,250 L400,250 L400,300 L400,300 Z"
                fill="url(#city-gradient)"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {[...Array(20)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="2"
                  fill="url(#particle-gradient)"
                  initial={{ x: Math.random() * 400, y: Math.random() * 300 }}
                  animate={{
                    y: [Math.random() * 300, Math.random() * 300],
                    x: [Math.random() * 400, Math.random() * 400],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              ))}

              <text
                x="200"
                y="150"
                textAnchor="middle"
                fontSize="48"
                fontWeight="bold"
                fill="url(#text-gradient)"
              >
                {new Date().getFullYear()}
              </text>

              <defs>
                <linearGradient
                  id="bg-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#FEF3C7"
                    className="dark:stop-color-gray-800"
                  />
                  <stop
                    offset="100%"
                    stopColor="#FED7AA"
                    className="dark:stop-color-gray-900"
                  />
                </linearGradient>
                <linearGradient
                  id="line-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#F97316"
                    className="dark:stop-color-blue-500"
                  />
                  <stop
                    offset="100%"
                    stopColor="#EF4444"
                    className="dark:stop-color-purple-600"
                  />
                </linearGradient>
                <linearGradient
                  id="city-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#FDBA74"
                    className="dark:stop-color-blue-700"
                  />
                  <stop
                    offset="100%"
                    stopColor="#FB923C"
                    className="dark:stop-color-blue-900"
                  />
                </linearGradient>
                <linearGradient
                  id="particle-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#F97316"
                    className="dark:stop-color-blue-400"
                  />
                  <stop
                    offset="100%"
                    stopColor="#EF4444"
                    className="dark:stop-color-purple-500"
                  />
                </linearGradient>
                <linearGradient
                  id="text-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#EA580C"
                    className="dark:stop-color-blue-300"
                  />
                  <stop
                    offset="100%"
                    stopColor="#C2410C"
                    className="dark:stop-color-purple-400"
                  />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
