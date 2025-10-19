import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import productImage from "@assets/magnesium-bottle.png";
import paymentLogos from "@assets/payment-logos.png";

const plans = [
  {
    name: "One Bottle",
    subtitle: "Magnesium Breakthrough",
    badge: null,
    badgeColor: "bg-muted text-foreground",
    price: "$35",
    perBottle: "/ bottle",
    totalPrice: "($35 TOTAL)",
    savePercent: "SUBSCRIBE & SAVE 12%",
    subscribeOffer: "Subscribe N' Save 22% Off",
    freeShipping: "UPGRADE FOR FREE SHIPPING (US)",
    bottles: 1,
    features: [
      "1 Bottle (30 days)",
      "90 vegan capsules",
      "7 forms of magnesium",
      "365-day guarantee"
    ]
  },
  {
    name: "Five Bottles",
    subtitle: "Magnesium Breakthrough",
    badge: "BEST VALUE",
    badgeColor: "bg-[#0891b2] text-white",
    price: "$27",
    perBottle: "/ bottle",
    totalPrice: "($136 TOTAL)",
    savePercent: "SUBSCRIBE & SAVE 32%",
    subscribeOffer: "Subscribe N' Save 22% Off",
    freeShipping: "+ FREE SHIPPING (US)",
    featured: true,
    bottles: 5,
    features: [
      "5 Bottles (5 months)",
      "FREE Shipping",
      "Maximum savings",
      "365-day guarantee",
      "Priority support"
    ]
  },
  {
    name: "Three Bottles",
    subtitle: "Magnesium Breakthrough",
    badge: "MOST POPULAR",
    badgeColor: "bg-muted-foreground text-white",
    price: "$29",
    perBottle: "/ bottle",
    totalPrice: "($87 TOTAL)",
    savePercent: "SUBSCRIBE & SAVE 27%",
    subscribeOffer: "Subscribe N' Save 22% Off",
    freeShipping: "+ FREE SHIPPING (US)",
    popular: true,
    bottles: 3,
    features: [
      "3 Bottles (90 days)",
      "FREE Shipping",
      "Ideal for couples",
      "365-day guarantee",
      "Professional support"
    ]
  }
];

export function Pricing() {
  return (
    <div id="pricing-section" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Invest in Your Health Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the ideal package for you. All with unconditional 365-day guarantee.
          </p>
          <div className="pt-4 flex justify-center">
            <Badge variant="outline" className="text-primary border-primary">
              🔬 Authority and Expertise: Optimizing Humans Since 2004
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-6 space-y-5 relative hover-elevate flex flex-col ${
                plan.featured ? 'border-[4px] border-primary' : 'border-2 border-border'
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {/* Top centered badge */}
              {plan.badge && (
                <div className="flex justify-center -mt-3 mb-3">
                  <Badge className={`${plan.badgeColor} px-4 py-1 font-semibold text-xs tracking-wide`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Centered content */}
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold" data-testid={`text-plan-name-${index}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                {/* Product images - multiple bottles */}
                <div className="flex items-center justify-center gap-2 h-40 py-2">
                  {[...Array(plan.bottles)].map((_, i) => (
                    <img
                      key={i}
                      src={productImage}
                      alt={`Magnesium Breakthrough bottle ${i + 1}`}
                      className={`object-contain ${
                        plan.bottles === 1 ? 'h-40' : 
                        plan.bottles === 3 ? 'h-32' : 
                        'h-28'
                      }`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="space-y-1 py-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary" data-testid={`text-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">{plan.perBottle}</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {plan.totalPrice}
                  </div>
                </div>

                {/* Savings badge */}
                <div className="text-sm font-bold text-destructive py-1">
                  {plan.savePercent}
                </div>

                {/* Subscription offer */}
                <div className="text-sm font-medium text-destructive underline">
                  {plan.subscribeOffer}
                </div>

                {/* Free shipping */}
                <div className="text-sm font-semibold text-foreground">
                  {plan.freeShipping}
                </div>

                {/* Separator */}
                <div className="w-full border-t border-border my-2"></div>

                {/* Organized features */}
                <div className="space-y-2.5 w-full flex flex-col items-center">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yellow button */}
              <Button 
                className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-foreground font-bold border-[#C5A028] mt-4"
                size="lg"
                data-testid={`button-select-plan-${index}`}
                asChild
              >
                <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
                  SUBSCRIBE
                </a>
              </Button>

              {/* Payment logos */}
              <div className="flex justify-center pt-2">
                <img
                  src={paymentLogos}
                  alt="Accepted payment methods"
                  className="w-full max-w-[280px] h-auto object-contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
