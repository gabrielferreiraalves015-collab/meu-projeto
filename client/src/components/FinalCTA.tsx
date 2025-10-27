import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FinalCTA() {
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

          <div className="flex flex-col items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base px-8"
              data-testid="button-final-cta"
              asChild
            >
              <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                BUY WITH DISCOUNT OFFICIAL SITE
              </a>
            </Button>
            <p className="text-center text-sm font-semibold text-white/90">
              TAP ON THE BUTTON ABOVE FOR MORE INFORMATION
            </p>
          </div>

          <div className="pt-6 text-sm text-white/80">
            ✓ 365-day guarantee • ✓ Free shipping • ✓ Secure payment
          </div>
        </div>
      </div>
    </div>
  );
}
