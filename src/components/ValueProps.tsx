"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ValueProps() {
  return (
    <section id="value-props" className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-24 md:py-32">
      <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
          Una plataforma, dos oportunidades
        </h2>
        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
          Ya sea que busques ayuda o quieras ofrecer tus servicios, Tegü es para vos.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 - Para quienes buscan servicios */}
        <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
          <div className="space-y-6">
            {/* Card Header */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Para quienes necesitan resolver tareas
              </h3>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Tegu Pros verificados y confiables
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Precios claros y transparentes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Resolvé rápido, sin complicaciones
                </span>
              </li>
            </ul>

            {/* Mascot Image */}
            <div className="flex justify-center pt-6">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="/assets/tegu-chill.png"
                  alt="Tegü relajado"
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Para quienes ofrecen servicios */}
        <div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
          <div className="space-y-6">
            {/* Card Header */}
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Para Tegu Pros
              </h3>
            </div>

            {/* Benefits List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Flujo constante de trabajo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Construí tu reputación digital
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-gray-700 leading-relaxed">
                  Cobrá de forma segura (próximamente)
                </span>
              </li>
            </ul>

            {/* Mascot Image */}
            <div className="flex justify-center pt-6">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image
                  src="/assets/tegu-earn.png"
                  alt="Tegü con dinero"
                  fill
                  className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
