import { Card } from "@/components/ui/card";
import { Shield, CheckCircle2 } from "lucide-react";

export function Guarantee() {
  return (
    <div className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-6">
          <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-10 w-10 text-primary" data-testid="icon-guarantee" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Garantia de 100 Dias de Satisfação Total
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experimente nosso Magnésio Premium sem risco. Se não sentir os benefícios 
              em até 100 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="space-y-2">
              <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
              <div className="font-semibold">100 Dias</div>
              <div className="text-sm text-muted-foreground">Para testar</div>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
              <div className="font-semibold">Devolução Total</div>
              <div className="text-sm text-muted-foreground">Reembolso completo</div>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
              <div className="font-semibold">Sem Burocracia</div>
              <div className="text-sm text-muted-foreground">Processo simples</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
