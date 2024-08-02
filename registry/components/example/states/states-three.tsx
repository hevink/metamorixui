import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

const States = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm text-center">Launch faster</p>
        <h2 className="text-2xl mt-2 font-medium">Build Something great</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl text-center">
          Empower your projects with state-of-the-art AI solutions, tailored to
          enhance efficiency and drive success. Discover the future of
          innovation with our cutting-edge technology.a
        </p>
      </div>
      <div className="block md:flex items-center justify-between mt-16 gap-10">
        <div className="grid grid-cols-2 gap-6 md:w-1/2">
          {states.map((state) => (
            <div key={state.id} className="rounded-lg text-center">
              <h1 className="text-3xl md:text-4xl font-bold">
                <NumberTicker value={state.percentage} />%
              </h1>
              <p className="text-lg mt-3 font-medium">{state.title}</p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                {state.description}
              </p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="w-fit rounded-lg bg-gray-900/5 dark:bg-slate-300/10 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-slate-500/10 lg:rounded-2xl lg:p-3">
            <Image
              src="/dashboard.png"
              width={500}
              height={500}
              alt={""}
              quality={"100"}
              className="w-full rounded-md bg-white dark:bg-black shadow-2xl ring-1 ring-gray-900/10"
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
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
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
