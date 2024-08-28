import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
  {
    question: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!",
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field!",
  },
  {
    question: "What do you get if you cross a snowman and a vampire?",
    answer: "Frostbite.",
  },
  {
    question: "Why do programmers prefer dark mode?",
    answer: "Because the light attracts bugs!",
  },
  {
    question: "How many programmers does it take to change a light bulb?",
    answer: "None, that's a hardware problem.",
  },
  {
    question: "Why did the developer go broke?",
    answer: "Because he lost his domain in a bet!",
  },
  {
    question: "Why did the programmer quit his job?",
    answer: "Because he didn't get arrays!",
  },
  {
    question: "Why did the bicycle fall over?",
    answer: "Because it was two-tired!",
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 dark:border-[#27272a]">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <div>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="size-5 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600 dark:text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="mx-auto max-w-2xl sm:p-4">
      <h1 className="mb-4 bg-gradient-to-b from-[#434343] to-[#494949] bg-clip-text text-center text-3xl font-bold text-[#F4FFFA00] dark:from-[#fafafa] dark:to-[#b4b4b4]">
        Frequently asked questions
      </h1>
      <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
        Need help with something? Here are our most frequently asked questions.
      </p>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
