import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <div>
        <div className="flex flex-col items-center justify-center pt-20 h-full">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 transition-colors duration-200 border bg-[#f2f2f2] dark:bg-[#161617]">
            <span className="z-10 py-0.5 text-sm flex items-center justify-center gap-1.5">
              ✨ Introducing Metamorix UI
              <ChevronRight className="size-4" />
            </span>
          </button>

          <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
            <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b dark:from-gray-50 dark:to-gray-300 from-gray-900 to-gray-700 text-transparent">
              Build your dream website in few minutes
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-6 text-center">
              Trust me when I say this, Metamorix UI is the best way to build
              your next website. It's fast, reliable, and easy to use. You can
              build your dream website in minutes.
            </p>
            <div className="flex relative items-center justify-center mt-8 md:mt-12 w-full">
              <Link
                href="#"
                className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-black/10 dark:bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none"
              >
                <p className="text-foreground text-sm text-center md:text-base font-medium px-4 lg:pr-0">
                  ✨ {"  "} Start building your dream website now!
                </p>
                <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden border-b-2 border-x-2 border-blue-700 bg-gradient-to-tr from-blue-600 to-violet-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-blue-600 active:shadow-none rounded-full">
                  <span className="absolute size-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:size-36"></span>
                  <span className="relative font-medium flex items-center ">
                    {" "}
                    Get Started
                    <ArrowRight className="size-4 ml-1" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center py-10 md:py-20 px-4 w-full">
            <div
              style={{
                background:
                  "conic-gradient(from 230.29deg at 51.63% 52.16%, #2400ff 0deg, #0087ff 67.5deg, #6c279d 198.75deg, #1826a3 251.25deg, 667c4 301.88deg, #691eff 1turn)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 gradient size-2/4 -translate-x-1/2 -translate-y-1/2 inset-0 blur-[10rem] opacity-20"
            />
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl backdrop-blur-3xl">
              <div className="absolute top-1/2 left-1/2 -z-10 gradient size-3/4 -translate-x-1/2 -translate-y-1/2 inset-0 blur-[10rem]" />
              <Image
                src={
                  "https://framerusercontent.com/images/U5dvfukEWnDVNSFJrIWb4qzBfSA.webp"
                }
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border z-50"
              />

              <BorderBeam size={350} duration={12} delay={9} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 2,
  colorFrom = "#0000ff",
  colorTo = "#7800ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className,
      )}
    />
  );
};
