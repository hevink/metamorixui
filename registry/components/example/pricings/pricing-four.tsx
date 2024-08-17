"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const SELECTED_PLAN_BAR_LAYOUT_ID = "selected-plan-bar";

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    description: "For small teams and individuals with basic needs.",
    features: [
      "5 standard documents per month",
      "Up to 10 recipients per document",
      "Basic e-signature features",
      "Email support",
      "No credit card required",
    ],
    buttonText: "Start for free",
    buttonLink: "#",
    highlight: false,
  },
  {
    name: "Professional",
    monthlyPrice: "$30",
    yearlyPrice: "$300",
    description: "Everything you need for a great signing experience.",
    features: [
      "Unlimited documents per month",
      "Unlimited recipients",
      "Advanced e-signature features",
      "API Access (100 calls/day)",
      "Template library (20 templates)",
      "Advanced analytics",
      "Email and chat support",
      "Premium profile name",
    ],
    buttonText: "Buy now",
    buttonLink: "#",
    highlight: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "Tailored solutions for large organizations.",
    features: [
      "All Business features",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
      "Advanced security features",
      "Custom reporting",
      "SLA guarantees",
    ],
    buttonText: "Contact sales",
    buttonLink: "#",
    highlight: false,
  },
];

const Pricing = () => {
  const [period, setPeriod] = useState<"MONTHLY" | "YEARLY">("MONTHLY");

  return (
    <section className="my-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold lg:text-5xl">Pricing</h1>

        <p className="mx-auto mt-4 max-w-sm text-lg leading-normal text-gray-600 dark:text-gray-300">
          Designed for every stage of your journey. Get started today.
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-x-6">
        <AnimatePresence>
          <motion.button
            key="MONTHLY"
            className={`relative flex items-center gap-x-2.5 px-1 py-2.5 ${
              period === "MONTHLY"
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => setPeriod("MONTHLY")}
          >
            Monthly
            {period === "MONTHLY" && (
              <motion.div
                layoutId={SELECTED_PLAN_BAR_LAYOUT_ID}
                className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-orange-600"
              />
            )}
          </motion.button>

          <motion.button
            key="YEARLY"
            className={`relative flex items-center gap-x-2.5 px-1 py-2.5 ${
              period === "YEARLY"
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            onClick={() => setPeriod("YEARLY")}
          >
            Yearly
            <div className="block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-900 dark:bg-neutral-800 dark:text-white">
              Save up to 20%
            </div>
            {period === "YEARLY" && (
              <motion.div
                layoutId={SELECTED_PLAN_BAR_LAYOUT_ID}
                className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-orange-600"
              />
            )}
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-start rounded-lg ${
              tier.highlight
                ? "border-2 shadow-[0px_0px_0px_3px_#ea580c]"
                : "border shadow-lg"
            }  px-8 py-12`}
          >
            <p className="text-4xl font-medium">{tier.name}</p>
            <div className="mt-2.5 text-xl font-medium text-orange-500">
              <AnimatePresence mode="wait">
                {period === "MONTHLY" && (
                  <motion.div layoutId={`pricing-${index}`}>
                    {tier.monthlyPrice}
                  </motion.div>
                )}
                {period === "YEARLY" && (
                  <motion.div layoutId={`pricing-${index}`}>
                    {tier.yearlyPrice}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="mt-4 max-w-[30ch] text-center ">{tier.description}</p>

            <button className="group mt-8 flex h-10 w-full items-center justify-center rounded-md border border-orange-600 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 px-4 text-neutral-50 shadow-[inset_0_1px_0px_0px_#fdba74] active:[box-shadow:none]">
              <span className="block group-active:[transform:translate3d(0,1px,0)]">
                <Link href={tier.buttonLink} target="_blank">
                  {tier.buttonText}
                </Link>
              </span>
            </button>

            <div className="mt-8 flex w-full flex-col divide-y">
              {tier.features.map((feature, featureIndex) => (
                <p key={featureIndex} className="py-4">
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
