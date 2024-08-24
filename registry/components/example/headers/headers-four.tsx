import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="flex flex-col md:min-h-screen">
      <header className="p-4 dark:bg-black dark:text-white">
        <div className="flex items-center justify-between sm:container sm:mx-auto">
          <div className="flex items-center gap-2 text-2xl font-bold">
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
            {menuItems.map((item: any) => (
              <div key={item.title} className="relative">
                <button
                  className="py-2"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.title}
                </button>
                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      className="absolute left-0 z-10 mt-2 w-48 rounded-md shadow-lg dark:bg-white dark:text-black"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.subItems.map((subItem: any) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <motion.button
            className="hidden rounded px-4 py-2 font-bold text-white md:block"
            initial={{ scale: 1, backgroundColor: "#FF6F00" }}
            whileHover={{ scale: 1.1, backgroundColor: "#FF8F00" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            Get started
          </motion.button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="dark:bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex h-full flex-col sm:p-4">
                <button
                  className="mb-4 self-end"
                  onClick={() => setIsOpen(false)}
                ></button>

                <div className="grid grid-cols-2 gap-4">
                  {" "}
                  {menuItems.map((item) => (
                    <div key={item.title} className="mb-4">
                      <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                      <div className="grid gap-2">
                        {" "}
                        {item.subItems.map((subItem) => (
                          <Link key={subItem} href="#" className="block py-2">
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <hr className="hidden sm:block" />

      <div className="relative my-10 overflow-hidden sm:my-0">
        <motion.div
          initial={{ transform: "translateX(-10%) translateY(-10%)" }}
          animate={{
            transform: "translateX(10%) translateY(10%)",
          }}
          transition={{
            repeat: Infinity,
            duration: 0.2,
            ease: "linear",
            repeatType: "mirror",
          }}
          className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
          style={{
            backgroundImage:
              "dark:url('https://ui.metamorix.com/blackNoise.png')",
          }}
        />

        <div className="relative grid place-content-center space-y-6 dark:bg-neutral-950 sm:p-4 md:min-h-screen md:p-8">
          <p className="text-center text-xl font-black dark:text-neutral-50 md:text-5xl lg:text-6xl">
            Welcome to Our Platform !!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

const menuItems = [
  { title: "Product", subItems: ["Issues", "Kanban", "Gantt", "Mind Maps"] },
  { title: "Solutions", subItems: ["Product Management", "Marketing", "IT"] },
  { title: "Media", subItems: ["Videos", "Socials", "Blog"] },
  { title: "Pricing", subItems: ["Startup", "Small Business", "Enterprise"] },
];
