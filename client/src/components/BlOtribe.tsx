import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Heart, Video, Gift, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Interação com Especialistas",
    description: "Aproveite interações com Matt Gallant, Wade Lightheart, Mr. Noots e outros influenciadores de saúde de ponta"
  },
  {
    icon: GraduationCap,
    title: "Aprendizado Gratuito",
    description: "Aprenda com os maiores especialistas em saúde da área GRATUITAMENTE. Muitos cobram milhares de dólares por hora"
  },
  {
    icon: Heart,
    title: "Comunidade Motivada",
    description: "Motive-se cercando-se de pessoas motivadas e com ideias semelhantes"
  },
  {
    icon: Video,
    title: "Conteúdo Exclusivo",
    description: "Mergulhos profundos em vários tópicos e perguntas e respostas ao vivo TODA SEMANA"
  },
  {
    icon: Gift,
    title: "Prêmios Mensais",
    description: "Brindes mensais para os membros mais valiosos da comunidade"
  }
];

export function BlOtribe() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge className="bg-chart-2 hover:bg-chart-2 text-white text-sm px-4 py-1">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              BÔNUS GRATUITO E EXCLUSIVO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold">
              Acesso Imediato à Família BlOtribe
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Comunidade de Saúde Mais Valiosa da Internet - 
              <span className="font-semibold text-foreground"> Incluído GRATUITAMENTE</span> com sua compra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-3 hover-elevate"
                  data-testid={`card-blotribe-${index}`}
                >
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
            <p className="text-center text-sm text-muted-foreground">
              <strong className="text-foreground">Diferencial Importante:</strong> Existem grupos de saúde que cobram 
              centenas de dólares por ano por comunidades menos valiosas. Este é um presente sem compromisso para você.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
