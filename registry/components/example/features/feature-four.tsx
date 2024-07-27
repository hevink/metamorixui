import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CloudUpload } from "lucide-react";

const features = [
  {
    title: "Share team inboxes",
    description:
      "Manage your customer inquiries as a team with shared inboxes.",
    pointers: [
      "Leverage automation to move fast",
      "Always give customers a human to chat to",
      "Automate customer support and close leads faster",
    ],
    image:
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ7KRARgFHaZRwcpcVbJepNUjGu6c18gVI86CKcdYiGl9MWpGGvuoI0GQBWfv8a1ZUPF4asaNmtwxhH9fAkarcoXvihhMKBAg=w1023-h640",
    alt: "Share team inboxes",
    icon: CloudUpload,
  },
  {
    title: "Deliver instant answers",
    description:
      "Provide quick solutions to your customers' queries with instant answers.",
    pointers: [
      "Keep your customers in the loop with live chat",
      "Embed help articles right on your website",
      "Customers never have to leave the page to find an answer",
    ],
    image:
      "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihatMPoFC4SEv7c8l6jQEoAk7INWOCCl0aCRIZWTGhe2wiP-vfw1-l05pHTA1ZjYKvBmenlYVKd8TDb_cI0uCW2StB7OeGDOdw=w1023-h640",
    alt: "Deliver instant answers",
    button: "Learn More",
    icon: CloudUpload,
  },
  {
    title: "Manage your team with reports",
    description:
      "Gain insights and improve team performance with comprehensive reports.",
    pointers: [
      "Filter, export, and drilldown on the data quickly",
      "Save, schedule, and automate reports to your inbox",
      "Connect the tools you already use with 100+ integrations",
    ],
    alt: "Manage your team with reports",
    image:
      "https://lh3.googleusercontent.com/drive-viewer/AKGpihYF41rU0YFrZVX_SsJAU0BVRq9R0qxnTblk9rnR3JxKOYUA00z1oPD7UXeMEWWQaW-xnLgzCDidlPaBLezAf5yVpFrvecki1Q=w1023-h640",
    icon: CloudUpload,
  },
];

const Feature = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="border w-fit border-purple-600 bg-purple-500/10 rounded-full py-0.5 px-2 text-xs mb-3">
            Features
          </motion.div>
          <motion.h1
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Powerful features for your workflow
          </motion.h1>
          <motion.p
            className="text-center max-w-md text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Discover the power of our platform with these cutting-edge features
            designed to streamline your workflow and enhance productivity
          </motion.p>
        </motion.div>

        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeatureItem = ({ feature, index }: { feature: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center mb-12`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: 0.2 * index, duration: 0.5 }}
    >
      <div className="md:w-1/2 md:px-8 mb-6 md:mb-0">
        <motion.div className="shrink-0 mb-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-purple-600">
            <feature.icon aria-hidden="true" className="size-6 text-white" />
          </div>
        </motion.div>
        <motion.h2
          className="text-3xl font-semibold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.3 + 0.2 * index, duration: 0.5 }}
        >
          {feature.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-200 mb-5"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.4 + 0.2 * index, duration: 0.5 }}
        >
          {feature.description}
        </motion.p>
        <ul className="space-y-2 mb-4">
          {feature.pointers.map((pointer: string, i: number) => (
            <motion.li
              key={i}
              className="flex gap-2 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5 + 0.1 * i + 0.2 * index, duration: 0.5 }}
            >
              <svg
                className="text-purple-600"
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
                  stroke="white"
                  strokeWidth="2"
                ></path>
              </svg>
              <span className="text-gray-600 dark:text-gray-300">
                {pointer}
              </span>
            </motion.li>
          ))}
        </ul>
        {feature.button && (
          <motion.button
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {feature.button}
          </motion.button>
        )}
      </div>
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ delay: 0.6 + 0.2 * index, duration: 0.5 }}
      >
        <img
          src={feature.image}
          alt={feature.alt}
          className="rounded-lg shadow-md w-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default Feature;
