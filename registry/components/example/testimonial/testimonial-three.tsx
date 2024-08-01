// pages/index.js
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialCount = 3;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + testimonialCount) % testimonials.length,
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - testimonialCount + testimonials.length) %
        testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + testimonialCount) % testimonials.length,
    );
  };

  return (
    <section className="my-6 space-y-6">
      <div>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            Testimonials
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-200 mt-4 leading-relaxed">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in.
          </p>
        </div>
      </div>
      <div className="">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 space-x-4 mt-8"
          >
            {testimonials
              .slice(currentIndex, currentIndex + testimonialCount)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="max-w-[390px] md:max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] relative my-12"
                >
                  <img
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7 object-fill"
                    alt={testimonial.name}
                  />
                  <div className="mt-6 text-center">
                    <div>
                      <h4 className="text-sm font-extrabold text-gray-800 dark:text-gray-200">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-800 dark:text-gray-200 mt-0.5">
                        Web Designer | Software hub PVT. LTD.
                      </p>
                    </div>

                    <div className="mt-4">
                      <h2 className="text-lg font-extrabold text-gray-800 dark:text-gray-200 mb-2">
                        Amazing Design Inspiration
                      </h2>
                      <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex justify-center space-x-1 mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className="w-5"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                            fill={
                              i < testimonial.rating ? "#facc15" : "#CED5D8"
                            }
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;

const testimonials = [
  {
    name: "John Doe",
    image: "https://i.pravatar.cc/100?img=1",
    text: "This service has changed my life! The team is incredibly supportive and the results speak for themselves.",
    rating: 4,
  },
  {
    name: "Jane Smith",
    image: "https://i.pravatar.cc/100?img=2",
    text: "I'm impressed with the quality and efficiency. Highly recommended!",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    image: "https://i.pravatar.cc/100?img=3",
    text: "Outstanding service! They went above and beyond my expectations.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    image: "https://i.pravatar.cc/100?img=4",
    text: "Amazing experience, I would highly recommend their services.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    image: "https://i.pravatar.cc/100?img=5",
    text: "They provide top-notch service and quality. Very satisfied!",
    rating: 4,
  },
  {
    name: "Sarah Wilson",
    image: "https://i.pravatar.cc/100?img=6",
    text: "Great team and fantastic results. Worth every penny!",
    rating: 5,
  },
  {
    name: "David Lee",
    image: "https://i.pravatar.cc/100?img=7",
    text: "Professional and efficient. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    image: "https://i.pravatar.cc/100?img=8",
    text: "Professional and efficient. Highly recommend!",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    image: "https://i.pravatar.cc/100?img=9",
    text: "Professional and efficient. Highly recommend!",
    rating: 5,
  },
];
