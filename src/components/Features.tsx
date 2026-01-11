"use client";

import { Brain, UserCheck, Gauge } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
            ¿Por qué Tegü?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Construimos la plataforma que hubiéramos querido tener.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 - IA que conecta */}
          <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500">
                <Brain className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  IA que conecta
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Nuestro algoritmo encuentra el match perfecto entre lo que
                  necesitas y quien puede ayudarte
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Profesionales verificados */}
          <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500">
                <UserCheck className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Profesionales verificados
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Cada perfil es validado. Reseñas reales de personas reales
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Simple y rapido */}
          <div className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-gray-200 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500">
                <Gauge className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Simple y rápido
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  De la idea al trabajo en minutos. Sin burocracia, sin esperas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
