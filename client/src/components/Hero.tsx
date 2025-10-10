import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@assets/stock_images/supplement_bottle_pr_02a0f8ae.jpg";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Transforme Sua Saúde com{" "}
                <span className="text-primary">Magnésio Premium</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Fórmula cientificamente comprovada para melhorar sono, reduzir estresse
                e aumentar sua energia naturalmente.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2"
                data-testid="button-hero-cta"
              >
                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-learn-more"
              >
                Saiba Mais
              </Button>
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

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-2/20 blur-3xl -z-10" />
            <img
              src={heroImage}
              alt="Magnésio Premium"
              className="w-full h-auto rounded-lg"
              data-testid="img-hero-product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
