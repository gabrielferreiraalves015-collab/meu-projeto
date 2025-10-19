import { Card } from "@/components/ui/card";
import { CheckCircle2, Leaf, Droplet, Shield } from "lucide-react";
import productImage from "@assets/stock_images/supplement_bottle_pr_02a0f8ae.jpg";

const features = [
  {
    icon: CheckCircle2,
    title: "High Bioavailability",
    description: "Magnesium glycinate for maximum absorption"
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure and certified organic ingredients"
  },
  {
    icon: Droplet,
    title: "Easy Digestion",
    description: "Gentle on the stomach, no side effects"
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Third-party verified purity and potency"
  }
];

const specs = [
  { label: "Product", value: "Magnesium Breakthrough Version 4.0" },
  { label: "Quantity", value: "90 vegan capsules" },
  { label: "Duration", value: "30 days (dose: 3 capsules/day)" },
  { label: "How to Use", value: "3 capsules daily, preferably at night" },
  { label: "Free From", value: "Gluten, soy, dairy, GMOs" },
  { label: "Suitable for", value: "Vegetarians and vegans" }
];

export function ProductInfo() {
  return (
    <div className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div>
            <img
              src={productImage}
              alt="Magnésio Premium - Detalhes do Produto"
              className="w-full h-auto rounded-lg"
              data-testid="img-product-detail"
            />
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Unmatched Scientific Formula
              </h2>
              <p className="text-lg text-muted-foreground">
                7 forms of magnesium for maximum absorption and effectiveness. Unlike common supplements, 
                Magnesium Breakthrough is designed for real results.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">
                "I use magnesium for anyone looking to optimize their cardiovascular health." 
                - Dr. Robert Maki, ND
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3" data-testid={`feature-${index}`}>
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Card className="p-6 max-w-xl mx-auto">
              <h3 className="font-semibold mb-4 text-center">Product Specifications</h3>
              <div className="space-y-3">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start gap-4"
                    data-testid={`spec-${index}`}
                  >
                    <span className="text-muted-foreground">{spec.label}:</span>
                    <span className="font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
