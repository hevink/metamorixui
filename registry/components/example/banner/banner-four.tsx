import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { X } from "lucide-react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-0 z-50"
          >
            <div
              ref={ref}
              className="flex w-full items-center gap-x-6 px-6 py-3 sm:px-3.5 sm:before:flex-1"
              style={{
                background: "linear-gradient(90deg, #1cb5e0 0%, #000851 100%)",
              }}
            >
              <div className="flex flex-col items-start text-sm font-medium leading-6 text-white sm:flex-row sm:items-center">
                <p className="text-base font-medium">
                  Get Premium Components for your next project on Metamorix UI
                </p>

                <motion.a
                  href="#"
                  className="mt-2 flex-none rounded-lg bg-gray-800 px-3 py-1 text-sm text-white shadow-sm hover:bg-gray-700 sm:ml-3 sm:mt-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </div>
              <div className="flex flex-1 justify-end">
                <motion.button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  aria-label="Dismiss"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ height: 150 }} />
    </section>
  );
};

export default Banner;
