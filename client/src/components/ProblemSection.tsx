import { AlertCircle, Frown, Moon, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Moon,
    title: "Noites Sem Descanso",
    description: "Dificuldade para dormir e insônia crônica afetando sua qualidade de vida"
  },
  {
    icon: Frown,
    title: "Estresse Constante",
    description: "Ansiedade e tensão muscular deixando você esgotado mentalmente"
  },
  {
    icon: Zap,
    title: "Falta de Energia",
    description: "Cansaço persistente e fadiga que impedem você de aproveitar o dia"
  }
];

export function ProblemSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Você Está Cansado de Sofrer com Esses Problemas?
          </h2>
          <p className="text-lg text-slate-300">
            A deficiência de magnésio afeta milhões de pessoas, causando problemas sérios de saúde
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
