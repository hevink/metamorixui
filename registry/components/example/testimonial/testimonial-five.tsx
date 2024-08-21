import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [rating, setRating] = useState(2);

  useEffect(() => {
    const randomRating = Math.floor(Math.random() * 4) + 2;
    setRating(randomRating);
  }, [currentTestimonial]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1,
    );
  };

  const handleNext = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
    );
  };

  const { description, name, image, email } = testimonials[currentTestimonial];

  const variants = {
    initial: { opacity: 0, y: "100%", scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: "100%", scale: 0.1 },
  };

  const dotVariants = {
    active: { scale: 1.2, backgroundColor: "#3f3f46" },
    inactive: { scale: 1, backgroundColor: "#D1D5DB" },
  };

  return (
    <section className="relative py-12 md:py-16">
      <div className="w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center space-y-4"
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 150,
                restDelta: 0.001,
              },
            }}
          >
            <p className="m-0 max-w-xl text-center text-2xl font-medium tracking-tight">
              {description}
            </p>
            <div className="mx-auto flex items-center">
              <img
                src={image}
                alt={name}
                className="m-0 h-[70px] w-[70px] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center space-x-3">
              <div className="text-base font-medium text-gray-900/80 dark:text-gray-300">
                {name}
              </div>
              <div className="font-regular text-base text-gray-600 dark:text-gray-300">
                {email}
              </div>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} filled={index < rating} />
              ))}
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                variants={dotVariants}
                animate={index === currentTestimonial ? "active" : "inactive"}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2 "
        onClick={handlePrevious}
        aria-label="Previous Testimonial"
      >
        <ArrowLeft />
      </button>
      <button
        className="700 absolute right-0 top-1/2 -translate-y-1/2 transform p-2"
        onClick={handleNext}
        aria-label="Next Testimonial"
      >
        <ArrowRight />
      </button>
    </section>
  );
};

export default Testimonial;

const Star = ({ filled }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "#FFD700" : "none"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={filled ? "#FFD700" : "#E5E7EB"}
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.25L6.516 20.06a.75.75 0 01-1.09-.79l.82-4.773-3.467-3.393a.75.75 0 01.417-1.28l4.794-.697L11.24 4.3a.75.75 0 011.352 0l2.144 4.918 4.794.697a.75.75 0 01.417 1.28l-3.467 3.393.82 4.773a.75.75 0 01-1.09.79L12 17.25z"
    />
  </svg>
);

const testimonials = [
  {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?ga=GA1.1.156494736.1719603061&semt=sph",
    description:
      "Innovative solutions that exceeded our expectations. John’s team delivered a complex project ahead of schedule, incorporating cutting-edge technologies with seamless integration.",
  },
  {
    name: "Alex Johnson",
    email: "alexjohnson@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Professional and efficient, delivering high-quality tech solutions. Alex's attention to detail and commitment to excellence ensured that our project not only met but exceeded industry standards.",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    image:
      "https://img.freepik.com/free-photo/horizontal-view-smiling-brunette-young-woman-with-pleasant-appearance_273609-18455.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Fantastic attention to detail and great communication throughout the project. Emily's proactive approach and regular updates kept us informed at every stage.",
  },
  {
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Reliable and skilled in modern web technologies. Highly recommend! Michael demonstrated exceptional expertise in both frontend and backend development",
  },
  {
    name: "Sarah Miller",
    email: "sarahmiller@gmail.com",
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Delivered our project on time with outstanding results. Truly impressive work! Sarah's leadership and technical acumen were key to the success of our project.",
  },
  {
    name: "Laura White",
    email: "laurawhite@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Exceptional expertise in React and Node.js. Great to work with! Laura's deep knowledge of modern web frameworks enabled her to deliver a highly interactive and responsive application.",
  },
];
