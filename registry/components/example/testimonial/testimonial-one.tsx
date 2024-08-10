import React from "react";

import { cn } from "@/lib/utils";

const Testimonial = () => {
  return (
    <div className="sm:px-4 py-16 md:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Loved by Individuals and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Organizations
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Join over 100,000 satisfied users who rely on our platform for their
          digital solutions, from personal projects to large-scale enterprise
          needs.
        </p>
      </div>

      <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:20s] hidden sm:block [--gap:2px]"
        >
          {thirdRow.map((review) => (
            <div key={review.name} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
      </div>
    </div>
  );
};
export default Testimonial;

const ReviewCard = ({
  img,
  name,
  email,
  description,
}: {
  img: string;
  name: string;
  email: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-3xl border p-2 sm:p-8 shadow-sm space-y-8",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm md:text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs md:text-sm font-medium dark:text-white/40 truncate">
            {email}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm md:text-lg">{description}</blockquote>
    </figure>
  );
};

const testimonials = [
  {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    description:
      "I've never seen anything like this before. It's amazing. I love it. The user interface is smooth, intuitive, and visually appealing. The functionality is top-notch, with every feature working seamlessly. This product has exceeded my expectations in every way. The customer support has been prompt and helpful.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Alex Johnson",
    email: "alexjohnson@gmail.com",
    description:
      "I don't know what to say. I'm speechless. This is amazing. The attention to detail is evident in every aspect. From the sleek design to the seamless usability, everything is well thought out. The performance is lightning-fast, and the features are exactly what I need. It's clear that a lot of thought and care went into creating this product.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061https://img.freepik.com/free-photo/glad-young-woman-with-blonde-straight-hair-eyeglasses-having-gentle-smile-being-happy-meet-with-her-boyfriend-student-female-smiling-into-camera-rejoicing-her-success-university_176420-13148.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    description:
      "I'm at a loss for words. This is amazing. I love it. The performance is incredible, and it works flawlessly across all devices, whether I'm on my phone, tablet, or computer. The versatility and reliability of this product make it an essential tool for my daily tasks. The team behind this product is clearly passionate about their work, and it shows. I will definitely be using this for a long time to come.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
];

const firstRow = testimonials.slice(testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);
const thirdRow = testimonials.slice(testimonials.length / 2);

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
