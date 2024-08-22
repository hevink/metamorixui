import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
        }}
        className="md:gap4 flex flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-center md:px-6 lg:py-0"
        ref={ref}
      >
        <motion.img
          src="https://about.gitlab.com/_nuxt/image/87eca8.svg"
          className="hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.p
          className="text-base font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Premium Components for your next project on Metamorix UI
        </motion.p>

        <motion.button
          className="whitespace-nowrap text-start text-base font-semibold text-white underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        <motion.img
          src="https://about.gitlab.com/_nuxt/image/65fccb.svg"
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </div>
    </motion.section>
  );
};

export default Banner;
