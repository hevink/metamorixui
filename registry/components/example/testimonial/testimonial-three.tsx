import React from "react";

const Testimonial = () => {
  let rating = 4;

  return (
    <section className="my-6">
      <div>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            Testimonials
          </h2>
          <p className="text-sm text-gray-800 dark:text-gray-200 mt-4 leading-relaxed">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="max-w-[390px] md:max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] relative my-12"
          >
            <img
              src={
                index === 0
                  ? "https://i.pravatar.cc/100?img=5"
                  : index === 1
                    ? "https://i.pravatar.cc/100?img=1"
                    : index === 2
                      ? "https://i.pravatar.cc/100?img=6"
                      : ""
              }
              className="w-16 h-16 rounded-full absolute right-0 left-0 mx-auto -top-7"
            />
            <div className="mt-6 text-center">
              <div>
                <h4 className="text-sm font-extrabold text-gray-800 dark:text-gray-200">
                  Mark Adair
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
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-4">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className="w-5"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                      fill={index < rating ? "#facc15" : "#CED5D8"}
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
