import { ArrowRight, Zap } from "lucide-react";

const State = () => {
  const stats = [
    {
      percentage: "100%",
      description: "Vocals",
    },
    {
      percentage: "90%",
      description: "Dancing",
    },
    {
      percentage: "95%",
      description: "Performing",
    },
    {
      percentage: "100%",
      description: "Beauty",
    },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex size-10 items-center justify-center rounded-lg dark:bg-white/5 bg-black/5 mb-6 border-2">
          <Zap aria-hidden="true" className="size-6 text-purple-600" />
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold text-center mx-auto max-w-md">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Dua lipa{" "}
          </span>{" "}
          is the best singer in the world
        </h1>
        <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic
          explicabo.
        </p>
      </div>
      <div className="mt-10 md:mt-14 block md:flex justify-between gap-14 space-y-6 md:space-y-0 mx-auto max-w-3xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-0.5 h-28 bg-gradient-to-b from-transparent via-purple-600 to-transparent" />
            <div>
              <div className="text-lg md:text-3xl">{stat.percentage}</div>
              <div className="mt-2 text-neutral-600 dark:text-zinc-300 max-w-36">
                {stat.description}
              </div>
              <div className="flex items-center gap-2 cursor-pointer group mt-3">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
