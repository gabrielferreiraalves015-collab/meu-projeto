import { Button } from "@/components/ui/button";
import { Shield, Star } from "lucide-react";
import productImage from "@assets/magnesium-bottle.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Magnesium Breakthrough: The Only Formula in the World with{" "}
                <span className="text-primary">7 Forms of Magnesium</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                To reverse chronic deficiency, reduce stress, and accelerate your metabolism. 
                You've seen the research. It works. 365-day guarantee or your money back.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base w-full"
                data-testid="button-hero-cta"
                asChild
              >
                <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                  BUY WITH DISCOUNT OFFICIAL SITE
                </a>
              </Button>
              <p className="text-center text-sm font-semibold text-muted-foreground">
                TAP ON THE BUTTON ABOVE FOR MORE INFORMATION
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="font-medium">100% SECURE ORDER</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">Accepted payment methods</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-chart-2 text-chart-2" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold" data-testid="text-rating">4.9/5 from 12,000+ customers</div>
                <div className="text-muted-foreground">Verified reviews</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 blur-3xl -z-10" />
            <img
              src={productImage}
              alt="Magnesium Breakthrough - Bottle with 90 capsules"
              className="w-auto h-[280px] md:h-[350px] object-contain"
              data-testid="img-hero-product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
