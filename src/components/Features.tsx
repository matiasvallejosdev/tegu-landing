"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
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
          <div className="group bg-gray-100 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Mascot Image */}
              <div className="relative w-32 h-32 mx-auto group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/tegu-logo-ai.png"
                  alt="Tegü IA"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
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

          {/* Feature 2 - Tegu Pros */}
          <div className="group bg-gray-100 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Mascot Image */}
              <div className="relative w-32 h-32 mx-auto group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/tegu-logo-pro.png"
                  alt="Tegu Pro"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Tegu Pros verificados
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  Cada perfil es validado con reseñas reales de personas reales
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Simple y rapido */}
          <div className="group bg-gray-100 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <div className="flex-1 space-y-6">
              {/* Mascot Image */}
              <div className="relative w-32 h-32 mx-auto group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/tegu-logo-time.png"
                  alt="Tegü Rápido"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
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
