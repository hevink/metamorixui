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
  "pricing-one": {
    name: "pricing-one",
    type: "components:example",
    files: ["registry/components/example/pricings/pricing-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pricings/pricing-one"),
    ),
  },
  "pricing-two": {
    name: "pricing-two",
    type: "components:example",
    files: ["registry/components/example/pricings/pricing-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pricings/pricing-two"),
    ),
  },
  "pricing-three": {
    name: "pricing-three",
    type: "components:example",
    files: ["registry/components/example/pricings/pricing-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pricings/pricing-three"),
    ),
  },
  "pricing-four": {
    name: "pricing-four",
    type: "components:example",
    files: ["registry/components/example/pricings/pricing-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pricings/pricing-four"),
    ),
  },
  // "pricing-five": {
  //   name: "pricing-five",
  //   type: "components:example",
  //   files: ["registry/components/example/pricings/pricing-five.tsx"],
  //   component: React.lazy(
  //     () => import("@/registry/components/example/pricings/pricing-five"),
  //   ),
  // },
  "feature-one": {
    name: "feature-one",
    type: "components:example",
    files: ["registry/components/example/features/feature-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-one"),
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
