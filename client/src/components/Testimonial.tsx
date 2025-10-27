import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, BadgeCheck } from "lucide-react";
import testimonial1 from "@assets/stock_images/professional_headsho_8bb76a72.jpg";
import testimonial2 from "@assets/stock_images/professional_headsho_d2bed3ba.jpg";
import testimonial3 from "@assets/stock_images/professional_headsho_ea7127d3.jpg";

const testimonials = [
  {
    name: "Paul Chek",
    role: "Founder of CHEK Institute",
    image: testimonial1,
    rating: 5,
    text: "BiOptimizers products are genuinely effective. I personally use them and recommend them to my clients seeking high-level health optimization."
  },
  {
    name: "Dr. Joseph Mercola",
    role: "MD, Natural Health Expert",
    image: testimonial2,
    rating: 5,
    text: "If you don't have enough magnesium, your body simply cannot function optimally... setting the stage for deterioration of metabolic function."
  },
  {
    name: "Andrea Rosanoff",
    role: "Ph.D. in Nutrition",
    image: testimonial3,
    rating: 5,
    text: "The most important cardiovascular marker is a low magnesium to calcium ratio in cells. Magnesium Breakthrough addresses this comprehensively."
  }
];

export function Testimonial() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Endorsed by World-Class Experts
          </h2>
          <p className="text-lg text-muted-foreground">
            Leading health professionals trust and recommend Magnesium Breakthrough
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

        <div className="max-w-xl mx-auto mt-12 space-y-4">
          <Button 
            size="lg" 
            className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base w-full"
            data-testid="button-testimonial-cta"
            asChild
          >
            <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
              BUY WITH DISCOUNT OFFICIAL SITE
            </a>
          </Button>
          <p className="text-center text-sm font-semibold text-muted-foreground">
            TAP ON THE BUTTON ABOVE FOR MORE INFORMATION
          </p>
        </div>
      </div>
    </div>
  );
}
