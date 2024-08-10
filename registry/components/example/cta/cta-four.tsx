import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 bg-gradient-to-br from-orange-400 to-red-600">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Transform Your Business Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Join the revolution of innovative companies leveraging
              cutting-edge technology to skyrocket their success.
            </motion.p>
            <motion.form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
              >
                Get Started
              </motion.button>
            </motion.form>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Key Features
            </h3>
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center space-x-4 text-white"
                >
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 left-4 text-white text-opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Trusted by 10,000+ companies worldwide
      </motion.div>
    </section>
  );
};

export default Cta;

const features = [
  {
    icon: "📊",
    title: "Data Insights",
    description: "Unlock powerful analytics",
  },
  {
    icon: "🚀",
    title: "Rapid Growth",
    description: "Accelerate your business",
  },
  {
    icon: "🔒",
    title: "Enhanced Security",
    description: "Protect your assets",
  },
  { icon: "🌐", title: "Global Network", description: "Connect worldwide" },
];
