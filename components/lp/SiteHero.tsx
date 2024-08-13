import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const SiteHero = () => {
  return (
    <section className="relative" id="hero">
      <div>
        <div className="absolute inset-0 -z-10 h-[400px] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]" />
        <div className="flex h-full flex-col items-center justify-center pt-20">
          <button className="group relative grid overflow-hidden rounded-full border bg-[#f2f2f2] px-4 py-1 transition-colors duration-200 dark:bg-[#161617]">
            <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm">
              ✨ Introducing Metamorix UI
              <ChevronRight className="size-4" />
            </span>
          </button>

          <div className="mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
            <h1 className="lg:textxl bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-gray-50 dark:to-gray-300 md:text-6xl md:!leading-snug">
              Build your dream website in few minutes
            </h1>
            <p className="mt-6 text-center text-base text-gray-700 dark:text-gray-300 md:text-lg">
              Trust me when I say this, Metamorix UI is the best way to build
              your next website. It's fast, reliable, and easy to use. You can
              build your dream website in minutes.
            </p>
            <div className="relative mt-8 flex w-full items-center justify-center md:mt-12">
              <Link
                href="/docs/components/hero"
                className="shadow-3xl flex w-max cursor-pointer select-none items-center justify-center gap-2 rounded-full border-t border-foreground/30 bg-black/10 px-2 py-1 shadow-background/40 backdrop-blur-lg dark:bg-white/20 md:gap-8 md:py-2"
              >
                <p className="px-4 text-center text-sm font-medium text-foreground md:text-base lg:pr-0">
                  ✨ {"  "} Start building your dream website now!
                </p>
                <button className="group relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-x-2 border-b-2 border-blue-700 bg-gradient-to-tr from-blue-600 to-violet-500 px-4 py-1 text-white shadow-lg transition duration-100 ease-in-out active:translate-y-0.5 active:border-blue-600 active:shadow-none">
                  <span className="absolute size-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:size-36"></span>
                  <span className="relative flex items-center font-medium ">
                    {" "}
                    Get Started
                    <ArrowRight className="ml-1 size-4" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteHero;
