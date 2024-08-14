"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const frequency = frequencies[1];

  const [toggleProYear, setToggleProYear] = useState<boolean>(true);
  const [toggleBusinessYear, setToggleBusinessYear] = useState<boolean>(true);
  const [toggleDataroomsYear, setToggleDataroomsYear] = useState<boolean>(true);
  const [frequencyPro, setFrequencyPro] = useState(frequencies[0]);
  const [frequencyBusiness, setFrequencyBusiness] = useState(frequencies[0]);
  const [frequencyDatarooms, setFrequencyDatarooms] = useState(frequencies[0]);

  useEffect(() => {
    if (toggleProYear) {
      setFrequencyPro(frequencies[1]);
    } else {
      setFrequencyPro(frequencies[0]);
    }

    if (toggleBusinessYear) {
      setFrequencyBusiness(frequencies[1]);
    } else {
      setFrequencyBusiness(frequencies[0]);
    }
    if (toggleDataroomsYear) {
      setFrequencyDatarooms(frequencies[1]);
    } else {
      setFrequencyDatarooms(frequencies[0]);
    }
  }, [toggleProYear, toggleBusinessYear, toggleDataroomsYear]);

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold lg:text-5xl">Pricing</h1>

        <p className="mx-auto mt-4 max-w-sm text-lg leading-normal text-gray-600 dark:text-gray-300">
          Designed for every stage of your journey. Get started today.
        </p>
      </div>
      <div className="isolate grid grid-cols-1 overflow-hidden rounded-xl border md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between border-r-0 md:odd:border-r xl:last:!border-r-0 xl:even:border-r"
          >
            <div>
              <div className="border-b bg-gray-100 p-6 dark:bg-neutral-800/10">
                <h3
                  id={tier.id}
                  className="text-balance text-xl leading-8 text-gray-900 dark:text-white"
                >
                  {tier.name}
                </h3>
              </div>
              <div className="p-6">
                <div className="mt-2 min-h-20">
                  {tier.id === "tier-free" ? (
                    <div className="min-h-12">
                      <div className="flex flex-col text-sm">
                        <div className="h-6"></div>
                        <h4>No credit card required</h4>
                      </div>
                    </div>
                  ) : null}
                  {tier.id === "tier-pro" ? (
                    <div className="min-h-12">
                      <Switch
                        className="!bg-orange-600"
                        checked={toggleProYear}
                        onCheckedChange={() => setToggleProYear(!toggleProYear)}
                      />
                      <div className="mb-1 flex items-center gap-x-1 text-sm">
                        <span
                          className={cn(
                            toggleProYear
                              ? "text-gray-400"
                              : "text-black dark:text-white",
                          )}
                        >
                          Monthly
                        </span>
                        <span>|</span>
                        <span
                          className={cn(
                            toggleProYear
                              ? "text-black dark:text-white"
                              : "text-gray-400",
                          )}
                        >
                          Annually
                        </span>
                      </div>
                      <div
                        className={cn(
                          "relative w-fit rounded-3xl border border-gray-900 px-1.5 py-0.5 text-xs uppercase text-gray-900 dark:border-gray-400 dark:text-white",
                          !toggleProYear &&
                            "border-gray-400 text-gray-400 opacity-40",
                        )}
                      >
                        <span
                          className={cn(
                            !toggleProYear
                              ? "absolute top-1/2 h-px w-[90%] bg-gray-400"
                              : "hidden",
                          )}
                        />
                        35% Saving
                      </div>
                    </div>
                  ) : null}
                  {tier.id === "tier-business" ? (
                    <div className="min-h-12">
                      <Switch
                        className="!bg-orange-600"
                        checked={toggleBusinessYear}
                        onCheckedChange={() =>
                          setToggleBusinessYear(!toggleBusinessYear)
                        }
                      />
                      <div className="mb-1 flex items-center gap-x-1 text-sm">
                        <span
                          className={cn(
                            toggleBusinessYear
                              ? "text-gray-400"
                              : "text-black dark:text-white",
                          )}
                        >
                          Monthly
                        </span>
                        <span>|</span>
                        <span
                          className={cn(
                            toggleBusinessYear
                              ? "text-black dark:text-white"
                              : "text-gray-400",
                          )}
                        >
                          Annually
                        </span>
                      </div>
                      <div
                        className={cn(
                          "relative w-fit rounded-3xl border border-[#fb7a00] px-1.5 py-0.5 text-xs uppercase text-[#fb7a00]",
                          !toggleBusinessYear &&
                            "border-gray-400 text-gray-400 opacity-40",
                        )}
                      >
                        <span
                          className={cn(
                            !toggleBusinessYear
                              ? "absolute top-1/2 h-px w-[90%] bg-gray-400"
                              : "hidden",
                          )}
                        />
                        43% Saving
                      </div>
                    </div>
                  ) : null}
                  {tier.id === "tier-datarooms" ? (
                    <div className="min-h-12">
                      <Switch
                        className="!bg-orange-600"
                        checked={toggleDataroomsYear}
                        onCheckedChange={() =>
                          setToggleDataroomsYear(!toggleDataroomsYear)
                        }
                      />
                      <div className="mb-1 flex items-center gap-x-1 text-sm">
                        <span
                          className={cn(
                            toggleDataroomsYear
                              ? "text-gray-400"
                              : "text-black dark:text-white",
                          )}
                        >
                          Monthly
                        </span>
                        <span>|</span>
                        <span
                          className={cn(
                            toggleDataroomsYear
                              ? "text-black dark:text-white"
                              : "text-gray-400",
                          )}
                        >
                          Annually
                        </span>
                      </div>
                      <div
                        className={cn(
                          "relative w-fit rounded-3xl border border-[#fb7a00] px-1.5 py-0.5 text-xs uppercase text-[#fb7a00]",
                          !toggleDataroomsYear &&
                            "border-gray-400 text-gray-400 opacity-40",
                        )}
                      >
                        <span
                          className={cn(
                            !toggleDataroomsYear
                              ? "absolute top-1/2 h-px w-[90%] bg-gray-400"
                              : "hidden",
                          )}
                        />
                        50% Saving
                      </div>
                    </div>
                  ) : null}
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className="text-balance text-4xl font-medium text-gray-900 dark:text-white"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {tier.id === "tier-pro"
                      ? tier.price[frequencyPro.value]
                      : tier.id === "tier-business"
                        ? tier.price[frequencyBusiness.value]
                        : tier.id === "tier-datarooms"
                          ? tier.price[frequencyDatarooms.value]
                          : tier.price[frequency.value]}
                  </span>
                </p>
                <p className="mt-6 text-balance text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  <li>{tier.featureIntro}</li>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-[#fb7a00]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6">
              <Link href={tier.href}>
                {tier.id === "tier-business" ? (
                  <button className="w-full rounded-3xl bg-orange-600 px-3 py-2 text-base text-white hover:bg-orange-500">
                    {tier.buttonText}
                  </button>
                ) : (
                  <button className="w-full rounded-3xl bg-black px-3 py-2 text-base text-white hover:bg-gray-900 dark:bg-white dark:text-black">
                    {tier.buttonText}
                  </button>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

const frequencies: {
  value: "monthly" | "annually";
  label: "Monthly" | "Annually";
  priceSuffix: "/month" | "/month";
}[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/month" },
];

const tiers: {
  name: string;
  id: string;
  href: string;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  featureIntro: string;
  features: string[];
  bgColor: string;
  borderColor: string;
  textColor: string;
  buttonText: string;
  mostPopular: boolean;
}[] = [
  {
    name: "Free",
    id: "tier-free",
    href: "/#",
    price: { monthly: "€0", annually: "€0" },
    description: "Basic tools for personal project management.",
    featureIntro: "Core features:",
    features: [
      "Single user access",
      "5 active projects",
      "Basic task tracking",
      "Weekly progress reports",
      "Mobile app access",
    ],
    bgColor: "bg-gray-200",
    borderColor: "#bg-gray-800",
    textColor: "#bg-gray-800",
    buttonText: "Start for free",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "/#",
    price: { monthly: "€39", annually: "€25" },
    description: "Advanced features for freelancers and small teams.",
    featureIntro: "All Free features, plus:",
    features: [
      "5 team members",
      "Unlimited projects",
      "Advanced reporting",
      "Time tracking",
    ],
    bgColor: "bg-gray-200",
    borderColor: "#bg-gray-800",
    textColor: "#bg-gray-800",
    buttonText: "Choose Pro",
    mostPopular: false,
  },
  {
    name: "Business",
    id: "tier-business",
    href: "/#",
    price: { monthly: "€79", annually: "€45" },
    description: "Comprehensive solution for growing businesses.",
    featureIntro: "All Pro features, plus:",
    features: [
      "20 team members",
      "Resource management",
      "Custom workflows",
      "Priority support",
      "Client portal",
      "Integrations",
      "Advanced security",
      "Team training",
      "Dedicated account manager",
    ],
    bgColor: "#fb7a00",
    borderColor: "#fb7a00",
    textColor: "#black",
    buttonText: "Choose Business",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-datarooms",
    href: "/#",
    price: { monthly: "€199", annually: "€99" },
    description: "Tailored solutions for large organizations.",
    featureIntro: "All Business features, plus:",
    features: [
      "Unlimited team members",
      "Custom development",
      "On-premise deployment option",
      "Advanced analytics",
      "Multi-team management",
      "Enterprise-grade security",
      "SLA guarantees",
      "24/7 premium support",
      "Dedicated success manager",
    ],
    bgColor: "bg-gray-200",
    borderColor: "#bg-gray-800",
    textColor: "#bg-gray-800",
    buttonText: "Contact Sales",
    mostPopular: false,
  },
];
