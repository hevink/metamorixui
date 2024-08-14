import { MainNavItem, SidebarNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components/hero",
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
          href: `/docs/components/footers`,
          items: [],
        },
        {
          title: "Hero",
          href: `/docs/components/hero`,
          items: [],
        },
        {
          title: "FAQs",
          href: `/docs/components/faq`,
          items: [],
        },
        {
          title: "Pricing",
          href: `/docs/components/pricing`,
          items: [],
        },
        // {
        //   title: "Bentogrid",
        //   href: `/docs/components/bentogrid`,
        //   items: [],
        // },
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
        // {
        //   title: "Table",
        //   href: `/docs/components/table`,
        //   items: [],
        // },
        // {
        //   title: "Sidebar",
        //   href: `/docs/components/sidebar`,
        //   items: [],
        // },
        {
          title: "Features",
          href: `/docs/components/features`,
          items: [],
        },
        // {
        //   title: "Newsletter",
        //   href: `/docs/components/newsletter`,
        //   items: [],
        // },
        {
          title: "Stats",
          href: `/docs/components/state`,
          items: [],
        },
        // {
        //   title: "Modal",
        //   href: `/docs/components/modal`,
        //   items: [],
        // },
        // {
        //   title: "Card",
        //   href: `/docs/components/card`,
        //   items: [],
        // },
        {
          title: "Logo-cloud",
          href: `/docs/components/logo-cloud`,
          items: [],
        },
        {
          title: "Badge",
          href: `/docs/components/badge`,
          items: [],
        },
      ],
    },
    {
      title: "Authentication",
      items: [
        {
          title: "Login",
          href: `/docs/components/login`,
          items: [],
        },
        {
          title: "Register",
          href: `/docs/components/register`,
          items: [],
        },
        {
          title: "Forgot Password",
          href: `/docs/components/forgot-password`,
          items: [],
        },
        {
          title: "Reset Password",
          href: `/docs/components/reset-password`,
          items: [],
        },
      ],
    },
  ],
};
