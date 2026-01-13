"use client";

import { useState } from "react";
import Image from "next/image";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"cliente" | "profesional">(
    "cliente"
  );

  const clienteSteps = [
    {
      image: "/assets/tegu-client-003.png",
      title: "Describí tu tarea",
      description: "Contá que necesitas en menos de un minuto",
      color: "blue",
    },
    {
      image: "/assets/tegu-client-001.png",
      title: "Recibí ofertas",
      description: "Profesionales verificados te envían propuestas",
      color: "purple",
    },
    {
      image: "/assets/tegu-client-002.png",
      title: "Elegí y contrata",
      description: "Compara, chatea y contrata con confianza",
      color: "green",
    },
  ];

  const profesionalSteps = [
    {
      image: "/assets/tegu-pro-001.png",
      title: "Creá tu perfil",
      description: "Completá tu información y verificación en minutos",
      color: "blue",
    },
    {
      image: "/assets/tegu-pro-002.png",
      title: "Recibí solicitudes",
      description: "Nuestra IA te conecta con clientes ideales",
      color: "purple",
    },
    {
      image: "/assets/tegu-pro-003.png",
      title: "Trabajá y cobrá",
      description: "Realiza el trabajo y recibe pagos seguros",
      color: "green",
    },
  ];

  const steps = activeTab === "cliente" ? clienteSteps : profesionalSteps;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          badge: "bg-blue-600",
        };
      case "purple":
        return {
          badge: "bg-purple-600",
        };
      case "green":
        return {
          badge: "bg-green-600",
        };
      default:
        return {
          badge: "bg-gray-600",
        };
    }
  };

  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
            Como funciona
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
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 relative">
            {/* Connecting Lines */}
            <div
              className="hidden md:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-300 to-blue-200 -z-0"
              style={{ top: "7rem" }}
            />

            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center space-y-6 group"
                >
                  {/* Mascot Image Container */}
                  <div className="relative">
                    <div className="w-56 h-56 relative group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </div>
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-11 h-11 ${colors.badge} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-20`}
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
        </div>
      </div>
    </section>
  );
}
