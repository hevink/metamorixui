import SiteFaq from "@/components/lp/site-faq";
import SiteHero from "@/components/lp/site-hero";
import SiteTestimonial from "@/components/lp/site-testimonials";

export default function Home() {
  return (
    <div className="container space-y-28">
      <SiteHero />
      <SiteTestimonial />
      <SiteFaq />
    </div>
  );
}
