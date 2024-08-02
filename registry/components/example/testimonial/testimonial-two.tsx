import React from "react";
import { motion } from "framer-motion";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-[#FE6019]"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#FE6019] ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#FE6019] ml-1"></span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
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
    <motion.div
      className="relative w-full mx-auto rounded-lg border dark:border-gray-800 p-5 text-gray-800 font-light mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
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
    </motion.div>
  );
};

const testimonials = [
  {
    name: "Kenzie Edgar",
    image: "https://i.pravatar.cc/100?img=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    name: "Stevie Tifft",
    image: "https://i.pravatar.cc/100?img=2",
    description:
      "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
  },
  {
    name: "Tommie Ewart",
    image: "https://i.pravatar.cc/100?img=3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
  },
  {
    name: "Charlie Howse",
    image: "https://i.pravatar.cc/100?img=4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.",
  },
  {
    name: "Nevada Herbertson",
    image: "https://i.pravatar.cc/100?img=5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!",
  },
  {
    name: "Kris Stanton",
    image: "https://i.pravatar.cc/100?img=6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
  },
];
