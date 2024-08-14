import { ArrowRight } from "lucide-react";

const Badge = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="inline-flex items-center rounded-full border border-violet-600 bg-violet-100 dark:bg-violet-500/20 p-1">
        <span className="text-sm px-2">Introducing Metamorix UI 🐬</span>
        <a href="#" className="flex items-center justify-center gap-1 rounded-full border border-violet-600 bg-violet-100 dark:bg-violet-500/20 px-3 py-1 text-sm font-semibold cursor-pointer">
          Get started
          <ArrowRight size={16} className="ml-px" />
        </a>
      </div>
    </section>
  );
};

export default Badge;
