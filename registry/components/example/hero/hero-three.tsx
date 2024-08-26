"use client";

import starBg from "@/assets/stars.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section className="relative flex h-[492px] items-center overflow-hidden bg-black [mask-image:linear-gradient(to_bottom,transparent,black_0%,black_100%,transparent)] dark:[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]">
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] md:size-96" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${starBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

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
        className="absolute left-1/2 top-1/2 size-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:size-[580px] "
      >
        <div className="absolute left-0  top-1/2 inline-flex size-2 -translate-x-1/2  -translate-y-1/2  items-center  justify-center rounded-full bg-white " />
        <div className="absolute left-1/2  top-0 inline-flex size-2 -translate-x-1/2  -translate-y-1/2  items-center  justify-center rounded-full bg-white " />
        <div className="absolute left-full top-1/2  inline-flex size-5 -translate-x-1/2 -translate-y-1/2 items-center  justify-center  rounded-full  border border-white " />
        <div className="size-2 rounded-full bg-white" />
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
        className="absolute left-1/2 top-1/2 size-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20  md:size-[780px]"
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
        className="absolute left-1/2 top-1/2 size-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:size-[980px]"
      >
        <div className="absolute left-0 top-1/2  inline-flex size-2 -translate-x-1/2 -translate-y-1/2  items-center  justify-center  rounded-full bg-white " />
        <div className="absolute left-full top-1/2  inline-flex size-2 -translate-x-1/2 -translate-y-1/2 items-center  justify-center  rounded-full bg-white " />
      </motion.div>

      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-7xl font-semibold tracking-tighter text-transparent  md:text-[164px] md:leading-none">
          Meta murix
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Trust me when I say this, Metamorix UI is the best way to build your
          next website. It's fast, reliable, and easy to use. You can build your
          dream website in minutes.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
