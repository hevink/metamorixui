const LogoCloud = () => {
  return (
    <section className="my-12 block items-center justify-between gap-5 lg:flex">
      <div className="w-full lg:w-1/2">
        <h1 className="mb-5 text-center text-xl font-bold md:text-2xl lg:text-left lg:text-3xl">
          Trusted by world class{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent ">
            companies
          </span>{" "}
          & popular designers
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 lg:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          mollitia quasi aperiam dolore laboriosam aspernatur saepe aliquam
          earum placeat soluta.
        </p>
      </div>
      <div className="mt-10 w-full md:mt-0 lg:w-1/2">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div
              className="absolute inset-4 -z-50 opacity-30 blur-3xl"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            />
            {logos.map((logo, key) => (
              <img
                key={key}
                src={logo.url}
                className="h-16 w-40 rounded-md bg-white px-5 py-1 dark:bg-white/20"
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

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
];
