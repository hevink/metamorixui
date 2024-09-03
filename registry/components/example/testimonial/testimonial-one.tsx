// Instructions for integrating continuous logo animation in Tailwind CSS:
// Add the following configurations to the `extend` section of your `tailwind.config.js`:
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         marquee: {
//           from: { transform: "translateX(0)" },
//           to: { transform: "translateX(calc(-100% - var(--gap)))" },
//         },
//         "marquee-vertical": {
//           from: { transform: "translateY(0)" },
//           to: { transform: "translateY(calc(-100% - var(--gap)))" },
//         },
//       },
//       animation: {
//         marquee: "marquee var(--duration) infinite linear",
//         "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
//       },
//     },
//   },
//   plugins: [],
// };

import React from "react";

import { cn } from "@/lib/utils";

const Testimonial = () => {
  return (
    <div className="py-16">
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h1 className="mb-6 text-3xl font-bold md:text-5xl ">
          Loved by Individuals and{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Organizations
          </span>
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300 md:text-xl">
          Join over 100,000 satisfied users who rely on our platform for their
          digital solutions, from personal projects to large-scale enterprise
          needs.
        </p>
      </div>

      <div className="relative flex h-[700px] w-full flex-row items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="hidden [--duration:20s] sm:block"
        >
          {secondRow.map((review) => (
            <div key={review.name} className="mb-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical
          className="hidden [--duration:20s] [--gap:2px] lg:block"
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
        "relative size-full space-y-6 overflow-hidden rounded-xl border p-4 shadow-sm",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white md:text-base">
            {name}
          </figcaption>
          <p className="truncate text-xs font-medium dark:text-white/40 md:text-sm">
            {email}
          </p>
        </div>
      </div>
      <blockquote className="text-sm md:text-lg">{description}</blockquote>
    </figure>
  );
};

const testimonials = [
  {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    description:
      "I've never seen anything like this before. It's amazing. I love it. The user interface is smooth, intuitive, and visually appealing. The functionality is top-notch, with every feature working seamlessly.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    description: "I'm in love with this platform.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1842360175.1721844022&semt=ais_hybrid",
  },
  {
    name: "Alex Johnson",
    email: "alexjohnson@gmail.com",
    description:
      "I don't know what to say. I'm speechless. This is amazing. The attention to detail is evident in every aspect.",
    img: "https://img.freepik.com/premium-photo/man-with-glasses-shirt-that-says-i-am-man_1221953-13634.jpg?ga=GA1.1.156494736.1719603061https://img.freepik.com/free-photo/glad-young-woman-with-blonde-straight-hair-eyeglasses-having-gentle-smile-being-happy-meet-with-her-boyfriend-student-female-smiling-into-camera-rejoicing-her-success-university_176420-13148.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    description:
      "I'm at a loss for words. This is amazing. I love it. The performance is incredible, and it works flawlessly across all devices, whether I'm on my phone, tablet, or computer.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
  },
  {
    name: "Sara Johnson",
    email: "sara@gmail.com",
    description: "I'm blown away. This is amazing.",
    img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1724235068~exp=1724235668~hmac=cc10947c076bfee3f20e9f3e946a2c1974b471c54df2d4f139d7344fe9e51421",
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
