import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2 } from "lucide-react";

export function Guarantee() {
  return (
    <div className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-6">
          <div className="h-32 w-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-20 w-20 text-primary" data-testid="icon-guarantee" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Unconditional 365-Day Guarantee
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try Magnesium Breakthrough completely risk-free for an entire year.
            </p>
          </div>

          <div className="space-y-6 pt-6 max-w-3xl mx-auto text-left">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">1 Bottle Purchase:</div>
                  <p className="text-sm text-muted-foreground">
                    If you purchase 1 bottle and are not completely satisfied, within 365 days 
                    you may request a full refund (minus shipping and handling costs).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Multiple Bottle Purchase:</div>
                  <p className="text-sm text-muted-foreground">
                    If you choose to save and purchase a multi-bottle package, you still have the 
                    365-day guarantee. If you're not satisfied after the first bottle, you can return 
                    the remaining unopened bottles within 365 days of purchase, and we will refund 
                    the full amount of your order (minus shipping and handling costs).
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-4 bg-muted/50 border-muted">
              <p className="text-xs text-muted-foreground">
                *Note: If you open a second bottle, you will no longer be eligible for the above guarantee. 
                Speak with our team for a prorated refund.
              </p>
            </Card>
          </div>

          <div className="pt-6 space-y-4">
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base w-full max-w-md mx-auto"
              data-testid="button-guarantee-cta"
              asChild
            >
              <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                BUY WITH DISCOUNT OFFICIAL SITE
              </a>
            </Button>
            <p className="text-center text-sm font-semibold text-muted-foreground">
              TAP ON THE BUTTON ABOVE FOR MORE INFORMATION
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
