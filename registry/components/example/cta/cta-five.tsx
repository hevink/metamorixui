import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TrendyCTASection = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 },
    });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 text-orange-900 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-400 to-amber-300 rounded-full filter blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-400 to-pink-400 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6"
          >
            Ignite Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              {" "}
              Digital Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-orange-800 mb-8"
          >
            Join a community of visionaries and trailblazers. Our platform fuels
            your creativity and propels your success in the digital realm.
          </motion.p>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-full bg-white bg-opacity-50 border border-orange-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition duration-300"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition duration-300 shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.form>
        </div>
        <div className="lg:w-1/2 relative">
          <motion.div
            animate={controls}
            className="relative z-10"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <svg viewBox="0 0 200 200" className="w-full max-w-lg mx-auto">
              <motion.path
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                fill="none"
                strokeWidth="8"
                stroke="url(#gradient)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-6xl font-bold text-orange-900">2024</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrendyCTASection;
