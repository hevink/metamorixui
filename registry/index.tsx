import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  headers: {
    name: "headers",
    type: "components:magicui",
    files: ["registry/components/magicui/headers.tsx"],
  },
  // footers: {
  //   name: "footers",
  //   type: "components:magicui",
  //   files: ["registry/components/magicui/footers.tsx"],
  // },
};

const example: Registry = {
  "headers-demo": {
    name: "headers-demo",
    type: "components:example",
    registryDependencies: ["headers"],
    files: ["registry/components/example/headers/headers-demo.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/headers/headers-demo"),
    ),
  },
  "footer-one": {
    name: "footer-one",
    type: "components:example",
    registryDependencies: ["footers"],
    files: ["registry/components/example/footers/footer-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/footers/footer-one"),
    ),
  },
  "footer-two": {
    name: "footer-two",
    type: "components:example",
    registryDependencies: ["footers"],
    files: ["registry/components/example/footers/footer-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/footers/footer-two"),
    ),
  },
  "footer-three": {
    name: "footer-three",
    type: "components:example",
    registryDependencies: ["footers"],
    files: ["registry/components/example/footers/footer-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/footers/footer-three"),
    ),
  },
  "footer-four": {
    name: "footer-four",
    type: "components:example",
    registryDependencies: ["footers"],
    files: ["registry/components/example/footers/footer-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/footers/footer-four"),
    ),
  },
  "footer-five": {
    name: "footer-five",
    type: "components:example",
    registryDependencies: ["footers"],
    files: ["registry/components/example/footers/footer-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/footers/footer-five"),
    ),
  },
};
export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {},
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
