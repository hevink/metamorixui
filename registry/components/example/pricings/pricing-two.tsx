import { useRef, useState } from "react";
import confetti from "canvas-confetti";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    description: "For hobby & side projects",
    monthlyPrice: 79,
    annualPrice: 59,
    link: "https://github.com/hevink",
    features: [
      "Website Optimization",
      "Keyword Tracking",
      "Content Creation",
      "Google Analytics Integration",
      "Social Media Integration",
      "Mobile SEO",
      "Multi-language Support",
    ],
  },
  {
    name: "Growth",
    description: "For growing businesses",
    monthlyPrice: 349,
    annualPrice: 249,
    link: "https://github.com/hevink",
    features: [
      "All features in Starter plan",
      "Advanced Keyword Research",
      "Content Marketing",
      "Local SEO Strategies",
      "Priority Support",
      "Performance Reports",
    ],
  },
  {
    name: "Enterprise",
    description: "For large companies",
    monthlyPrice: 2999,
    annualPrice: 1999,
    link: "https://github.com/hevink",
    features: [
      "All features in Growth plan",
      "Unlimited Content Marketing",
      "Custom SEO Solutions",
      "Dedicated Account Manager",
      "24/7 Support",
      "Training & Workshops",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsYearly((prev) => !prev);

    if (switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top;

      !isYearly &&
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        });
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto space-y-6 text-center sm:max-w-lg">
        <h1 className="text-2xl font-bold md:text-5xl">
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Straightforward,
          </span>{" "}
          affordable pricing
        </h1>
        <p className="mx-auto text-xl text-gray-600 dark:text-gray-300 sm:max-w-96">
          Find a plan that fits your needs. Start for free, no credit card
          required.
        </p>
      </div>

      <div className="mb-12 mt-8 flex items-center justify-center space-x-4">
        <span
          className={cn(
            "text-lg",
            !isYearly
              ? "font-bold text-blue-600"
              : "text-gray-600 dark:text-gray-400",
          )}
        >
          Monthly
        </span>
        <Switch
          className="!bg-blue-600"
          checked={isYearly}
          onCheckedChange={handleToggle}
          ref={switchRef}
        />
        <span
          className={cn(
            "text-lg",
            isYearly
              ? "font-bold text-blue-600"
              : "text-gray-600 dark:text-gray-400",
          )}
        >
          Yearly
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative rounded-2xl shadow-lg",
              plan.name === "Growth" &&
                "border-2 border-blue-500 shadow-blue-200 dark:shadow-stone-800",
            )}
          >
            {plan.name === "Growth" && (
              <div className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-center text-sm font-medium text-white">
                Popular
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center space-x-2">
                <div
                  className={cn(
                    "size-5 rounded-full",
                    plan.name === "Starter" && "bg-black dark:bg-white",
                    plan.name === "Growth" && "bg-blue-500",
                    plan.name === "Enterprise" && "bg-sky-900",
                  )}
                />
                <h3
                  className={cn(
                    "font-display text-2xl font-bold",
                    plan.name !== "Enterprise" && "text-black dark:text-white",
                  )}
                >
                  {plan.name}
                </h3>
              </div>
              <p className="mt-2">{plan.description}</p>
              <div className="my-4 flex items-end gap-2">
                <p className="font-display text-5xl font-semibold">
                  ${isYearly ? plan.annualPrice : plan.monthlyPrice}
                </p>
                <div className="flex items-center justify-between">
                  <p>{isYearly ? "/per year" : "/per month"}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center border-y px-8 py-5">
              <a
                href={plan.link}
                className={cn(
                  "w-full rounded-full py-2 text-center font-medium text-white",
                  plan.name === "Starter" &&
                    "bg-black hover:bg-gray-800 dark:bg-gray-700",
                  plan.name === "Growth" && "bg-blue-500 hover:bg-blue-600",
                  plan.name === "Enterprise" && "bg-sky-900 hover:bg-sky-800",
                )}
              >
                Get started
              </a>
            </div>
            <h4 className="mt-7 px-8 font-medium">What's included:</h4>
            <ul className="mb-10 mt-5 space-y-5 px-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex space-x-4">
                  <svg
                    className={cn(
                      "size-6 flex-none",
                      plan.name === "Starter" &&
                        "text-black dark:text-gray-700",
                      plan.name === "Growth" && "text-blue-500",
                      plan.name === "Enterprise" && "text-sky-900",
                    )}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8 11.8571L10.5 14.3572L15.8572 9"
                      stroke={cn(
                        plan.name === "Starter" && "white",
                        plan.name === "Growth" && "white",
                        plan.name === "Enterprise" && "white",
                      )}
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
