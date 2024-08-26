import { Dog, Heart, Lock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative block items-center overflow-hidden md:flex">
      <div className="w-full p-4 md:w-1/2">
        <img
          src="https://ui.metamorix.com/bg-grid.png"
          className="absolute inset-0 -z-50"
          alt="Hero"
          width={600}
          height={600}
        />
        <h1 className="text-center text-2xl font-bold md:text-left md:text-4xl lg:text-5xl">
          Build Your{" "}
          <span className="bg-gradient-to-r from-lime-500 via-lime-500 to-cyan-600 bg-clip-text text-transparent">
            {" "}
            Fking{" "}
          </span>{" "}
          Website in minutes
        </h1>
        <p className="mt-5 text-center text-sm md:text-left md:text-base">
          Our platform allows you to receive payment for your NFTs within
          seconds. Trading digital assets has never been more efficient.
        </p>
        <div className="mt-10 flex items-center gap-5">
          <a
            href="#"
            className="rounded-md bg-gradient-to-tr from-[#599D21] to-[#179B7E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Get started
          </a>
          <a href="#" className="underline">
            See how it works?
          </a>
        </div>
        <div className="mt-10 block items-center gap-1 space-y-5 md:flex md:space-y-0">
          <div className="flex items-center gap-2 text-sm">
            <div>
              <Heart className="size-6 text-[#34BC7B]" />
            </div>
            Protect payment gayway
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div>
              <Lock className="size-6 text-[#34BC7B]" />
            </div>
            Easy to use and secure
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div>
              <Dog className="size-6 text-[#34BC7B]" />
            </div>
            24/7 support team
          </div>
        </div>
      </div>

      <div className="relative mt-10 w-full md:mt-0 md:w-1/2">
        <img
          src="https://ui.metamorix.com/dianasour.png"
          className="relative"
          height={600}
          width={600}
          alt="Hero"
        />
        <div
          className="absolute left-1/2 top-1/2 -z-50 h-96
         w-72 -translate-x-1/2 -translate-y-1/2  bg-gradient-to-br from-green-600 to-amber-600 blur-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
