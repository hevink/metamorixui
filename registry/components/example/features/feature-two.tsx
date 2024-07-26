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
      <p className="text-sm text-orange-500 mb-4">Features</p>
      <h2 className="text-2xl font-bold mb-2">
        Ham teen bhai teeno tabaahi Sherrrrrr
      </h2>
      <p className="max-w-xl mb-8 text text-slate-600 dark:text-slate-400">
        Discover the power of our platform with these cutting-edge features
        designed to streamline your workflow and enhance productivity
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 border bg-black/5 dark:bg-white/5 rounded-md"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-orange-600 mb-6">
              <feature.icon aria-hidden="true" className="size-6 text-white" />
            </div>
            <p className="text-lg font-semibold leading-7 mb-2">
              {feature.title}
            </p>
            <p className="text-base leading-7 text-gray-600 dark:text-gray-400 mb-3">
              {feature.description}
            </p>
            <div className="flex items-center gap-2 cursor-pointer group">
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
