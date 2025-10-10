import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, BadgeCheck } from "lucide-react";
import testimonial1 from "@assets/stock_images/professional_headsho_8bb76a72.jpg";
import testimonial2 from "@assets/stock_images/professional_headsho_d2bed3ba.jpg";
import testimonial3 from "@assets/stock_images/professional_headsho_ea7127d3.jpg";

const testimonials = [
  {
    name: "Paul Chek",
    role: "Fundador do Instituto CHEK",
    image: testimonial1,
    rating: 5,
    text: "Os produtos BiOptimizers são genuinamente eficazes. Eu pessoalmente os uso e recomendo para meus clientes que buscam otimização de saúde de alto nível."
  },
  {
    name: "Dr. Joseph Mercola",
    role: "MD, Especialista em Saúde Natural",
    image: testimonial2,
    rating: 5,
    text: "Se você não tem magnésio suficiente, seu corpo simplesmente não consegue funcionar de forma ideal... preparando o cenário para a deterioração da função metabólica."
  },
  {
    name: "Andrea Rosanoff",
    role: "Ph.D. em Nutrição",
    image: testimonial3,
    rating: 5,
    text: "O marcador cardiovascular mais importante é uma baixa proporção de magnésio para cálcio nas células. Magnesium Breakthrough aborda isso de forma abrangente."
  }
];

export function Testimonial() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Endossado por Especialistas de Classe Mundial
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais de saúde líderes confiam e recomendam Magnesium Breakthrough
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 space-y-4 hover-elevate"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold flex items-center gap-1">
                    {testimonial.name}
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-chart-2 text-chart-2" />
                ))}
              </div>

              <p className="text-sm" data-testid={`text-testimonial-${index}`}>
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
