const Badge = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="relative inline-flex overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium backdrop-blur-3xl dark:bg-neutral-900/80">
          Introducing Metamorix UI 🐬
        </span>
      </button>
    </div>
  );
};

export default Badge;
