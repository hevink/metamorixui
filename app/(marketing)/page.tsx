"use client";

import SiteFaq from "@/components/lp/SiteFaq";
import SiteHero from "@/components/lp/SiteHero";

export default function Home() {
  return (
    <div className="space-y-[150px]">
      <SiteHero />
      <SiteFaq />
    </div>
  );
}
