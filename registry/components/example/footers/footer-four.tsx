import React from "react";
import Link from "next/link";

const links = {
  quickLinks: [
    { name: "Our Story", href: "#" },
    { name: "Newsroom", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "#" },
    { name: "Testing Automation", href: "#" },
    { name: "AWS Development Services", href: "#" },
    { name: "Mobile App Development", href: "#" },
  ],
  platforms: [
    { name: "Hubspot", href: "#" },
    { name: "Marketo Integration Services", href: "#" },
    { name: "Marketing Glossary", href: "#" },
    { name: "UIPath", href: "#" },
  ],
  company: [
    { name: "Accessibility", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Learn more", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-4 font-sans tracking-wide md:rounded-t-2xl xl:py-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Link href="#" className="block max-w-fit">
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
          <p className="max-w-xs text-sm text-gray-600 dark:text-gray-300">
            Giving modern marketing teams superpowers with short links that
            stand out.
          </p>
          <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Metamorix consultancy, Inc.
          </p>
        </div>

        <div>
          <h4 className="mb-6  text-lg  font-semibold text-black dark:text-gray-400">
            Subscribe
          </h4>

          <p className="text-[15px]  text-gray-500  dark:text-gray-400">
            Subscribe to stay updated with the latest news, offers, and
            exclusive content. Join our mailing list and be the first to receive
            exciting updates delivered directly to your inbox
          </p>

          <div className="mt-6 flex">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-l border border-gray-300 bg-transparent px-4  py-3 text-[15px] outline-none dark:border-2 dark:border-[#27272A] dark:bg-transparent dark:text-white max-md:w-full"
            />
            <button className="rounded-r bg-[#FE6019] px-4 py-3 text-[15px] tracking-wide text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-12 border-[#E4E4E7] dark:border-[#27272A]" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
            Quick Links
          </h4>
          <ul className="space-y-4">
            {links.quickLinks.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
            Services
          </h4>
          <ul className="space-y-4">
            {links.services.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
            Platforms
          </h4>
          <ul className="space-y-4">
            {links.platforms.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
            Company
          </h4>
          <ul className="space-y-4">
            {links.company.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
