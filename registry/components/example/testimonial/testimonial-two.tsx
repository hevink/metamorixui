import React from "react";

const Testimonial = () => {
  return (
    <section className="min-w-screen flex min-h-screen items-center justify-center sm:py-5">
      <div className="w-full text-gray-800 sm:px-5 sm:py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="mb-5 text-5xl font-bold text-gray-800 dark:text-gray-200 sm:text-6xl md:text-7xl">
              What people <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                are saying.
              </span>
            </h1>
            <h3 className="mb-5 text-xl font-light text-gray-800 dark:text-gray-200">
              Check out what our customers have to say about us!
            </h3>
            <div className="mb-4 text-center sm:mb-10">
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#FE6019]"></span>
              <span className="inline-block h-1 w-40 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-[#FE6019]"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-[#FE6019]"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialCard = ({ name, image, description, index }: any) => {
  return (
    <div
      className={`w-full border-gray-300 font-light text-gray-800 dark:border-[#27272A] sm:p-5 ${index === 0 || index === 1 ? "lg:border-b lg:border-r" : index === 2 ? "lg:border-b" : index === 3 || index === 4 ? "lg:border-r" : ""}`}
    >
      <div className="flex h-full flex-col justify-between">
        <p className="mb-6 text-base leading-snug text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-500 dark:border-gray-700">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <h6 className="text-base font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h6>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Position @Company
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Kenzie Edgar",
    image: "https://i.pravatar.cc/100?img=1",
    description:
      "Working with Syed was a great experience. His drive for clean aesthetics and his open communication style helped us collaborate closely on the solution. He's the only designer I know who also has a deep understanding for development.",
  },
  {
    name: "Stevie Tifft",
    image: "https://i.pravatar.cc/100?img=2",
    description:
      "Syed is a fantastic UI/UX designer and developer with a keen sense for marketing, and lead generation. He's the only designer I know who also has a deep understanding for code and front-end development.",
  },
  {
    name: "Tommie Ewart",
    image: "https://i.pravatar.cc/100?img=3",
    description:
      "Talented artist, experienced with various media and can make any project you are working on look good. He is easy to work with and is a self-starter. I would work with Syed again.",
  },
  {
    name: "Charlie Howse",
    image: "https://i.pravatar.cc/100?img=4",
    description:
      "Syed is a true professional with amazing talent. He is a creative thinker, has his finger on the pulse of what's to come, and absolutely one of the quickest and best problem solvers I have ever met.",
  },
  {
    name: "Nevada Herbertson",
    image: "https://i.pravatar.cc/100?img=5",
    description:
      "Syed is one of my favorite people to work with. He's my go-to colleague when troubleshooting any new technique or technology because he understands how to tackle unknown problems with gumption.",
  },
  {
    name: "Kris Stanton",
    image: "https://i.pravatar.cc/100?img=6",
    description:
      "Syed is a talented artist. He is very experienced with various media and can make any project you are working on look good. He is easy to work with and is a self-starter. I would work with Syed again.",
  },
];
