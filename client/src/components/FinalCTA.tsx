import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FinalCTA() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold">
              It's Time to Experience Biological Optimization
            </h2>
            <p className="text-lg text-white/90">
              Our mission is to end physical suffering by helping you become a 
              superhuman version of yourself. Join thousands who have already transformed their lives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base px-8"
              data-testid="button-final-cta"
              onClick={scrollToPricing}
            >
              SECURE MY OFFER NOW! 👉
            </Button>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Limited time offer</span>
            </div>
          </div>

          <div className="pt-6 text-sm text-white/80">
            ✓ 365-day guarantee • ✓ Free shipping • ✓ Secure payment
          </div>
        </div>
      </div>
    </div>
  );
}
