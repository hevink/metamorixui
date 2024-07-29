import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

const State = () => {
  const stats = [
    {
      percentage: 100,
      description: "Vocals",
    },
    {
      percentage: 90,
      description: "Dancing",
    },
    {
      percentage: 95,
      description: "Performing",
    },
    {
      percentage: 100,
      description: "Beauty",
    },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex size-10 items-center justify-center rounded-lg dark:bg-white/5 bg-black/5 mb-6 border-2">
          <Zap aria-hidden="true" className="size-6 text-purple-600" />
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold text-center mx-auto max-w-md">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Dua lipa{" "}
          </span>{" "}
          is the best singer in the world
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic
          explicabo.
        </p>
      </div>
      <div className="mt-10 md:mt-14 block md:flex justify-between gap-14 space-y-6 md:space-y-0 mx-auto max-w-3xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-0.5 h-28 bg-gradient-to-b from-transparent via-purple-600 to-transparent" />
            <div>
              <div className="text-3xl">
                <NumberTicker value={stat.percentage} />%
              </div>
              <div className="mt-1 md:mt-2 text-neutral-600 dark:text-zinc-300 max-w-36">
                {stat.description}
              </div>
              <div className="flex items-center gap-2 cursor-pointer group mt-2 md:mt-3 text-sm">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;

// Thank you magic-ui for the NumberTicker component
function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0),
          );
        }
      }),
    [springValue],
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className,
      )}
      ref={ref}
    />
  );
}
