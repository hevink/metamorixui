import SiteFaq from "@/components/lp/SiteFaq";
import SiteHero from "@/components/lp/SiteHero";
import SiteTestimonial from "@/components/lp/SiteTestimonials";

export default function Home() {
  return (
    <div className="container space-y-28">
      <SiteHero />
      <SiteTestimonial />
      <SiteFaq />
    </div>
  );
}
