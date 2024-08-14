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
  "pricing-five": {
    name: "pricing-five",
    type: "components:example",
    files: ["registry/components/example/pricings/pricing-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/pricings/pricing-five"),
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
  "states-four": {
    name: "states-four",
    type: "components:example",
    files: ["registry/components/example/states/states-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/states/states-four"),
    ),
  },
  "hero-one": {
    name: "hero-one",
    type: "components:example",
    files: ["registry/components/example/hero/hero-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/hero/hero-one"),
    ),
  },
  "hero-two": {
    name: "hero-two",
    type: "components:example",
    files: ["registry/components/example/hero/hero-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/hero/hero-two"),
    ),
  },
  "hero-three": {
    name: "hero-three",
    type: "components:example",
    files: ["registry/components/example/hero/hero-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/hero/hero-three"),
    ),
  },
  "hero-four": {
    name: "hero-four",
    type: "components:example",
    files: ["registry/components/example/hero/hero-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/hero/hero-four"),
    ),
  },
  "faq-one": {
    name: "faq-one",
    type: "components:example",
    files: ["registry/components/example/faq/faq-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-one"),
    ),
  },
  "faq-two": {
    name: "faq-two",
    type: "components:example",
    files: ["registry/components/example/faq/faq-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-two"),
    ),
  },
  "faq-three": {
    name: "faq-three",
    type: "components:example",
    files: ["registry/components/example/faq/faq-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-three"),
    ),
  },
  "faq-four": {
    name: "faq-four",
    type: "components:example",
    files: ["registry/components/example/faq/faq-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-four"),
    ),
  },
  "faq-five": {
    name: "faq-five",
    type: "components:example",
    files: ["registry/components/example/faq/faq-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-five"),
    ),
  },
  "faq-six": {
    name: "faq-six",
    type: "components:example",
    files: ["registry/components/example/faq/faq-six.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/faq/faq-six"),
    ),
  },
  "login-one": {
    name: "login-one",
    type: "components:example",
    files: ["registry/components/example/login/login-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login/login-one"),
    ),
  },
  "login-two": {
    name: "login-two",
    type: "components:example",
    files: ["registry/components/example/login/login-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login/login-two"),
    ),
  },
  "login-three": {
    name: "login-three",
    type: "components:example",
    files: ["registry/components/example/login/login-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login/login-three"),
    ),
  },
  "login-four": {
    name: "login-four",
    type: "components:example",
    files: ["registry/components/example/login/login-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login/login-four"),
    ),
  },
  "login-five": {
    name: "login-five",
    type: "components:example",
    files: ["registry/components/example/login/login-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/login/login-five"),
    ),
  },
  "register-one": {
    name: "register-one",
    type: "components:example",
    files: ["registry/components/example/register/register-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/register/register-one"),
    ),
  },
  "register-two": {
    name: "register-two",
    type: "components:example",
    files: ["registry/components/example/register/register-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/register/register-two"),
    ),
  },
  "register-three": {
    name: "register-three",
    type: "components:example",
    files: ["registry/components/example/register/register-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/register/register-three"),
    ),
  },
  "register-four": {
    name: "register-four",
    type: "components:example",
    files: ["registry/components/example/register/register-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/register/register-four"),
    ),
  },
  "register-five": {
    name: "register-five",
    type: "components:example",
    files: ["registry/components/example/register/register-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/register/register-five"),
    ),
  },
  "logo-cloud-one": {
    name: "logo-cloud-one",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-one"),
    ),
  },
  "logo-cloud-two": {
    name: "logo-cloud-two",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-two"),
    ),
  },
  "logo-cloud-three": {
    name: "logo-cloud-three",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-three"),
    ),
  },
  "logo-cloud-four": {
    name: "logo-cloud-four",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-four"),
    ),
  },
  "logo-cloud-five": {
    name: "logo-cloud-five",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-five"),
    ),
  },
  "logo-cloud-six": {
    name: "logo-cloud-six",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-six.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-six"),
    ),
  },
  "logo-cloud-seven": {
    name: "logo-cloud-seven",
    type: "components:example",
    files: ["registry/components/example/logo-cloud/logo-cloud-seven.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/logo-cloud/logo-cloud-seven"),
    ),
  },
  "blog-one": {
    name: "blog-one",
    type: "components:example",
    files: ["registry/components/example/blog/blog-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/blog/blog-one"),
    ),
  },
  "blog-two": {
    name: "blog-two",
    type: "components:example",
    files: ["registry/components/example/blog/blog-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/blog/blog-two"),
    ),
  },
  "blog-three": {
    name: "blog-three",
    type: "components:example",
    files: ["registry/components/example/blog/blog-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/blog/blog-three"),
    ),
  },
  "cta-one": {
    name: "cta-one",
    type: "components:example",
    files: ["registry/components/example/cta/cta-one.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-one"),
    ),
  },
  "cta-two": {
    name: "cta-two",
    type: "components:example",
    files: ["registry/components/example/cta/cta-two.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-two"),
    ),
  },
  "cta-three": {
    name: "cta-three",
    type: "components:example",
    files: ["registry/components/example/cta/cta-three.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-three"),
    ),
  },
  "cta-four": {
    name: "cta-four",
    type: "components:example",
    files: ["registry/components/example/cta/cta-four.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-four"),
    ),
  },
  "cta-five": {
    name: "cta-five",
    type: "components:example",
    files: ["registry/components/example/cta/cta-five.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-five"),
    ),
  },
  "cta-six": {
    name: "cta-six",
    type: "components:example",
    files: ["registry/components/example/cta/cta-six.tsx"],
    component: React.lazy(
      () => import("@/registry/components/example/cta/cta-six"),
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
