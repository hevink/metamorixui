import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="my-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 items-center md:gap-16 gap-8">
            <div className="space-y-4 bg-[#FE6019] rounded-3xl py-8 px-4">
              <div className="flex items-center ml-auto p-6 bg-white shadow-md rounded-3xl max-w-md">
                <img
                  src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?ga=GA1.1.156494736.1719603061&semt=sph"
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div className="ml-4">
                  <h4 className="text-gray-800 text-base font-bold">
                    John Doe
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-white shadow-md rounded-3xl max-w-md">
                <div className="mr-4">
                  <h4 className="text-gray-800 text-base font-bold">
                    Mark Adair
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Veniam proident aute magna anim excepteur et ex consectetur
                    velit ullamco veniam minim aute sit.
                  </p>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.156494736.1719603061&semt=sph"
                  className="w-20 h-20 rounded-full ml-auto object-cover"
                />
              </div>
            </div>

            <div className="max-md:-order-1">
              <h6 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Testimonials
              </h6>
              <h2 className="text-gray-800 dark:text-gray-200 text-4xl font-extrabold mt-4">
                We are loyal with our customer
              </h2>
              <p className="text-sm text-gray-800 dark:text-gray-400 mt-4 leading-relaxed">
                Veniam proident aute magna anim excepteur et ex consectetur
                velit ullamco veniam minim aute sit. Elit occaecat officia et
                laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
