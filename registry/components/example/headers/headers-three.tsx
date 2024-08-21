import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between sm:px-4 sm:py-3">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
          <img
            src="https://ui.metamorix.com/favicon.ico"
            className="h-10 w-8"
          />
          <p className="text-base">
            <span className="font-bold">Meta</span>
            morix UI
          </p>
        </div>
        <nav className="hidden space-x-6 md:flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-gray-800 dark:text-gray-200 ${
                activeTab === tab
                  ? "border-b-2 border-orange-500"
                  : "hover:text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mt-4 bg-transparent shadow-md md:hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col items-center">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  className={`w-full px-4 py-2 text-center ${
                    activeTab === tab
                      ? "border-l-4 border-orange-500 bg-orange-50 text-black"
                      : "hover:bg-orange-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setActiveTab(tab);
                    setIsMenuOpen(false);
                  }}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
