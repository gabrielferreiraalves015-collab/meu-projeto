import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { MagnesiumForms } from "@/components/MagnesiumForms";
import { ProductInfo } from "@/components/ProductInfo";
import { BlOtribe } from "@/components/BlOtribe";
import { Pricing } from "@/components/Pricing";
import { Guarantee } from "@/components/Guarantee";
import { Testimonial } from "@/components/Testimonial";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { TrustBadges } from "@/components/TrustBadges";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </div>
      <ProblemSection />
      <MagnesiumForms />
      <ProductInfo />
      <BlOtribe />
      <Pricing />
      <Guarantee />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </div>
  );
}
