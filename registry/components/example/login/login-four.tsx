import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="size-full rounded-md object-cover object-top"
              src="https://cdn.pixabay.com/photo/2018/09/18/16/45/forest-3686632_640.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-32 w-full">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
        <div className="flex items-center justify-center py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-3 flex justify-center">
              <img
                src="https://ui.metamorix.com/favicon.ico"
                className="size-12"
              />
            </div>
            <h2 className="text-center text-xl font-bold leading-tight md:text-2xl">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline dark:text-white"
              >
                Create a free account
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 dark:text-gray-100"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900 dark:text-gray-100"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline dark:text-white"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-neutral-800 dark:focus:ring-offset-neutral-800"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-md bg-gradient-to-t from-blue-500 to-sky-500 px-3 py-2.5 font-semibold text-white transition-all duration-200 focus:outline-none"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="my-3">
              <div className="flex items-center justify-center space-x-2">
                <div className="h-px w-14 bg-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  or continue with
                </span>
                <div className="h-px w-14 bg-gray-400" />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 focus:bg-gray-100 focus:text-black focus:outline-none dark:border-neutral-600 dark:bg-neutral-800/20 dark:text-gray-100 dark:hover:bg-neutral-700/40 dark:hover:text-white dark:focus:bg-neutral-700 dark:focus:text-white dark:focus:ring-1 dark:focus:ring-offset-1"
              >
                <span className="mr-2 inline-block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 256 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    />
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    />
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    />
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    />
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial data
interface Testimonial {
  image: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image:
      "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    name: "Lula Meyers",
    text: '"Untitled has saved us thousands of hours of work. We\'re able to spin up projects faster and take on more clients."',
  },
  {
    image:
      "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    name: "John Doe",
    text: "\"I've been using Untitled for a year now and it's been a game-changer for my business. Highly recommended!\"",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    name: "Jane Doe",
    text: '"Untitled has transformed the way we approach our projects. The efficiency and support are unmatched. A must-have tool!"',
  },
  {
    image:
      "https://img.freepik.com/premium-photo/man-smiling-outdoors_53876-40306.jpg?size=626&ext=jpg",
    name: "Michael Anderson",
    text: '"I was hesitant at first, but Untitled exceeded all expectations. It\'s become an integral part of our workflow."',
  },
];

const Testimonial: React.FC<Testimonial> = ({ image, name, text }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-lg p-6 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={name} className="mb-4 size-24 rounded-full" />
      <h3 className="mb-2 text-xl font-bold text-gray-100">{name}</h3>
      <p className="text-center text-gray-300">{text}</p>
    </motion.div>
  );
};

// TestimonialSlider component
const TestimonialSlider: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative h-full">
      <div className="absolute left-4 top-1/2 z-50 -translate-y-1/2 cursor-pointer text-white">
        <ArrowLeft size={20} onClick={handlePrevious} />
      </div>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Testimonial
            image={testimonials[currentIndex].image}
            name={testimonials[currentIndex].name}
            text={testimonials[currentIndex].text}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white">
        <ArrowRight size={20} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Login;
