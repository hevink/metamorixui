import { CloudUpload, Layers, Lock, Shield } from "lucide-react";

const Feature = () => {
  return (
    <section className="pt-10">
      <div className="absolute top-36 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl opacity-40 blur-[200px] -z-50" />
      <h1 className="text-4xl font-semibold text-center mx-auto max-w-md">
        <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Dua lipa{" "}
        </span>{" "}
        is the best singer in the world
      </h1>
      <div className="mt-10 md:mt-20 block md:flex justify-between gap-14 space-y-6 md:space-y-0 mx-auto max-w-xl">
        <div className="flex items-center gap-5">
          <div className="w-0.5 h-14 bg-purple-600" />
          <div className="">
            <div className="">99.99%</div>
            <div className="text-sm text-neutral-600 dark:text-zinc-300">
              guaranteed uptime
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-0.5 h-14 bg-purple-600" />
          <div className="">
            <div className="">99.99%</div>
            <div className="text-sm text-neutral-600 dark:text-zinc-300">
              guaranteed uptime
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-0.5 h-14 bg-purple-600" />
          <div className="">
            <div className="">99.99%</div>
            <div className="text-sm text-neutral-600 dark:text-zinc-300">
              guaranteed uptime
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-24">
        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                style={{
                  background:
                    "radial-gradient(99.75% 99.75% at 50% 99.75%, rgba(30, 41, 59, 0.24) 0%, rgba(15, 23, 42, 2.4e-05) 100%),rgba(0, 0, 0, 0.01)",
                }}
                className="flex items-start gap-4 p-4 border rounded-xl transition-all duration-300 ease-in-out"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <div className="flex size-10 items-center justify-center rounded-full bg-purple-600">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                    </div>
                    <div className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-300">
                      {feature.name}
                    </div>
                  </div>
                  <div className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

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
  {
    name: "Continuous Deployment",
    description:
      "Automate your deployments with a single push. Fast, reliable, and efficient.",
    icon: CloudUpload,
  },
];
