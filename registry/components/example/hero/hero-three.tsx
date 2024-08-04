"use client";

import { useRef } from "react";
import starBg from "@/assets/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{ backgroundImage: `url(${starBg.src})`, backgroundPositionY }}
      animate={{ backgroundPositionX: starBg.width }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute size-2  left-0 bg-white rounded-full top-1/2  -translate-x-1/2  -translate-y-1/2  inline-flex items-center justify-center "></div>
        <div className="absolute size-2  left-1/2 bg-white rounded-full top-0  -translate-x-1/2  -translate-y-1/2  inline-flex items-center justify-center "></div>
        <div className="absolute size-5 left-full  border border-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2  inline-flex  items-center justify-center "></div>
        <div className="size-2 bg-white rounded-full"></div>
      </motion.div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-dashed"
      ></motion.div>

      <motion.div
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 left-0  bg-white rounded-full top-1/2 -translate-x-1/2  -translate-y-1/2  inline-flex  items-center justify-center "></div>
        <div className="absolute size-2 left-full  bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2  inline-flex  items-center justify-center "></div>
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="md:text-[164px] text-7xl md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent  bg-clip-text text-center">
          Meta murix
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Trust me when I say this, Metamorix UI is the best way to build your
          next website. It's fast, reliable, and easy to use. You can build your
          dream website in minutes.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
