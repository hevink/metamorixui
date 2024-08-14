import { ArrowRight } from "lucide-react";

const Badge = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="inline-flex items-center rounded-full border border-neutral-300 bg-gray-200 p-1 pr-3 dark:border-neutral-700 dark:bg-[#1f242f]">
        <span className="mr-2 rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm font-semibold dark:border-neutral-700 dark:bg-[#09090b]">
          New
        </span>
        <span className="text-sm">Introducing Metamorix UI 🐬</span>
        <ArrowRight size={16} className="ml-2" />
      </div>
    </section>
  );
};

export default Badge;
