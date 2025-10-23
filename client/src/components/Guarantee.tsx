import { Card } from "@/components/ui/card";
import { Shield, CheckCircle2 } from "lucide-react";

export function Guarantee() {
  return (
    <div className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-6">
          <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-10 w-10 text-primary" data-testid="icon-guarantee" />
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
        </Card>
      </div>
    </div>
  );
}
