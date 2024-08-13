import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  return (
    <div>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-0 z-10 flex h-24 w-full items-center"
      >
        <nav className="relative mx-auto flex w-full items-center justify-between gap-x-5 px-4 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex min-w-max items-center"
          >
            <Link href="#" className="flex items-center gap-x-2 font-semibold">
              <div className="flex items-center -space-x-3">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex aspect-square h-6 rounded-full bg-purple-600 dark:bg-purple-500"
                />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex aspect-square h-6 rounded-full bg-violet-600 blur dark:bg-violet-400"
                />
              </div>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-700 dark:text-gray-300"
              >
                Agency
              </motion.span>
            </Link>
          </motion.div>

          <div
            className={`
                absolute left-0 top-full border-b border-gray-200 bg-white px-5 py-8 duration-300 ease-linear dark:border-gray-800 dark:bg-gray-950 sm:px-10 md:px-12 lg:relative lg:top-0 lg:flex lg:w-max lg:space-x-16 lg:border-none  lg:!bg-transparent lg:px-0 lg:py-0 lg:transition-none
                ${openNavbar ? "visible translate-y-0 opacity-0" : "invisible translate-y-10 opacity-0 lg:visible  lg:translate-y-0 lg:opacity-100"}
            `}
          >
            <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 lg:w-full lg:flex-row lg:items-center lg:justify-center">
              <li>
                <Link
                  href="#"
                  className="px-2 py-2.5  transition-colors hover:text-purple-600 "
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-2 py-2.5  transition-colors hover:text-purple-600 "
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-2 py-2.5  transition-colors hover:text-purple-600 "
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-2 py-2.5  transition-colors hover:text-purple-600 "
                >
                  Resources
                </Link>
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row  sm:items-center lg:mt-0 lg:min-w-max">
              <Link
                href="#"
                className="flex h-12 w-full items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-6 text-purple-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:w-auto"
              >
                Get It touch
              </Link>
            </div>
          </div>

          <AnimatePresence>
            {openNavbar && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`absolute -top-6 left-0 w-full border-gray-200 bg-white/30 px-4 py-8 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-950/30 sm:px-10 md:px-12 lg:relative lg:top-0 lg:flex lg:w-max lg:space-x-16 lg:border-none lg:!bg-transparent lg:px-0 lg:py-0`}
              >
                <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 lg:w-full lg:flex-row lg:items-center lg:justify-center">
                  {["Portfolio", "Company", "Products", "Resources"].map(
                    (item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href="#"
                          className="px-2 py-2.5 transition-colors hover:text-purple-600"
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ),
                  )}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-0 lg:min-w-max"
                >
                  <Link
                    href="#"
                    className="flex h-12 w-full items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-6 text-purple-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:w-auto"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center lg:hidden"
          >
            <button
              onClick={toggleNavbar}
              aria-label="Toggle navbar"
              className="children:flex relative border-l border-l-gray-100 py-3 pl-3 outline-none dark:border-l-gray-800"
            >
              {openNavbar ? (
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
          </motion.div>
        </nav>
      </motion.header>

      <section className="min-h-max bg-white dark:bg-gray-950">
        <div className="absolute inset-x-0 top-0 flex h-64 items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:invisible dark:from-purple-700 dark:opacity-40"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 aspect-[2/0.5] w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600 to-violet-400 opacity-50 blur-2xl"></div>
        <div className="relative mx-auto w-full space-y-10 pb-24 pt-32 text-center sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
          <h1 className="mx-auto max-w-5xl text-4xl/tight font-bold text-gray-900 dark:text-white sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
            We create, we design, we develop Modern tools.
          </h1>
          <p className="mx-auto max-w-2xl text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            saepe atque enim quasi a ipsum asperiores necessitatibus deleniti,
            sint quo vel corporis dignissimos
          </p>
          <div className="mx-auto flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="flex h-12 items-center rounded-full border border-purple-600 bg-purple-600 px-6 text-white"
            >
              Hire us Now
            </Link>
            <Link
              href="#"
              className="flex h-12 items-center rounded-full border border-gray-200 bg-gray-100 px-6 text-purple-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              Learn more
            </Link>
          </div>
          <div className="mx-auto grid max-w-2xl divide-y divide-gray-300 rounded-2xl border border-gray-100 bg-gradient-to-tr from-gray-50 to-gray-200 p-6 text-left dark:divide-gray-800 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800 lg:max-w-5xl lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            <div className="flex items-start gap-6 pb-6 lg:pb-0 lg:pr-6">
              <div className="w-10">
                <span className="flex w-max rounded-xl bg-gray-200 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  High Quality
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 py-6 lg:px-6 lg:py-0">
              <div className="w-10">
                <span className="flex w-max rounded-xl bg-gray-200 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  High Quality
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6 pt-6 lg:pl-6 lg:pt-0">
              <div className="w-10">
                <span className="flex w-max rounded-xl bg-gray-200 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  High Quality
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
