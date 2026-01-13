"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight tracking-tight">
            Precios transparentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Estamos diseñando planes justos para todos.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-gray-100 p-1.5 rounded-full">
            <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-gray-900 shadow-sm">
              Mensual
            </button>
            <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900">
              Anual
            </button>
            <span className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 rounded-full">
              Ahorrá 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Basic Plan - Smaller */}
          <div className="w-full max-w-sm lg:max-w-xs bg-gray-50 rounded-3xl p-6 md:p-7 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg lg:mt-8">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Básico</h3>
                <p className="text-sm text-gray-600">
                  Para empezar sin compromisos
                </p>
              </div>

              <div className="py-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-400">
                  Gratis
                </div>
                <p className="text-xs text-gray-500 mt-1">Para siempre</p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-blue-100 p-1">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Publicá tu necesidad
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-blue-100 p-1">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Hasta 3 propuestas
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-blue-100 p-1">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Profesionales verificados
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-blue-100 p-1">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Soporte básico</span>
                </li>
              </ul>

              <Button
                variant="outline"
                className="w-full py-5 text-sm font-semibold rounded-xl bg-transparent"
                disabled
              >
                Próximamente
              </Button>
            </div>
          </div>

          {/* Pro Plan - Featured & Larger */}
          <div className="w-full max-w-sm lg:max-w-md bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-10 shadow-2xl relative transform lg:scale-105 border-2 border-blue-400">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                Más Popular
              </span>
            </div>

            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Pro</h3>
                <p className="text-base text-blue-100">
                  Para profesionales activos
                </p>
              </div>

              <div className="py-4">
                <div className="text-base md:text-lg font-bold">
                  Próximamente
                </div>
                <p className="text-sm text-blue-100 mt-1">
                  Precio especial de lanzamiento
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">Todo lo de Básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">Propuestas ilimitadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">Prioridad en resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">
                    IA que aprende tus preferencias
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">Soporte prioritario</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-white/20 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-base">Insignia verificada</span>
                </li>
              </ul>

              <Button
                className="w-full bg-white text-blue-600 hover:bg-gray-100 py-6 text-base font-semibold rounded-xl shadow-lg"
                disabled
              >
                Próximamente
              </Button>

              <p className="text-center text-sm text-blue-100">
                Acceso anticipado para primeros usuarios
              </p>
            </div>
          </div>

          {/* Enterprise Plan - Smaller */}
          <div className="w-full max-w-sm lg:max-w-xs bg-gray-50 rounded-3xl p-6 md:p-7 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-lg lg:mt-8">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Empresas</h3>
                <p className="text-sm text-gray-600">
                  Para equipos y organizaciones
                </p>
              </div>

              <div className="py-3">
                <div className="text-base md:text-lg font-bold text-gray-900">
                  Personalizado
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Según tus necesidades
                </p>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-purple-100 p-1">
                    <Check className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">Todo lo de Pro</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-purple-100 p-1">
                    <Check className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Múltiples usuarios
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-purple-100 p-1">
                    <Check className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Gestión centralizada
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-purple-100 p-1">
                    <Check className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    Integraciones API
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="mt-0.5 rounded-full bg-purple-100 p-1">
                    <Check className="h-3.5 w-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">Soporte dedicado</span>
                </li>
              </ul>

              <Button
                variant="outline"
                className="w-full py-5 text-sm font-semibold rounded-xl bg-transparent"
                disabled
              >
                Próximamente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
