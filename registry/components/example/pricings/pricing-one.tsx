const plans = [
  {
    name: "Free",
    id: "free",
    sellingPrice: { monthly: "$0" },
    features: ["Basic Support", "Community Access", "Public Documentation"],
  },
  {
    name: "Pro",
    id: "pro",
    sellingPrice: { monthly: "$199" },
    features: [
      "Priority Support",
      "Private Repository Access",
      "Customizable Themes",
      "Weekly Updates",
      "Integration with 3rd Party APIs",
    ],
  },
  {
    name: "Ultimate",
    id: "ultimate",
    sellingPrice: { monthly: "$499" },
    features: [
      "Dedicated Support",
      "Advanced Analytics",
      "Customizable Dashboards",
      "24/7 Monitoring",
      "Automated Backups",
      "Role-Based Access Control",
      "Custom Integrations",
      "Unlimited API Requests",
      "Dedicated Account Manager",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="my-10">
      <div className="text-center text-sm font-semibold text-blue-600">
        PRICING
      </div>
      <h1 className="my-5 text-center text-2xl font-semibold leading-tight">
        Predictable pricing, designed to scale
      </h1>
      <p className="mx-auto max-w-lg text-center text-sm font-medium leading-4 text-gray-700 dark:text-gray-300">
        Our pricing is designed to scale with your business. Our plans have no
        hidden fees, and we never take a cut of your sales.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="mx-auto mt-6 flex w-full flex-col rounded-2xl shadow-sm"
          >
            <div className="mt-4 w-full space-y-4">
              <p className="text-lg font-semibold">{plan.name.toUpperCase()}</p>

              <p className="text-4xl font-semibold">
                <span>{plan.sellingPrice.monthly}</span>
                <span className="text-base text-gray-700 dark:text-gray-300">
                  /mo
                </span>
              </p>
            </div>

            <button className="my-5 w-full group h-10 select-none rounded-lg bg-blue-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_#1e3a8a_inset,0_0_0_1px_#1d4ed8_inset,0_0.5px_0_1.5px_#60a5fa_inset] hover:bg-blue-700 active:bg-blue-800 active:shadow-[-1px_0px_1px_0px_rgba(0,0,0,.2)_inset,1px_0px_1px_0px_rgba(0,0,0,.2)_inset,0px_0.125rem_0px_0px_rgba(0,0,0,.6)_inset]">
              <span className="block group-active:[transform:translate3d(0,1px,0)]">
                Buy Now
              </span>
            </button>

            <hr className="border-gray-300 dark:border-gray-700" />

            <ul role="list" className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 font-medium"
                >
                  <span className="size-5">
                    <CheckIcon />
                  </span>

                  <span>{feature}</span>
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

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="size-5 text-blue-600"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
