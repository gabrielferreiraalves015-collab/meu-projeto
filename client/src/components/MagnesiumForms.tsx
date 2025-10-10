import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const forms = [
  {
    name: "Glicinato de Magnésio",
    bioavailability: "Alta",
    benefits: [
      "Melhor absorção",
      "Suave para o estômago",
      "Melhora o sono",
      "Reduz ansiedade"
    ],
    featured: true
  },
  {
    name: "Citrato de Magnésio",
    bioavailability: "Alta",
    benefits: [
      "Boa absorção",
      "Suporte digestivo",
      "Energia celular"
    ]
  },
  {
    name: "Malato de Magnésio",
    bioavailability: "Média-Alta",
    benefits: [
      "Aumenta energia",
      "Reduz fadiga",
      "Suporte muscular"
    ]
  },
  {
    name: "Óxido de Magnésio",
    bioavailability: "Baixa",
    benefits: [
      "Menor custo",
      "Baixa absorção",
      "Não recomendado"
    ]
  }
];

export function MagnesiumForms() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Nem Todo Magnésio é Igual
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda as diferentes formas e por que escolhemos a melhor para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {forms.map((form, index) => (
            <Card 
              key={index}
              className={`p-6 space-y-4 hover-elevate relative ${
                form.featured ? 'border-primary border-2' : ''
              }`}
              data-testid={`card-form-${index}`}
            >
              {form.featured && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-chart-2 hover:bg-chart-2 text-white"
                  data-testid="badge-featured"
                >
                  Nossa Fórmula
                </Badge>
              )}
              
              <div>
                <h3 className="font-semibold text-lg mb-2" data-testid={`text-form-name-${index}`}>
                  {form.name}
                </h3>
                <Badge variant="outline" data-testid={`badge-bioavailability-${index}`}>
                  Biodisponibilidade: {form.bioavailability}
                </Badge>
              </div>

              <ul className="space-y-2">
                {form.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                      form.featured ? 'text-primary' : 'text-muted-foreground'
                    }`} />
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
