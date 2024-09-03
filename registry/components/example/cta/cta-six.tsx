const CTA = () => {
  return (
    <section className="relative flex flex-col items-center overflow-hidden py-20">
      <span className="pointer-events-none absolute top-0 block aspect-square w-[250%] rounded-full shadow-[0px_0px_16px_0px_rgba(0,0,0,0.40)_inset,0px_0px_80px_0px_rgba(0,0,0,0.6)_inset,0px_0px_160px_0px_rgba(0,0,0,0.2)_inset] dark:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.40)_inset,0px_0px_80px_0px_rgba(255,255,255,0.6)_inset,0px_0px_160px_0px_rgba(255,255,255,0.2)_inset]" />
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto flex flex-col items-center pt-10 text-center lg:max-w-2xl">
            <h2 className="max-w-md text-balance text-3xl font-bold leading-tight sm:max-w-2xl sm:text-4xl lg:max-w-3xl lg:text-5xl xl:max-w-4xl">
              Build your project with{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                metamorix ui{" "}
              </span>{" "}
              in minutes
            </h2>
            <div className="mt-8 inline-flex items-center gap-2 sm:gap-3 lg:mt-8">
              <button className="group h-10 select-none rounded-lg bg-blue-600 px-4 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]">
                <span className="block group-active:[transform:translate3d(0,1px,0)]">
                  Start building for free
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
