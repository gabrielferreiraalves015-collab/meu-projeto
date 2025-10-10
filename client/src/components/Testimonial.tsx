import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, BadgeCheck } from "lucide-react";
import testimonial1 from "@assets/stock_images/professional_headsho_8bb76a72.jpg";
import testimonial2 from "@assets/stock_images/professional_headsho_d2bed3ba.jpg";
import testimonial3 from "@assets/stock_images/professional_headsho_ea7127d3.jpg";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Executiva",
    image: testimonial1,
    rating: 5,
    text: "Finalmente consigo dormir bem! Após 2 semanas usando o Magnésio Premium, minha insônia desapareceu. Acordo descansada e com mais energia para o dia."
  },
  {
    name: "Carlos Mendes",
    role: "Atleta",
    image: testimonial2,
    rating: 5,
    text: "Redução incrível nas câimbras musculares. Como atleta, isso fez toda diferença no meu desempenho. Altamente recomendado!"
  },
  {
    name: "Maria Santos",
    role: "Professora",
    image: testimonial3,
    rating: 5,
    text: "Minha ansiedade diminuiu significativamente. Sinto-me mais calma e focada no trabalho. Produto de qualidade excepcional!"
  }
];

export function Testimonial() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Veja o Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de pessoas já transformaram sua saúde com nosso Magnésio Premium
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
