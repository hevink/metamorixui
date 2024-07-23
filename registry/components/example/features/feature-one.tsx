import React from "react";
import { CloudUpload, Layers, Lock, Shield } from "lucide-react";

const features = [
  {
    name: "Continuous Deployment",
    description:
      "Automate your deployments with a single push. Fast, reliable, and efficient.",
    icon: CloudUpload,
  },
  {
    name: "Enhanced Encryption",
    description:
      "Secure your data with top-tier SSL certificates, ensuring privacy and protection.",
    icon: Shield,
  },
  {
    name: "Effortless Queues",
    description:
      "Manage your tasks seamlessly with our intuitive queue system, built for simplicity.",
    icon: Layers,
  },
  {
    name: "Top-Notch Security",
    description:
      "Protect your application with advanced security measures, keeping threats at bay.",
    icon: Lock,
  },
];

const Feature = () => {
  return (
    <section className="py-10">
      <div className="space-y-5">
        <p className="text-center text-lg font-medium text-blue-600">
          Features
        </p>
        <h2 className="text-xl md:text-3xl text-center font-semibold">
          Everything you need to build your next project
        </h2>
        <div className="text-sm md:text-base max-w-xl text-center mx-auto text-gray-600 dark:text-gray-300">
          Discover our tools and services for streamlined development. Intuitive
          interfaces and robust backend support ensure a seamless deployment.
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-zxl sm:mt-14 lg:mt-16 lg:max-w-4xl">
        <div className="grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex items-start gap-4 p-4 border rounded-xl bg-slate-500/10 dark:bg-slate-700/10  hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <div className="shrink-0">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
              </div>
              <div>
                <div className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300">
                  {feature.name}
                </div>
                <div className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
