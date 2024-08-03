import React from "react";

const Cta = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16">
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Our people</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat. Quasi aperiam sit non sit neque reprehenderit.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg  transition">
            Join our team
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMGFyZSUyMGZ1bnxlbnwwfHwwfHx8MA%3D%3D"
            alt="People 1"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
