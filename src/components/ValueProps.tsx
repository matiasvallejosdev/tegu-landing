import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  title: string;
  image: string;
  imageAlt: string;
  features: string[];
  reversed?: boolean;
}

function ValueCard({ title, image, imageAlt, features, reversed }: ValueCardProps) {
  return (
    <div
      className={cn(
        "relative p-6 md:p-8 rounded-3xl bg-gradient-card",
        "border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-6",
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        )}
      >
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={imageAlt}
            width={192}
            height={192}
            className="w-36 md:w-48 h-auto"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
            {title}
          </h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-primary" />
                </span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ValueProps() {
  return (
    <section id="value-props" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Una plataforma, dos oportunidades
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ya sea que busques ayuda o quieras ofrecer tus servicios, Tegu es para vos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ValueCard
            title="Para quienes buscan servicios"
            image="/assets/tegu-chill.png"
            imageAlt="Tegu relajado con tablet"
            features={[
              "Profesionales verificados y confiables",
              "IA que encuentra el match perfecto",
              "Proceso simple, sin complicaciones",
            ]}
          />
          <ValueCard
            title="Para quienes ofrecen servicios"
            image="/assets/tegu-earn.png"
            imageAlt="Tegu con bolsa de dinero"
            features={[
              "Acceso a oportunidades reales",
              "Tu perfil genera confianza",
              "Cobra de forma segura",
            ]}
            reversed
          />
        </div>
      </div>
    </section>
  );
}
