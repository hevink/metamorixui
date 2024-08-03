import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:px-4">
        <div className="md:p-6 rounded-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold text-center mb-2">
            Sign up for our newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
            Be the first to know about releases and industry news and insights.
          </p>
          <form className="flex flex-col">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 border rounded-l outline-none"
              />
              <p className="text-sm block sm:hidden">
                We care about your data in our{" "}
                <Link href="#" className="text-orange-500 underline">
                  privacy policy
                </Link>
                .
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 text-center">
              We care about your data in our{" "}
              <a href="#" className="text-orange-600 underline">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
