import { Shield, Award, Truck, BadgeCheck, Microscope } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: BadgeCheck,
    title: "FDA Aprovado",
    description: "Certificação completa"
  },
  {
    icon: Award,
    title: "GMP Certificado",
    description: "Qualidade garantida"
  },
  {
    icon: Microscope,
    title: "Testado por Terceiros",
    description: "Pureza verificada"
  },
  {
    icon: Shield,
    title: "100 Dias de Garantia",
    description: "Satisfação total"
  },
  {
    icon: Truck,
    title: "Frete Grátis",
    description: "Entrega rápida"
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
