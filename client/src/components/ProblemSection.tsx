import { AlertCircle, Frown, Moon, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Moon,
    title: "Deficiência Metabólica",
    description: "Sem magnésio suficiente, seu corpo não consegue funcionar de forma ideal, deteriorando a função metabólica"
  },
  {
    icon: Frown,
    title: "Risco Cardiovascular",
    description: "Baixa proporção de magnésio para cálcio nas células é o marcador cardiovascular mais crítico"
  },
  {
    icon: Zap,
    title: "Estresse e Fadiga Crônica",
    description: "A deficiência de magnésio está diretamente ligada ao estresse, ansiedade e exaustão constante"
  }
];

export function ProblemSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            A Deficiência de Magnésio Está Sabotando Sua Saúde?
          </h2>
          <p className="text-lg text-slate-300">
            "Se você não tem magnésio suficiente, seu corpo simplesmente não consegue funcionar de forma ideal... 
            preparando o cenário para a deterioração da função metabólica." - Dr. Joseph Mercola, MD
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
