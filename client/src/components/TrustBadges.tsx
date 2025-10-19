import { Shield, Award, Truck, BadgeCheck, Microscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
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
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Fast delivery"
  }
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {badges.map((badge, index) => {
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
  );
}
