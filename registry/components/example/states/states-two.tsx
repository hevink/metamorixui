import React, { ReactNode } from "react";

interface StepItemProps {
  number: number;
  children: ReactNode;
}

const Steps = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:py-16 lg:pb-32 relative max-w-7xl">
      <div className="grid sm:grid-cols-4 gap-y-8">
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
  <div className="relative group">
    <div
      className="absolute h-px hidden sm:block group-last:hidden top-[20px] left-[calc(50%+20px)] w-[calc(100%-40px)]"
      style={{
        backgroundImage: "linear-gradient(to right, #18181b, #3F3F46, #18181b)",
      }}
    ></div>
    <div className="relative rounded-lg flex items-center justify-center mb-4 size-10 border border-gray-300 shrink-0 mx-auto font-semibold text-gray-900 dark:text-gray-300">
      {number}
    </div>
    <p className="mt-2 text-gray-600 dark:text-gray-400 text-center max-w-48 mx-auto prose prose-primary dark:prose-invert prose-sm">
      {children}
    </p>
  </div>
);

export default Steps;
