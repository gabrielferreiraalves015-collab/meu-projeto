import { AlertCircle, Frown, Moon, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Moon,
    title: "Metabolic Deficiency",
    description: "Without enough magnesium, your body cannot function optimally, deteriorating metabolic function"
  },
  {
    icon: Frown,
    title: "Cardiovascular Risk",
    description: "Low magnesium to calcium ratio in cells is the most critical cardiovascular marker"
  },
  {
    icon: Zap,
    title: "Chronic Stress and Fatigue",
    description: "Magnesium deficiency is directly linked to stress, anxiety and constant exhaustion"
  }
];

export function ProblemSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Is Magnesium Deficiency Sabotaging Your Health?
          </h2>
          <p className="text-lg text-slate-300">
            "If you don't have enough magnesium, your body simply cannot function optimally... 
            setting the stage for deterioration of metabolic function." - Dr. Joseph Mercola, MD
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-slate-800 border-slate-700 hover-elevate"
                data-testid={`card-problem-${index}`}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-md bg-red-500/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white" data-testid={`text-problem-title-${index}`}>
                    {problem.title}
                  </h3>
                  <p className="text-slate-300">
                    {problem.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-xl mx-auto mt-12 space-y-4">
          <Button 
            size="lg" 
            className="bg-chart-2 hover:bg-chart-2 text-white border-chart-2 text-base w-full"
            data-testid="button-problem-cta"
            asChild
          >
            <a href="https://mr4ii.bemobtrcks.com/click/1?ns=c%3Dda6c1ffe-83de-45be-b5d4-07c3fde6d3b7..l%3D2..a%3D0..b%3D0" target="_blank" rel="noopener noreferrer">
              BUY WITH DISCOUNT OFFICIAL SITE
            </a>
          </Button>
          <p className="text-center text-sm font-semibold text-white/80">
            TAP ON THE BUTTON ABOVE FOR MORE INFORMATION
          </p>
        </div>
      </div>
    </div>
  );
}
