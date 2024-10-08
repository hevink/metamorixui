import { Metadata } from "next";
import { env } from "@/env.mjs";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function humanize(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
}

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @see https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function constructMetadata({
  title = "Metamorix UI - Modern React + Tailwind CSS components & Templates",
  description = "Metamorix UI is a curated collection of the best landing page components built using React + Tailwind CSS + Framer Motion",
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Landing Page",
      "Components",
      "Next.js",
      "Metamorix UI",
      "Free tailwind components",
      "Free React components",
      "Free landing page components",
      "Free framermotion components",
      "Free Next.js components",
      "Free Metamorix UI components",
      "Free animated components"
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "https://ui.metamorix.com/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "https://ui.metamorix.com/og-image.png",
      creator: "@Hevin_69",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://ui.metamorix.com"),
    authors: [
      {
        name: "Hevin_69",
        url: "https://x.com/Hevin_69",
      },
    ],
    creator: "Hevin_69",
    ...props,
  };
}
