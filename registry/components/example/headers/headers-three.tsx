import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = ["Home", "About", "Services", "Contact"];

const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="container mx-auto flex items-center justify-between sm:px-4 sm:py-3">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Logo
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
        <div className="md:hidden">
          <motion.button
            className="p-2 text-3xl text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bg-transparent shadow-md md:hidden"
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
