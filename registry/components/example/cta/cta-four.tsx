import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-400 to-red-600 py-12">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        ref={ref}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
            >
              Transform Your Business Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-xl"
            >
              Join the revolution of innovative companies leveraging
              cutting-edge technology to skyrocket their success.
            </motion.p>
            <motion.form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-300 dark:text-white"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600"
              >
                Get Started
              </motion.button>
            </motion.form>
          </div>
          <div className="rounded-xl bg-white bg-opacity-10 p-8 backdrop-blur-md">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Key Features
            </h3>
            <motion.div
              ref={ref}
              className="space-y-6"
              initial="hidden"
              animate={isInView ? "visible" : ""}
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
        animate={isInView ? { opacity: 1 } : {}}
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
