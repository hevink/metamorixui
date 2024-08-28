import { Dock, Receipt, ScanSearch, ShieldBan } from "lucide-react";

const features = [
  {
    icon: <ShieldBan />,
    title: "Privacy controls",
    description:
      "Track users without cookies, anonymize users, configure a reverse proxy",
    color: "#b62ad9",
  },
  {
    icon: <Dock />,
    title: "Choose your hosting location",
    description: "Store user data in the US or EU depending on your needs",
    color: "#30abc6",
  },
  {
    icon: <ScanSearch />,
    title: "Full access to customer data",
    description: "API offers total access to customer and event data",
    color: "#eb9d2a",
  },
  {
    icon: <Receipt />,
    title: "Check out the source code",
    description:
      "Audit the entire PostHog codebase on GitHub for compliance or just peace of mind",
    color: "#2f80fa",
  },
];

const cloudOptions = [
  {
    flagSrc:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/us.svg",
    altText: "US Flag",
    title: "US Cloud",
    location: "Hosted in Virginia",
  },
  {
    flagSrc:
      "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/eu.svg",
    altText: "EU Flag",
    title: "EU Cloud",
    location: "Hosted in Frankfurt",
  },
];

const Feature = () => {
  return (
    <section className="mb-24 mt-12">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="m-0 mb-6 text-center text-4xl font-bold sm:mb-10 sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Full control
          </span>{" "}
          of your customer data
        </h2>
        <div className="flex justify-center">
          <ul className="relative m-0 inline-grid list-none justify-evenly p-0 before:absolute before:left-1/2 before:top-0 before:hidden before:h-full after:absolute after:left-0 after:top-1/2 after:hidden after:w-full sm:grid-cols-2 sm:before:block sm:after:block">
            {features.map((feature, index) => (
              <li
                key={index}
                className="relative py-4 pl-16 pr-2 md:max-w-md md:py-8 md:pl-20 md:pr-6"
              >
                <span className="top-4.5 md:top-6.5 dark:text-primary-dark absolute left-4 inline-block text-primary opacity-60 md:left-8">
                  {feature.icon}
                </span>
                <h5
                  className="mb-2 text-lg font-bold leading-none"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h5>
                <p className="opacity-75">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-12 lg:mt-8">
          <div className="relative mx-auto mb-6 grid w-full max-w-md grid-cols-2 lg:top-10 lg:mb-0">
            {cloudOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 md:space-x-6"
              >
                <img
                  width={33}
                  src={option.flagSrc}
                  alt={option.altText}
                  className="inline-block"
                />
                <div>
                  <h6 className="text-base leading-none">{option.title}</h6>
                  <p className="text-sm md:text-[15px]">{option.location}</p>
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
