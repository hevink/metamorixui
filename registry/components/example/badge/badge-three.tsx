import { ArrowRight } from "lucide-react";

const Badge = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="inline-flex items-center rounded-xl border border-neutral-300 bg-gray-200 p-1 dark:border-neutral-700 dark:bg-neutral-900">
        <span className="mx-1 flex size-2 md:mx-3">
          <span className="absolute inline-flex size-2 animate-ping rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-purple-500" />
        </span>
        <span className="text-sm">Introducing Metamorix UI 🐬</span>
        <a
          href="#"
          className="ml-3 flex cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-300 bg-neutral-100 px-1 py-0.5 text-sm dark:border-neutral-700 dark:bg-neutral-500/20"
        >
          Get started
          <ArrowRight size={14} className="ml-px" />
        </a>
      </div>
    </section>
  );
};

export default Badge;
