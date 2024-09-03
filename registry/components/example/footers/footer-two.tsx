import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navigation = {
  features: [
    { title: "URL Shortener", href: "#" },
    { title: "Link Checker", href: "#" },
    { title: "Link Rotator", href: "#" },
  ],
  product: [
    { name: "Blog", href: "#" },
    { name: "Brand", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  compare: [
    { name: "Bitly", href: "#" },
    { name: "Branch", href: "#" },
    { name: "ClickMeter", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Abuse", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer>
      <div className="space-y-6 overflow-hidden py-4 md:rounded-t-2xl xl:py-10">
        <div className="flex flex-col xl:grid xl:grid-cols-6">
          <div className="order-last mt-4 grid  grid-cols-2 gap-4 xl:order-first xl:col-span-5 xl:mt-0">
            <div className="md:grid md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Features
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.features.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Compare
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.compare.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="order-first mb-4 space-y-2 md:mb-2 xl:order-last xl:col-span-1 xl:mb-0 xl:space-y-4">
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

            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-300"
              >
                <span className="sr-only">Github</span>
                <Github className="size-4 text-gray-600 transition-colors group-hover:text-black dark:text-gray-200" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedIn className="size-4 text-gray-600 transition-colors group-hover:text-[#0077b5] dark:text-gray-200" />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-gray-300 p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-300"
              >
                <span className="sr-only">YouTube</span>
                <YouTube className="size-4 text-gray-600 transition-colors group-hover:text-[#ff0000] dark:text-gray-200" />
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-[#E4E4E7] dark:border-[#27272A]" />
        <p className="text-sm leading-5 text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Metamorix consultancy, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

function YouTube({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      className={cn("text-[#ff0000]", className)}
    >
      <defs></defs>
      <g
        style={{
          stroke: "none",
          strokeWidth: 0,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#ff0000",
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "currentColor",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("text-[#0077b5]", className)}
    >
      <path
        fill="currentColor"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
