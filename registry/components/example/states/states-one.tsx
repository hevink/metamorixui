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
        <div className="mb-6 flex size-10 items-center justify-center rounded-lg border-2 bg-black/5 dark:bg-white/5">
          <Zap aria-hidden="true" className="size-6 text-purple-600" />
        </div>
        <h1 className="mx-auto max-w-md text-center text-2xl font-semibold md:text-4xl">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Dua lipa{" "}
          </span>{" "}
          is the best singer in the world
        </h1>
        <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-300 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic
          explicabo.
        </p>
      </div>
      <div className="mx-auto mt-10 block max-w-3xl justify-between gap-14 space-y-6 md:mt-14 md:flex md:space-y-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="h-28 w-0.5 bg-gradient-to-b from-transparent via-purple-600 to-transparent" />
            <div>
              <div className="text-3xl">
                <NumberTicker value={stat.percentage} />%
              </div>
              <div className="mt-1 max-w-36 text-neutral-600 dark:text-zinc-300 md:mt-2">
                {stat.description}
              </div>
              <div className="group mt-2 flex cursor-pointer items-center gap-2 text-sm md:mt-3">
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
const NumberTicker = ({
  value,
  direction = "up",
  delay = 0,
  className,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
}) => {
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
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className,
      )}
      ref={ref}
    />
  );
};
