import React from "react";
import Link from "next/link";

const links = [
  { href: "/", name: "Terms of Service" },
  { href: "/", name: "Privacy Policy" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  return (
    <footer className="py-4 font-sans tracking-wide md:rounded-t-2xl xl:py-6">
      <div className="flex items-center justify-between max-lg:flex-col">
        <div className="mt-1 flex items-center">
          <Link href="/" className="block max-w-fit">
            <div className="inline-flex items-center space-x-2">
              <img
                src="https://ui.metamorix.com/favicon.ico"
                className="h-10 w-8"
              />
              <p className="text-base">
                <span className="font-bold">Meta</span>
                morix UI
              </p>
            </div>
          </Link>
        </div>

        <ul className="flex gap-4 whitespace-nowrap pb-3 lg:pb-0">
          {links.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 sm:text-base"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="text-sm leading-5 text-gray-600 dark:text-gray-300 sm:text-base">
          © {new Date().getFullYear()} Metamorix consultancy, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
