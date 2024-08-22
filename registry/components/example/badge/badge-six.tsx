const Badge = () => {
  return (
    <div className="my-4 flex items-center justify-center">
      <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_90%)] transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)]">
        <span>
          <span className="spark mask-gradient absolute inset-0 size-full animate-flipper overflow-hidden rounded-full [mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:-rotate-90 before:animate-rotater before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%] dark:[mask:linear-gradient(white,_transparent_50%)] dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]" />
        </span>
        <span className="backdrop absolute inset-px rounded-full bg-neutral-50 transition-colors duration-200 group-hover:bg-neutral-200 dark:bg-neutral-900 dark:group-hover:bg-neutral-800" />
        <span className="z-10 py-0.5 text-sm text-neutral-900 dark:text-neutral-100">
          Introducing Metamorix UI 🐬
        </span>
      </button>
    </div>
  );
};

export default Badge;

/* 
  tailwind.config.ts
  
  ...
  extend: {
    animation: {
      flip: "flip 6s infinite steps(2, end)",
      rotate: "rotate 3s linear infinite both",
    },
    keyframes: {
      flipper: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      rotater: {
        to: {
          transform: "rotate(90deg)",
        },
      },
    },
  }
  */
