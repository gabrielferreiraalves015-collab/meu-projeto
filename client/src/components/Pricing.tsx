import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

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
    features: [
      "1 Frasco (30 dias)",
      "90 cápsulas veganas",
      "7 formas de magnésio",
      "Garantia 365 dias"
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
    features: [
      "5 Frascos (5 meses)",
      "Frete GRÁTIS",
      "Máxima economia",
      "Garantia 365 dias",
      "Suporte prioritário"
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
    features: [
      "3 Frascos (90 dias)",
      "Frete GRÁTIS",
      "Ideal para casais",
      "Garantia 365 dias",
      "Suporte profissional"
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
              className={`p-6 space-y-4 relative hover-elevate flex flex-col ${
                plan.featured ? 'border-primary border-2 shadow-xl' : ''
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {/* Badge no topo */}
              {plan.badge && (
                <div className={`${plan.badgeColor} text-center py-2 -mx-6 -mt-6 mb-2 font-semibold text-sm tracking-wide`}>
                  {plan.badge}
                </div>
              )}

              {/* Conteúdo centralizado */}
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold" data-testid={`text-plan-name-${index}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                {/* Imagem do produto - placeholder */}
                <div className="w-32 h-32 bg-muted/30 rounded-md flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Produto</span>
                </div>

                {/* Preço */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary" data-testid={`text-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-lg text-muted-foreground">{plan.perBottle}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.totalPrice}
                  </div>
                </div>

                {/* Badge de economia */}
                <div className="text-sm font-bold text-destructive">
                  {plan.savePercent}
                </div>

                {/* Oferta de assinatura */}
                <div className="flex items-center gap-2">
                  <img src="/api/placeholder/20/20" alt="Subscribe" className="w-5 h-5" />
                  <span className="text-sm font-medium text-destructive underline">
                    {plan.subscribeOffer}
                  </span>
                </div>

                {/* Free shipping */}
                <div className="text-sm font-medium">
                  {plan.freeShipping}
                </div>

                {/* Features */}
                <ul className="space-y-2 w-full">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão */}
              <Button 
                className={`w-full ${
                  plan.featured || plan.popular
                    ? 'bg-[#0891b2] hover:bg-[#0891b2]/90 text-white' 
                    : ''
                }`}
                variant={plan.featured || plan.popular ? 'default' : 'default'}
                size="lg"
                data-testid={`button-select-plan-${index}`}
              >
                SUBSCRIBE
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
