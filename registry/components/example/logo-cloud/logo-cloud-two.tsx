import React from "react";

const logos = [
  {
    name: "Babel",
    url: "https://svgl.app/library/babel.svg",
  },
  {
    name: "Ngrok",
    url: "https://svgl.app/library/ngrok-light.svg",
  },
  {
    name: "Webflow",
    url: "https://svgl.app/library/webflow.svg",
  },
  {
    name: "Perplexity",
    url: "https://svgl.app/library/perplexity_wordmark_light.svg",
  },
  {
    name: "Sanity",
    url: "https://svgl.app/library/sanity.svg",
  },
  {
    name: "Post CSS",
    url: "https://svgl.app/library/postcss_wordmark.svg",
  },
];

const LogoCloud = () => {
  return (
    <div className="mx-auto my-10 px-5">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="mx-auto max-w-md text-xl font-semibold md:text-2xl">
            Trusted by world class companies, design teams & popular designers
          </h2>
        </div>
        <div className="w-full py-12">
          <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
            <div className="grid grid-cols-3 gap-x-6 md:grid-cols-5 lg:grid-cols-6">
              {logos.map((logo, key) => (
                <img
                  key={key}
                  src={logo.url}
                  className="h-12 w-28 px-2"
                  alt={logo.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>and 1000+ more companies</p>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
