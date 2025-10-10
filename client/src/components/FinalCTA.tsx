import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold">
              Pronto Para Transformar Sua Saúde?
            </h2>
            <p className="text-lg text-white/90">
              Junte-se a mais de 12.000 pessoas que já melhoraram seu sono, 
              reduziram o estresse e aumentaram sua energia com Magnésio Premium
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 min-w-[200px]"
              data-testid="button-final-cta"
            >
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Oferta por tempo limitado</span>
            </div>
          </div>

          <div className="pt-6 text-sm text-white/80">
            ✓ Garantia de 100 dias • ✓ Frete grátis • ✓ Pagamento seguro
          </div>
        </div>
      </div>
    </div>
  );
}
