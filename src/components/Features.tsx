import { Brain, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-2xl bg-white",
        "border border-border/50 shadow-md",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-card flex items-center justify-center mb-5">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

const features = [
  {
    icon: <Brain size={28} />,
    title: "IA que conecta",
    description:
      "Nuestro algoritmo encuentra el match perfecto entre lo que necesitas y quien puede ayudarte",
  },
  {
    icon: <Shield size={28} />,
    title: "Profesionales verificados",
    description:
      "Cada perfil es validado. Resenas reales de personas reales",
  },
  {
    icon: <Zap size={28} />,
    title: "Simple y rapido",
    description:
      "De la idea al trabajo en minutos. Sin burocracia, sin esperas",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Por que Tegu?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Construimos la plataforma que hubieramos querido tener.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
