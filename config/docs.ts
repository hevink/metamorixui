import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
  ],
  sidebarNav: [
    {
      title: "UI Blocks",
      items: [
        {
          title: "Headers",
          href: `/docs/components/headers`,
          items: [],
        },
        {
          title: "Footer",
          href: `/docs/components/footer`,
          items: [],
        },
        {
          title: "Hero",
          href: `/docs/components/hero`,
          items: [],
        },
        {
          title: "FAQs",
          href: `/docs/components/faqs`,
          items: [],
        },
        {
          title: "Pricing",
          href: `/docs/components/pricing`,
          items: [],
        },
        {
          title: "Bentogrid",
          href: `/docs/components/bentogrid`,
          items: [],
        },
        {
          title: "Testimonials",
          href: `/docs/components/testimonials`,
          items: [],
        },
        {
          title: "Blog",
          href: `/docs/components/blog`,
          items: [],
        },
        {
          title: "CTA",
          href: `/docs/components/cta`,
          items: [],
        },
        {
          title: "Table",
          href: `/docs/components/table`,
          items: [],
        },
        {
          title: "Sidebar",
          href: `/docs/components/sidebar`,
          items: [],
        },
        {
          title: "Features",
          href: `/docs/components/features`,
          items: [],
        },
        {
          title: "Newsletter",
          href: `/docs/components/newsletter`,
          items: [],
        },
        {
          title: "Stats",
          href: `/docs/components/stats`,
          items: [],
        },
        {
          title: "Modal",
          href: `/docs/components/modal`,
          items: [],
        },
        {
          title: "Card",
          href: `/docs/components/card`,
          items: [],
        },
      ],
    },
  ],
};
