import React from "react";
import { CircleArrowRight, Users } from "lucide-react";

const Banner = () => {
  const destinations = [
    {
      img: "https://cdn.pixabay.com/photo/2023/07/04/10/15/boat-8105949_1280.jpg",
      title: "Trip to the mountains",
      attendees: 31,
      id: 1,
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/09/14/02/48/egypt-938993_1280.jpg",
      title: "Trip to the Egypt",
      attendees: 29,
      id: 2,
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/03/09/20/52/santorini-4044972_1280.jpg",
      title: "Trip to the Greece",
      attendees: 21,
      id: 3,
    },
  ];

  return (
    <div
      className="flex h-[80vh] flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/06/01/07/nature-2587331_1280.jpg')",
      }}
    >
      <div className="flex items-center justify-center p-6 md:justify-end md:p-12 lg:p-16">
        <nav className="flex items-center text-white sm:space-x-6">
          {["Home", "About Us", "Premium", "Blogs"].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-black"
          >
            Explore
          </a>
        </nav>
      </div>

      <div className="flex items-center justify-center p-4 md:justify-start md:p-12 lg:p-16">
        <div className="max-w-md space-y-4 sm:max-w-lg">
          <p className="mt-4 text-white">Mountains | Plains | Beaches</p>
          <h1 className="text-4xl font-bold text-white">
            Spend your vacation with our activities
          </h1>

          <div className="sm:mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                Most Popular
              </h2>
              <CircleArrowRight className="cursor-pointer text-white" />
            </div>
            <div className="mt-4 flex space-x-6">
              {destinations.map((destination, index) => (
                <div
                  key={destination.title}
                  className={`card rounded-lg bg-slate-100 p-2 shadow-md ${
                    index === destinations.length - 1 ? "hidden sm:block" : ""
                  }`}
                >
                  <img
                    src={destination.img}
                    alt={destination.title}
                    className="size-36 cursor-pointer rounded-lg object-cover"
                  />
                  <p className="pt-1 text-xs font-medium text-black">
                    {destination.title}
                  </p>
                  <span className="flex items-center gap-1">
                    <Users className="text-black" size={12} />
                    <p className="text-xs text-black">
                      {destination.attendees} people going
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
