import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
        }}
        className="flex h-12 flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-center md:gap-4 md:px-6 lg:py-0"
        ref={ref}
      >
        <motion.p
          className="text-base font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          🚀&nbsp;&nbsp; Get Premium Components for your next project on
          Metamorix UI
        </motion.p>

        <motion.button
          className="whitespace-nowrap text-start text-base font-semibold underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Banner;
