import React from "react";
import { Users } from "lucide-react";

const YourComponent = () => {
  return (
    <div
      className="flex h-[80vh] flex-col"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/06/01/07/nature-2587331_1280.jpg')",
      }}
    >
      <div className="flex items-center justify-center p-6 md:justify-end">
        <nav className="flex items-center space-x-6 text-white">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Premium
          </a>
          <a href="#" className="hover:underline">
            Blogs
          </a>
          <a
            href="#"
            className="rounded-lg border border-white px-4 py-2 hover:bg-white hover:text-black"
          >
            Explore
          </a>
        </nav>
      </div>

      <div className="flex p-16">
        <div className="space-y-4">
          <p className="mt-4 text-white">Mountains | Plains | Beaches</p>
          <h1 className="text-4xl font-bold text-white">
            Spend your vacation with our activities
          </h1>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white">Most Popular</h2>
            <div className="mt-4 flex space-x-6">
              <div className="card rounded-lg bg-slate-100 p-2 shadow-md">
                <img
                  src="https://cdn.pixabay.com/photo/2023/07/04/10/15/boat-8105949_1280.jpg"
                  alt=""
                  className="size-36 rounded-lg object-cover"
                />
                <p className="pt-1 text-xs text-black">Trip to the mountains</p>
                <span className="flex items-center gap-1">
                  <Users className="text-black" size={12} />
                  <p className="text-xs text-black">31 people going</p>
                </span>
              </div>
              <div className="card rounded-lg bg-slate-100 p-2 shadow-md">
                <img
                  src="https://cdn.pixabay.com/photo/2015/09/14/02/48/egypt-938993_1280.jpg"
                  alt=""
                  className="size-36 rounded-lg object-cover"
                />
                <p className="pt-1 text-xs text-black">Trip to the Egypt</p>
                <span className="flex items-center gap-1">
                  <Users className="text-black" size={12} />
                  <p className="text-xs text-black">29 people going</p>
                </span>
              </div>
              <div className="card rounded-lg bg-slate-100 p-2 shadow-md">
                <img
                  src="https://cdn.pixabay.com/photo/2019/03/09/20/52/santorini-4044972_1280.jpg"
                  alt=""
                  className="size-36 rounded-lg object-cover"
                />
                <p className="pt-1 text-xs text-black">Trip to the Greece</p>
                <span className="flex items-center gap-1">
                  <Users className="text-black" size={12} />
                  <p className="text-xs text-black">21 people going</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
