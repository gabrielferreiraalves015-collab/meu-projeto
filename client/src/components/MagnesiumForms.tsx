import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const forms = [
  {
    name: "Magnesium Glycinate",
    benefits: [
      "Reduces stress",
      "Improves sleep quality",
      "High absorption"
    ]
  },
  {
    name: "Magnesium Malate",
    benefits: [
      "Increases energy",
      "Fights fatigue",
      "Muscle performance"
    ]
  },
  {
    name: "Magnesium Citrate",
    benefits: [
      "Intestinal regularity",
      "Healthy digestion",
      "Good bioavailability"
    ]
  },
  {
    name: "Magnesium Bisglycinate",
    benefits: [
      "Maximum absorption",
      "Gentle on stomach",
      "High bioavailability"
    ]
  },
  {
    name: "Magnesium Chelate",
    benefits: [
      "Muscle support",
      "Nervous health",
      "Efficient absorption"
    ]
  },
  {
    name: "Magnesium Orotate",
    benefits: [
      "Cardiovascular health",
      "Athletic performance",
      "Cellular energy"
    ]
  },
  {
    name: "Magnesium Taurate",
    benefits: [
      "Heart health",
      "Cognitive function",
      "Neurological support"
    ]
  }
];

export function MagnesiumForms() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            The 7 Essential Forms of Magnesium
          </h2>
          <p className="text-lg text-muted-foreground">
            Magnesium Breakthrough contains ALL 7 forms to attack the problem from all angles. 
            The only complete formula in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {forms.map((form, index) => (
            <Card 
              key={index}
              className="p-6 space-y-4 hover-elevate border-primary/20"
              data-testid={`card-form-${index}`}
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3" data-testid={`text-form-name-${index}`}>
                  {form.name}
                </h3>
              </div>

              <ul className="space-y-2 text-center">
                {form.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-center justify-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
