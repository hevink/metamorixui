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
          label: "Sherr",
        },
      ],
    },
  ],
};
