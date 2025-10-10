import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Experimente os benefícios",
    price: "R$ 97",
    period: "/mês",
    savings: null,
    features: [
      "1 Frasco (30 dias)",
      "Frete grátis",
      "Garantia 100 dias",
      "Suporte por email"
    ]
  },
  {
    name: "Melhor Valor",
    description: "Plano mais popular",
    price: "R$ 67",
    period: "/mês",
    savings: "Economize 31%",
    featured: true,
    features: [
      "3 Frascos (90 dias)",
      "Frete grátis prioritário",
      "Garantia 100 dias",
      "Suporte prioritário",
      "Bônus: Guia de Bem-Estar"
    ]
  },
  {
    name: "Transformação",
    description: "Resultados duradouros",
    price: "R$ 57",
    period: "/mês",
    savings: "Economize 41%",
    features: [
      "6 Frascos (6 meses)",
      "Frete grátis express",
      "Garantia 100 dias",
      "Suporte VIP 24/7",
      "Bônus: Kit Completo"
    ]
  }
];

export function Pricing() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Escolha Seu Plano de Transformação
          </h2>
          <p className="text-lg text-muted-foreground">
            Invista na sua saúde com garantia total de satisfação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 space-y-6 relative hover-elevate ${
                plan.featured ? 'border-primary border-2 shadow-xl scale-105' : ''
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {plan.featured && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-chart-2 hover:bg-chart-2 text-white"
                  data-testid="badge-best-value"
                >
                  Mais Popular
                </Badge>
              )}

              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold" data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                {plan.savings && (
                  <Badge variant="outline" className="text-primary" data-testid={`badge-savings-${index}`}>
                    {plan.savings}
                  </Badge>
                )}
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold" data-testid={`text-price-${index}`}>
                  {plan.price}
                </div>
                <div className="text-muted-foreground">{plan.period}</div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.featured 
                    ? 'bg-chart-2 hover:bg-chart-2 text-white border-chart-2' 
                    : ''
                }`}
                variant={plan.featured ? 'default' : 'outline'}
                size="lg"
                data-testid={`button-select-plan-${index}`}
              >
                Começar Agora
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          💳 Aceitamos Visa, Mastercard, PIX e PayPal
        </div>
      </div>
    </div>
  );
}
