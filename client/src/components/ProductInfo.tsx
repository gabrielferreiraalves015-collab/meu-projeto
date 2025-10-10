import { Card } from "@/components/ui/card";
import { CheckCircle2, Leaf, Droplet, Shield } from "lucide-react";
import productImage from "@assets/stock_images/supplement_bottle_pr_02a0f8ae.jpg";

const features = [
  {
    icon: CheckCircle2,
    title: "Alta Biodisponibilidade",
    description: "Glicinato de magnésio para máxima absorção"
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Ingredientes puros e orgânicos certificados"
  },
  {
    icon: Droplet,
    title: "Fácil Digestão",
    description: "Suave para o estômago, sem efeitos colaterais"
  },
  {
    icon: Shield,
    title: "Testado em Laboratório",
    description: "Pureza e potência verificadas por terceiros"
  }
];

const specs = [
  { label: "Produto", value: "Magnesium Breakthrough Versão 4.0" },
  { label: "Quantidade", value: "90 cápsulas veganas" },
  { label: "Duração", value: "30 dias (dose: 3 cápsulas/dia)" },
  { label: "Modo de Usar", value: "3 cápsulas ao dia, preferencialmente à noite" },
  { label: "Isenções", value: "Sem glúten, soja, laticínios, OGM" },
  { label: "Adequado para", value: "Vegetarianos e veganos" }
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
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Fórmula Científica Inigualável
              </h2>
              <p className="text-lg text-muted-foreground">
                7 formas de magnésio para absorção e eficácia máximas. Ao contrário dos suplementos comuns, 
                Magnesium Breakthrough é projetado para resultados reais.
              </p>
              <p className="text-sm text-muted-foreground mt-3 italic">
                "Eu uso magnésio para qualquer pessoa que queira otimizar sua saúde cardiovascular." 
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

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Especificações do Produto</h3>
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
