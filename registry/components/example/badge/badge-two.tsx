import { ArrowRight } from "lucide-react";

const Badge = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="inline-flex items-center rounded-full border border-violet-600 bg-violet-100 p-1 dark:bg-violet-500/20">
        <span className="px-2 text-sm">Introducing Metamorix UI 🐬</span>
        <a
          href="#"
          className="flex cursor-pointer items-center justify-center gap-1 rounded-full border border-violet-600 bg-violet-100 px-3 py-1 text-sm font-semibold dark:bg-violet-500/20"
        >
          <span className="hidden sm:block">Get started</span>
          <ArrowRight size={16} className="ml-px" />
        </a>
      </div>
    </section>
  );
};

export default Badge;
