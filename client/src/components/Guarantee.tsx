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
              Garantia Incondicional de 365 Dias
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experimente Magnesium Breakthrough completamente sem risco por um ano inteiro.
            </p>
          </div>

          <div className="space-y-6 pt-6 max-w-3xl mx-auto text-left">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Compra de 1 Frasco:</div>
                  <p className="text-sm text-muted-foreground">
                    Se você comprar 1 frasco e não ficar completamente satisfeito, dentro de 365 dias 
                    você poderá solicitar um reembolso total (menos custos de envio e manuseio).
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold mb-1">Compra de Múltiplos Frascos:</div>
                  <p className="text-sm text-muted-foreground">
                    Se você optar por economizar e comprar um pacote com vários frascos, ainda terá a 
                    garantia de 365 dias. Se não ficar satisfeito após o primeiro frasco, você pode devolver 
                    os frascos restantes, ainda fechados, em até 365 dias após a compra, e nós reembolsaremos 
                    o valor integral do seu pedido (menos os custos de envio e manuseio).
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-4 bg-muted/50 border-muted">
              <p className="text-xs text-muted-foreground">
                *Observação: Se você abrir uma segunda garrafa, não terá mais direito à garantia acima. 
                Fale com nossa equipe para um reembolso proporcional.
              </p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
