import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:px-4">
        <div className="w-full max-w-xl rounded-lg md:p-6">
          <h2 className="mb-2 text-center text-2xl font-bold">
            Sign up for our newsletter
          </h2>
          <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
            Be the first to know about releases and industry news and insights.
          </p>
          <form className="flex flex-col">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-l border p-2 outline-none dark:border-[#27272A]"
              />
              <p className="block text-sm sm:hidden">
                We care about your data in our{" "}
                <Link href="#" className="text-orange-500 underline">
                  privacy policy
                </Link>
                .
              </p>
              <button className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Subscribe
              </button>
            </div>
            <p className="text-center text-sm text-gray-600">
              We care about your data in our{" "}
              <Link href="#" className="text-orange-600 underline">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cta;
