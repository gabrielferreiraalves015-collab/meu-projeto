import { AlertCircle, Frown, Moon, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      </div>
    </div>
  );
}
