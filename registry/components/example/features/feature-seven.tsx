import { ReactNode } from "react";

interface StepItemProps {
  number: number;
  children: ReactNode;
}

const feature = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-y-8 sm:grid-cols-4">
        <StepItem number={1}>
          Log in with your <strong>GitHub account</strong>
        </StepItem>
        <StepItem number={2}>
          Install our <strong>GitHub app</strong> and import your repositories
        </StepItem>
        <StepItem number={3}>
          Browse your <strong>repositories</strong> and start working on{" "}
          <strong>issues</strong>
        </StepItem>
        <StepItem number={4}>
          Work in <strong>real-time</strong> with your team on your{" "}
          <strong>projects</strong>
        </StepItem>
      </div>
    </div>
  );
};

const StepItem: React.FC<StepItemProps> = ({ number, children }) => (
  <div className="group relative">
    <div className="absolute left-[calc(50%+20px)] top-[20px] hidden h-px w-[calc(100%-40px)] bg-gradient-to-r from-[#e5e7eb] via-[#9ca3af] to-[#e5e7eb] group-last:hidden dark:from-[#18181b] dark:via-[#3F3F46] dark:to-[#18181b]  sm:block"></div>

    <div className="relative mx-auto mb-4 flex size-10 shrink-0 items-center justify-center rounded-lg border border-gray-300 font-semibold text-gray-900 dark:border-neutral-600 dark:text-gray-300">
      {number}
    </div>
    <p className="prose-primary prose prose-sm mx-auto mt-2 max-w-48 text-center text-gray-600 dark:prose-invert dark:text-gray-400">
      {children}
    </p>
  </div>
);

export default feature;
