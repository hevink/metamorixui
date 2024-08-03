import React from "react";

const Testimonial = () => {
  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full border-t border-b border-gray-200 dark:border-gray-700 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600 dark:text-gray-200">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light text-gray-800 dark:text-gray-200">
              Check out what our customers have to say about us!
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-[#FE6019]"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#FE6019] ml-1"></span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 !gap-y-0">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialCard = ({ name, image, description }: any) => {
  return (
    <div className="relative w-full mx-auto rounded-lg border dark:border-gray-800 p-5 text-gray-800 font-light mb-6 hover:scale-105">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200 dark:border-gray-500">
          <img src={image} alt={name} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-800 dark:text-gray-200">
            {name}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight text-gray-800 dark:text-gray-200">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            "
          </span>
          {description}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            "
          </span>
        </p>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Kenzie Edgar",
    image: "https://i.pravatar.cc/100?img=1",
    description:
      "I've been using this product for several months now, and I must say, it has exceeded my expectations in every way possible. The quality is outstanding, and the customer service is second to none!",
  },
  {
    name: "Stevie Tifft",
    image: "https://i.pravatar.cc/100?img=2",
    description:
      "Amazing service! The team went above and beyond to help me with my issue. I highly recommend this company to anyone looking for reliability and excellent support.",
  },
  {
    name: "Tommie Ewart",
    image: "https://i.pravatar.cc/100?img=3",
    description:
      "This product has completely transformed how I work. It's intuitive, fast, and reliable. I can't imagine going back to anything else.",
  },
  {
    name: "Charlie Howse",
    image: "https://i.pravatar.cc/100?img=4",
    description:
      "I was skeptical at first, but after using this product for a few weeks, I'm a believer. It's simply the best out there.",
  },
  {
    name: "Nevada Herbertson",
    image: "https://i.pravatar.cc/100?img=5",
    description:
      "The customer support is phenomenal. They were able to resolve my issue quickly and professionally. I'm impressed!",
  },
  {
    name: "Kris Stanton",
    image: "https://i.pravatar.cc/100?img=6",
    description:
      "Top-notch product! It's rare to find something that works so well without any hiccups. Highly recommended.",
  },
];
