import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const forms = [
  {
    name: "Magnésio Glicinato",
    benefits: [
      "Reduz estresse",
      "Melhora qualidade do sono",
      "Alta absorção"
    ]
  },
  {
    name: "Magnésio Malato",
    benefits: [
      "Aumenta energia",
      "Combate fadiga",
      "Performance muscular"
    ]
  },
  {
    name: "Magnésio Citrato",
    benefits: [
      "Regularidade intestinal",
      "Digestão saudável",
      "Boa biodisponibilidade"
    ]
  },
  {
    name: "Magnésio Bisglicinato",
    benefits: [
      "Máxima absorção",
      "Suave para estômago",
      "Alta biodisponibilidade"
    ]
  },
  {
    name: "Magnésio Quelato",
    benefits: [
      "Suporte muscular",
      "Saúde nervosa",
      "Absorção eficiente"
    ]
  },
  {
    name: "Magnésio Orotato",
    benefits: [
      "Saúde cardiovascular",
      "Performance atlética",
      "Energia celular"
    ]
  },
  {
    name: "Magnésio Taurato",
    benefits: [
      "Saúde do coração",
      "Função cognitiva",
      "Suporte neurológico"
    ]
  }
];

export function MagnesiumForms() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            As 7 Formas Essenciais de Magnésio
          </h2>
          <p className="text-lg text-muted-foreground">
            Magnesium Breakthrough contém TODAS as 7 formas para atacar o problema de todas as frentes. 
            A única fórmula completa do mundo.
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
