import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden py-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/02/17/107991-678971274_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-10 text-center sm:px-4 md:px-8 lg:px-12 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
            Add collaboration
          </span>{" "}
          <br />
          to your product today
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl mb-6">
          Enhance your team's productivity and streamline your workflow with our
          collaborative tools. Sign up now to stay ahead of the competition and
          achieve more together!
        </p>
        <motion.button
          className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 bg-orange-600 text-white rounded-lg transition duration-300 shadow-md"
          whileHover={{
            backgroundColor: "#FF7F50",
            boxShadow: "0px 0px 15px rgba(255, 127, 80, 0.7)",
            scale: 1.05,
          }}
          whileTap={{
            backgroundColor: "#FF4500",
            boxShadow: "0px 0px 10px rgba(255, 69, 0, 0.5)",
            scale: 0.95,
          }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Cta;
