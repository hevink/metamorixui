import React from "react";
import { motion } from "framer-motion";

const FeatureList = () => {
  const FEATURES = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Lightning-quick load times for a smooth user experience.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Sleek and modern interface thats a pleasure to use.",
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Simple to set up and integrate with your existing systems.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Top-notch security to keep your data safe and protected.",
    },
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Lightning-quick load times for a smooth user experience.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Sleek and modern interface thats a pleasure to use.",
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Simple to set up and integrate with your existing systems.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Top-notch security to keep your data safe and protected.",
    },
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Lightning-quick load times for a smooth user experience.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Sleek and modern interface thats a pleasure to use.",
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Simple to set up and integrate with your existing systems.",
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Simple to set up and integrate with your existing systems.",
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Simple to set up and integrate with your existing systems.",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {FEATURES.map((feature, index) => (
        <motion.div
          key={index}
          className="feature-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <motion.div className="icon-container" transition={{ duration: 0.5 }}>
            {feature.icon}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureList;
