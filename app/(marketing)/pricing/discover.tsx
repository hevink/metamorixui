"use client";

import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { Gauge, HelpCircle, ListChecks } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// import { SectionTitle } from "@/components/section";
import {
  Bullet,
  Color,
  Cost,
  FreeCardHighlight,
  PricingCard,
  PricingCardContent,
  PricingCardFooter,
  PricingCardHeader,
  Separator,
} from "./components";
import { SubDiscoverySvg } from "./svgs";

const verificationsSteps = [
  150_000,
  250_000,
  500_000,
  1_000_000,
  10_000_000,
  100_000_000,
  null,
];

const rateLimitsSteps = [
  2_500_000,
  5_000_000,
  10_000_000,
  20_000_000,
  50_000_000,
  100_000_000,
  500_000_000,
  null,
];

export const Discover: React.FC = () => {
  const [verificationsIndex, setVerificationsIndex] = useState(0);
  const verifications = verificationsSteps[verificationsIndex];
  const billableVerifications = Math.max(0, (verifications ?? 0) - 150_000);
  const verificationsCost = (billableVerifications * 10) / 100_000;
  const verificationsQuantityDisplay = fmtNumber(
    verifications ?? Number.POSITIVE_INFINITY,
  );
  const verificationsCostDisplay =
    verifications === null ? "Custom" : fmtDollar(verificationsCost);

  const [rateLimitsIndex, setRateLimitsIndex] = useState(0);
  const rateLimits = rateLimitsSteps[rateLimitsIndex];
  const billableRateLimits = Math.max(0, (rateLimits ?? 0) - 2_500_000);
  const rateLimitsCost = billableRateLimits / 100_000;
  const rateLimitsQuantityDisplay = fmtNumber(
    rateLimits ?? Number.POSITIVE_INFINITY,
  );
  const rateLimitsCostDisplay =
    rateLimits === null ? "Custom" : fmtDollar(rateLimitsCost);

  const totalCostDisplay =
    verifications === null || rateLimits === null
      ? "Custom"
      : fmtDollar(25 + verificationsCost + rateLimitsCost);

  return (
    <div>
      {/* <SectionTitle
        align="center"
        title={
          <>
            Discover your pricing. <br /> Pay only for what you use
          </>
        }
        text={null}
      /> */}
      <PricingCard
        color={Color.White}
        className="relative mx-auto mt-20 max-w-4xl"
      >
        <FreeCardHighlight className="absolute right-0 top-0" />
        <TooltipProvider delayDuration={10}>
          <PricingCardHeader
            title="Estimated cost calculator"
            description="A quick, simple way to figure out the cost of Unkey for your business."
            withIcon={false}
            color={Color.Purple}
            className="bg-gradient-to-tr from-transparent to-[#ffffff]/10 "
          />
          <Separator />
          <PricingCardContent>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                  <Cost dollar={totalCostDisplay} />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle
                        className="h-4 w-4 text-white/40"
                        style={{ strokeWidth: "1px" }}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-black">
                      <p className="text-sm text-white/40">Cost break down:</p>

                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                        <span className="text-white">{fmtDollar(25)}</span>
                        <span className="text-sm text-white/40">Base Plan</span>
                        <span className="text-white">
                          {verificationsCostDisplay}
                        </span>
                        <span className="text-sm text-white/40">
                          Verifications
                        </span>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-white/50">
                  Resources are summed and billed monthly
                </p>
              </div>
            </div>

            <div className="grid w-full grid-cols-12 gap-8">
              <Bullet
                className="col-span-12 sm:col-span-4 md:col-span-2"
                Icon={ListChecks}
                label="Verifications"
                color={Color.Purple}
              />
              <Slider
                min={0}
                max={verificationsSteps.length - 1}
                value={[verificationsIndex]}
                className="hidden md:col-span-6 md:flex"
                onValueChange={([v]) => setVerificationsIndex(v)}
              />
              <span className="col-span-6 text-white sm:col-span-4 md:col-span-2">
                {verificationsQuantityDisplay}
              </span>
              <PriceTag
                className="col-span-6 sm:col-span-4 md:col-span-2"
                dollar={verificationsCostDisplay}
              />
              <Slider
                min={0}
                max={verificationsSteps.length - 1}
                value={[verificationsIndex]}
                className="col-span-12 md:col-span-6 md:hidden"
                onValueChange={([v]) => setVerificationsIndex(v)}
              />
              <Bullet
                className="col-span-12 sm:col-span-4 md:col-span-2"
                Icon={Gauge}
                label="Ratelimits"
                color={Color.Purple}
              />
              <Slider
                min={0}
                max={rateLimitsSteps.length - 1}
                value={[rateLimitsIndex]}
                className="hidden md:col-span-6 md:flex"
                onValueChange={([v]) => setRateLimitsIndex(v)}
              />
              <span className="col-span-6 text-white sm:col-span-4 md:col-span-2">
                {rateLimitsQuantityDisplay}
              </span>
              <PriceTag
                className="col-span-6 sm:col-span-4 md:col-span-2"
                dollar={rateLimitsCostDisplay}
              />
              <Slider
                min={0}
                max={rateLimitsSteps.length - 1}
                value={[rateLimitsIndex]}
                className="col-span-12 md:col-span-6 md:hidden"
                onValueChange={([v]) => setRateLimitsIndex(v)}
              />
            </div>
          </PricingCardContent>
          <PricingCardFooter />
        </TooltipProvider>
      </PricingCard>
      <SubDiscoverySvg className="container mx-auto max-w-4xl" />
    </div>
  );
};

function fmtNumber(n: number): string {
  return Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}

function fmtDollar(n: number): string {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

const PriceTag: React.FC<{ dollar: string; className?: string }> = ({
  dollar,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex h-6 items-center justify-start rounded bg-white/10 px-2 text-sm font-semibold text-white",
        className,
      )}
    >
      {dollar}
    </div>
  );
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center bg-black",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-px w-full grow overflow-hidden rounded-full bg-gradient-to-r from-white/20 to-white/60">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-[#02DEFC] via-[#0239FC] to-[#7002FC]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      aria-label="Thumb"
      className={cn(
        "block h-4 w-4 rounded-full border-2 border-white bg-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
        "sm:drop-shadow-[0_0_5px_rgba(255,255,255,1)]", // this causes nasty artifacts on my iphone and I am not smart enough to figure out why, so I am removing it on xs screens
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;
