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
  "testimonial-one": {
    name: "testimonial-one",
    type: "components:example",
    files: ["registry/components/example/testimonial/testimonial-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/testimonial/testimonial-one"),
    ),
  },
  "testimonial-two": {
    name: "testimonial-two",
    type: "components:example",
    files: ["registry/components/example/testimonial/testimonial-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/testimonial/testimonial-two"),
    ),
  },
  "testimonial-three": {
    name: "testimonial-three",
    type: "components:example",
    files: ["registry/components/example/testimonial/testimonial-three.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/testimonial/testimonial-three"),
    ),
  },
  "testimonial-four": {
    name: "testimonial-four",
    type: "components:example",
    files: ["registry/components/example/testimonial/testimonial-four.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/testimonial/testimonial-four"),
    ),
  },
  "testimonial-five": {
    name: "testimonial-five",
    type: "components:example",
    files: ["registry/components/example/testimonial/testimonial-five.tsx"],
    component: React.lazy(
      () =>
        import("@/registry/components/example/testimonial/testimonial-five"),
    ),
  },
  "feature-one": {
    name: "feature-one",
    type: "components:example",
    files: ["registry/components/example/features/feature-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-one"),
    ),
  },
  "feature-two": {
    name: "feature-two",
    type: "components:example",
    files: ["registry/components/example/features/feature-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-two"),
    ),
  },
  "feature-three": {
    name: "feature-three",
    type: "components:example",
    files: ["registry/components/example/features/feature-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-three"),
    ),
  },
  "feature-four": {
    name: "feature-four",
    type: "components:example",
    files: ["registry/components/example/features/feature-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-four"),
    ),
  },
  "feature-five": {
    name: "feature-five",
    type: "components:example",
    files: ["registry/components/example/features/feature-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-five"),
    ),
  },
  "feature-six": {
    name: "feature-six",
    type: "components:example",
    files: ["registry/components/example/features/feature-six.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/features/feature-six"),
    ),
  },
  "states-one": {
    name: "states-one",
    type: "components:example",
    files: ["registry/components/example/states/states-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/states/states-one"),
    ),
  },
  "states-two": {
    name: "states-two",
    type: "components:example",
    files: ["registry/components/example/states/states-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/states/states-two"),
    ),
  },
  "states-three": {
    name: "states-three",
    type: "components:example",
    files: ["registry/components/example/states/states-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/states/states-three"),
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
