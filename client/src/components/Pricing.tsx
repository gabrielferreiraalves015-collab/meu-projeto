import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Pacote Experimental",
    description: "Para conhecer o produto",
    price: "$49",
    period: "",
    originalPrice: null,
    savings: null,
    features: [
      "1 Frasco (30 dias)",
      "90 cápsulas veganas",
      "Acesso BlOtribe",
      "Garantia 365 dias",
      "Suporte profissional"
    ]
  },
  {
    name: "Pacote Ideal Para Casais",
    description: "Mais popular",
    price: "$127",
    period: "",
    originalPrice: "$147",
    savings: "Economize $20",
    featured: true,
    features: [
      "3 Frascos (90 dias)",
      "Frete GRÁTIS",
      "Acesso BlOtribe",
      "Garantia 365 dias",
      "Suporte prioritário",
      "Aproximadamente $1,40/dia"
    ]
  },
  {
    name: "Melhor Custo-Benefício",
    description: "Máxima economia",
    price: "$234",
    period: "",
    originalPrice: "$294",
    savings: "Economize $60",
    features: [
      "6 Frascos (6 meses)",
      "Frete GRÁTIS",
      "Acesso BlOtribe",
      "Garantia 365 dias",
      "Suporte VIP 24/7",
      "Aproximadamente $1,30/dia"
    ]
  }
];

export function Pricing() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Invista na Sua Saúde Hoje
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o pacote ideal para você. Todos com garantia incondicional de 365 dias.
          </p>
          <div className="pt-4">
            <Badge variant="outline" className="text-primary border-primary">
              🔬 Autoridade e Experiência: Otimizando Humanos Desde 2004
            </Badge>
          </div>
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
                {plan.originalPrice && (
                  <div className="text-lg text-muted-foreground line-through">
                    {plan.originalPrice}
                  </div>
                )}
                <div className="text-4xl font-bold" data-testid={`text-price-${index}`}>
                  {plan.price}
                </div>
                {plan.period && (
                  <div className="text-muted-foreground">{plan.period}</div>
                )}
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
                👉 Selecionar Este Pacote
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
