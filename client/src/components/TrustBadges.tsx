import { Shield, Award, Truck, BadgeCheck, Microscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const topBadges = [
  {
    icon: BadgeCheck,
    title: "FDA Approved",
    description: "Full certification"
  },
  {
    icon: Award,
    title: "GMP Certified",
    description: "Guaranteed quality"
  },
  {
    icon: Microscope,
    title: "Third-Party Tested",
    description: "Verified purity"
  },
  {
    icon: Shield,
    title: "100-Day Guarantee",
    description: "Total satisfaction"
  }
];

const shippingBadge = {
  icon: Truck,
  title: "Free Shipping",
  description: "Fast delivery"
};

export function TrustBadges() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {topBadges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <Card 
              key={index} 
              className="p-6 text-center space-y-3 hover-elevate"
              data-testid={`card-badge-${index}`}
            >
              <Icon className="h-8 w-8 mx-auto text-primary" />
              <div>
                <div className="font-semibold text-sm" data-testid={`text-badge-title-${index}`}>
                  {badge.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {badge.description}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Card 
          className="p-6 text-center space-y-3 hover-elevate w-full max-w-xs"
          data-testid="card-badge-4"
        >
          <Truck className="h-8 w-8 mx-auto text-primary" />
          <div>
            <div className="font-semibold text-sm" data-testid="text-badge-title-4">
              {shippingBadge.title}
            </div>
            <div className="text-xs text-muted-foreground">
              {shippingBadge.description}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
