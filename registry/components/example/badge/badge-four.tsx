import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Badge = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-200 p-1 dark:border-neutral-700 dark:bg-neutral-900">
        <span className="ml-0.5 flex items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 p-1.5 font-sans text-[9px] font-semibold uppercase leading-none tracking-widest dark:border-neutral-700 dark:bg-neutral-900">
          New
        </span>
        <motion.span
          initial={{ "--x": "100%" } as any}
          animate={{ "--x": "-100%" } as any}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "linear",
          }}
          className="px-2 text-sm [mask-image:linear-gradient(-75deg,#8a2be2_calc(var(--x)_+_20%),transparent_calc(var(--x)_+_30%),#8a2be2_calc(var(--x)_+_100%))] dark:[mask-image:linear-gradient(-75deg,#6c63ff_calc(var(--x)_+_20%),transparent_calc(var(--x)_+_30%),#6c63ff_calc(var(--x)_+_100%))]"
        >
          Introducing Metamorix UI 🐬
        </motion.span>
        <a
          href="#"
          className="flex cursor-pointer items-center justify-center gap-1 rounded-full border border-neutral-300 bg-neutral-100 p-1 dark:border-neutral-700 dark:bg-neutral-500/20"
        >
          <ArrowRight size={16} className="ml-px" />
        </a>
      </div>
    </section>
  );
};

export default Badge;
