import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

const States = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-sm">Launch faster</p>
        <h2 className="mt-2 text-2xl font-medium">Build Something great</h2>
        <p className="mt-3 max-w-xl text-center text-gray-600 dark:text-gray-300">
          Empower your projects with state-of-the-art AI solutions, tailored to
          enhance efficiency and drive success. Discover the future of
          innovation with our cutting-edge technology.a
        </p>
      </div>
      <div className="mt-16 block items-center justify-between gap-10 md:flex">
        <div className="grid grid-cols-1 gap-6 md:w-1/2 md:grid-cols-2">
          {states.map((state) => (
            <div key={state.id} className="rounded-lg text-center">
              <h1 className="text-3xl font-bold md:text-4xl">
                <NumberTicker value={state.percentage} />%
              </h1>
              <p className="mt-3 text-lg font-medium">{state.title}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-400">
                {state.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <div className="w-fit rounded-lg bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-slate-300/10 dark:ring-slate-500/10 lg:rounded-2xl lg:p-3">
            {/* <Image
              src="https://ui.metamorix.com/_next/image?url=%2Fdashboard.png&w=1080&q=100"
              width={500}
              height={500}
              alt={""}
              quality={"100"}
              className="w-full rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-black"
            /> */}
            <img
              src="https://ui.metamorix.com/dashboard.png"
              width={500}
              height={500}
              alt="State"
              className="w-full rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;

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

const states = [
  {
    id: 1,
    percentage: 100,
    title: "Revenue Boost",
    description: "Leverage AI to maximize your revenue potential.",
  },
  {
    id: 2,
    percentage: 100,
    title: "Customer Insights",
    description: "Gain deep insights into customer behavior and preferences.",
  },
  {
    id: 3,
    percentage: 100,
    title: "Market Expansion",
    description: "Identify new markets and opportunities with precision.",
  },
  {
    id: 4,
    percentage: 100,
    title: "Predictive Analytics",
    description: "Utilize AI for accurate forecasting and trend analysis.",
  },
];
