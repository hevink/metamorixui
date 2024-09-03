import { ArrowRight, FileText, LayoutDashboard, User } from "lucide-react";

const features = [
  {
    title: "Real-Time Analytics",
    description: "Get insights into your data with real-time analytics.",
    icon: User,
  },
  {
    title: "User Management",
    description: "Manage user accounts and permissions with ease.",
    icon: User,
  },
  {
    title: "Customizable Dashboards",
    description: "Create and customize dashboards to suit your needs.",
    icon: LayoutDashboard,
  },
  {
    title: "Automated Reports",
    description: "Generate and schedule automated reports.",
    icon: FileText,
  },
];

const Feature = () => {
  return (
    <div className="py-10">
      <p className="mb-4 text-sm text-orange-500 sm:text-lg md:text-4xl">
        Features
      </p>
      <h2 className="mb-2 text-2xl font-bold">
        Ham teen bhai teeno tabaahi Sherrrrrr
      </h2>
      <p className="text mb-8 max-w-xl text-slate-600 dark:text-slate-400">
        Discover the power of our platform with these cutting-edge features
        designed to streamline your workflow and enhance productivity
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-md border bg-black/5 p-4 dark:bg-white/5"
          >
            <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-orange-600">
              <feature.icon aria-hidden="true" className="size-6 text-white" />
            </div>
            <p className="mb-2 text-lg font-semibold leading-7">
              {feature.title}
            </p>
            <p className="mb-3 text-base leading-7 text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
            <div className="group flex cursor-pointer items-center gap-2">
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
