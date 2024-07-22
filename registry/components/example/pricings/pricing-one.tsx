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
      <div className="text-center text-blue-600 text-sm font-semibold">
        PRICING
      </div>
      <h1 className="text-center text-2xl font-semibold leading-tight my-5">
        Predictable pricing, designed to scale
      </h1>
      <p className="text-center text-sm font-medium leading-4 max-w-lg mx-auto text-gray-700 dark:text-gray-300">
        Our pricing is designed to scale with your business. Our plans have no
        hidden fees, and we never take a cut of your sales.
      </p>

      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="w-full shadow-sm rounded-2xl flex mx-auto flex-col mt-6"
          >
            <div className="space-y-4 w-full mt-4">
              <p className="text-lg font-semibold">{plan.name.toUpperCase()}</p>

              <p className="font-semibold text-4xl">
                <span>{plan.sellingPrice.monthly}</span>
                <span className="text-gray-700 dark:text-gray-300 text-base">
                  /mo
                </span>
              </p>
            </div>
            <button className="w-full py-2 bg-gradient-to-t from-blue-500 to-blue-600 text-white hover:bg-lp2-primary rounded-lg my-5">
              Buy Now
            </button>

            <hr className="border-gray-300 dark:border-gray-700" />

            <ul role="list" className="space-y-3 mt-6">
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
