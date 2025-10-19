import { Button } from "@/components/ui/button";
import { Shield, Star } from "lucide-react";
import productImage from "@assets/magnesium-bottle.png";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Magnesium Breakthrough: A Única Fórmula do Mundo com{" "}
                <span className="text-primary">7 Formas de Magnésio</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Para reverter a deficiência crônica, reduzir o estresse e acelerar seu metabolismo. 
                Você viu a pesquisa. Funciona. Garantia de 365 dias ou seu dinheiro de volta.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                size="lg" 
                className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base w-full"
                data-testid="button-hero-cta"
              >
                QUERO MEU MAGNESIUM AGORA! 👉
              </Button>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="font-medium">PEDIDO 100% SEGURO</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <span className="text-muted-foreground">Formas de pagamento aceitas</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-chart-2 text-chart-2" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold" data-testid="text-rating">4.9/5 de 12.000+ clientes</div>
                <div className="text-muted-foreground">Avaliações verificadas</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 blur-3xl -z-10" />
            <img
              src={productImage}
              alt="Magnesium Breakthrough - Frasco com 90 cápsulas"
              className="w-auto h-[400px] md:h-[500px] object-contain"
              data-testid="img-hero-product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
