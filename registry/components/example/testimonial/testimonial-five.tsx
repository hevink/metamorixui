import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    <section className="py-12 md:py-16 relative">
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
                damping: 10,
                stiffness: 150,
                restDelta: 0.001,
              },
            }}
          >
            <div className="flex items-center mx-auto">
              <img
                src={image}
                alt={name}
                className="m-0 h-[82px] w-[82px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center justify-center space-x-3">
                <div className="font-medium text-base text-gray-900/80 dark:text-gray-300">
                  {name}
                </div>
                <div className="font-regular text-base text-gray-600 dark:text-gray-300">
                  {email}
                </div>
              </div>
            </div>
            <p className="m-0 text-center text-2xl max-w-xl font-medium tracking-tight">
              {description}
            </p>
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 "
        onClick={handlePrevious}
        aria-label="Previous Testimonial"
      >
        <ArrowLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 700"
        onClick={handleNext}
        aria-label="Next Testimonial"
      >
        <ArrowRight />
      </button>
    </section>
  );
};

export default Testimonial;

const testimonials = [
  {
    name: "John Doe",
    email: "johndoe23@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?ga=GA1.1.156494736.1719603061&semt=sph",
    description:
      "Innovative solutions that exceeded our expectations. Great work!",
  },
  {
    name: "Alex Johnson",
    email: "alexjohnson@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Professional and efficient, delivering high-quality tech solutions.",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@gmail.com",
    image:
      "https://img.freepik.com/free-photo/horizontal-view-smiling-brunette-young-woman-with-pleasant-appearance_273609-18455.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Fantastic attention to detail and great communication throughout the project.",
  },
  {
    name: "Michael Brown",
    email: "michaelbrown@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-round-glasses-denim-shirt_273609-12127.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Reliable and skilled in modern web technologies. Highly recommend!",
  },
  {
    name: "Sarah Miller",
    email: "sarahmiller@gmail.com",
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Delivered our project on time with outstanding results. Truly impressive work!",
  },
  {
    name: "Laura White",
    email: "laurawhite@gmail.com",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.156494736.1719603061&semt=ais_hybrid",
    description:
      "Exceptional expertise in React and Node.js. Great to work with!",
  },
];
