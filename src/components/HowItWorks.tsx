"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, MessageSquare, CheckCircle, User, Bell, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "client" | "provider";

interface Step {
  icon: React.ReactNode;
  image?: string;
  title: string;
  description: string;
}

const clientSteps: Step[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Describi tu tarea",
    description: "Conta que necesitas en menos de un minuto",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    image: "/assets/tegu-calling.png",
    title: "Recibi ofertas",
    description: "Profesionales verificados te envian propuestas",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Elegi y contrata",
    description: "Compara, chatea y contrata con confianza",
  },
];

const providerSteps: Step[] = [
  {
    icon: <User className="w-6 h-6" />,
    image: "/assets/tegu-form.png",
    title: "Crea tu perfil",
    description: "Mostra tus habilidades y experiencia",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Encontra tareas",
    description: "Recibi alertas de trabajos que coinciden",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    image: "/assets/tegu-earn.png",
    title: "Trabaja y cobra",
    description: "Completa el trabajo y cobra de forma segura",
  },
];

function StepCard({ step, index, total }: { step: Step; index: number; total: number }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {index < total - 1 && (
        <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
      )}

      <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center mb-4 shadow-md">
        {step.image ? (
          <Image
            src={step.image}
            alt={step.title}
            width={80}
            height={80}
            className="w-16 h-16 object-contain"
          />
        ) : (
          <div className="text-primary">{step.icon}</div>
        )}
      </div>

      <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm mb-4">
        {index + 1}
      </div>

      <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
      <p className="text-text-secondary text-sm max-w-[200px]">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabType>("client");

  const steps = activeTab === "client" ? clientSteps : providerSteps;

  return (
    <section className="py-20 md:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Como funciona
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Simple, rapido y seguro. Asi de facil es usar Tegu.
          </p>

          <div className="inline-flex p-1 bg-white rounded-full shadow-md border border-border/50">
            <button
              onClick={() => setActiveTab("client")}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200",
                activeTab === "client"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Soy Cliente
            </button>
            <button
              onClick={() => setActiveTab("provider")}
              className={cn(
                "px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200",
                activeTab === "provider"
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              Soy Profesional
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <StepCard
              key={`${activeTab}-${index}`}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/assets/tegu-helping.png"
            alt="Tegu ayudando"
            width={300}
            height={200}
            className="w-48 md:w-64 h-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
