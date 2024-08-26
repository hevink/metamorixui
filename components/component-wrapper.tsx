import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div className={cn("bg-background p-0 md:border md:p-10", className)}>
      {children}
    </div>
  );
};

export default ComponentWrapper;
