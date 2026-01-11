"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Users,
  Check,
  Briefcase,
  ClipboardCheck,
  DollarSign,
} from "lucide-react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"cliente" | "profesional">(
    "cliente"
  );

  const clienteSteps = [
    {
      icon: FileText,
      title: "Describí tu tarea",
      description: "Contá que necesitas en menos de un minuto",
      color: "blue",
    },
    {
      icon: Users,
      title: "Recibí ofertas",
      description: "Profesionales verificados te envían propuestas",
      color: "purple",
    },
    {
      icon: Check,
      title: "Elegí y contrata",
      description: "Compara, chatea y contrata con confianza",
      color: "green",
    },
  ];

  const profesionalSteps = [
    {
      icon: Briefcase,
      title: "Creá tu perfil",
      description: "Completá tu información y verificación en minutos",
      color: "blue",
    },
    {
      icon: ClipboardCheck,
      title: "Recibí solicitudes",
      description: "Nuestra IA te conecta con clientes ideales",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Trabajá y crecé",
      description: "Completá trabajos y construí tu reputación",
      color: "green",
    },
  ];

  const steps = activeTab === "cliente" ? clienteSteps : profesionalSteps;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "from-blue-50 to-blue-100",
          icon: "text-blue-600",
          badge: "bg-blue-600",
        };
      case "purple":
        return {
          bg: "from-purple-50 to-purple-100",
          icon: "text-purple-600",
          badge: "bg-purple-600",
        };
      case "green":
        return {
          bg: "from-green-50 to-green-100",
          icon: "text-green-600",
          badge: "bg-green-600",
        };
      default:
        return {
          bg: "from-gray-50 to-gray-100",
          icon: "text-gray-600",
          badge: "bg-gray-600",
        };
    }
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Simple, rápido y seguro. Así de fácil es usar Tegü.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 shadow-inner">
            <button
              onClick={() => setActiveTab("cliente")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "cliente"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Soy Cliente
            </button>
            <button
              onClick={() => setActiveTab("profesional")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "profesional"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Soy Profesional
            </button>
          </div>
        </div>

        {/* Steps Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Lines */}
            <div
              className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"
              style={{ top: "6rem" }}
            />

            {/* Steps */}
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center space-y-6 group"
                >
                  {/* Icon Container */}
                  <div className="relative">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-500 relative z-10`}
                    >
                      <Icon className={`w-10 h-10 ${colors.icon}`} />
                    </div>
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 ${colors.badge} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Mascot Illustration */}
          <div className="flex justify-center mt-16">
            <div className="relative w-72 h-48 md:w-96 md:h-56">
              <Image
                src={
                  activeTab === "cliente"
                    ? "/assets/tegu-helping.png"
                    : "/assets/tegu-form.png"
                }
                alt="Tegü"
                fill
                className="object-contain drop-shadow-lg transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
