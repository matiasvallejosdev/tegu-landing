"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroProps = {
  waitlistCount: number;
};

export default function Hero({ waitlistCount }: HeroProps) {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const element = document.getElementById("value-props");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-purple-100 text-purple-700 border-purple-200 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              Proximamente en Argentina 🇦🇷
            </Badge>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Tareas resueltas,{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  oportunidades creadas
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-2xl">
                Conectamos personas con profesionales verificados para resolver cualquier tarea. Simple, seguro e impulsado por IA.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToWaitlist}
              >
                Unirme a la lista de espera
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border border-gray-200 bg-transparent hover:bg-gray-50"
                onClick={scrollToNext}
              >
                Conocer más
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-base text-muted-foreground justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <Image
                  src="/assets/face_001.png"
                  alt="Usuario"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full border-2 border-background object-cover"
                />
                <Image
                  src="/assets/face_002.png"
                  alt="Usuario"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full border-2 border-background object-cover"
                />
                <Image
                  src="/assets/face_003.png"
                  alt="Usuario"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full border-2 border-background object-cover"
                />
              </div>
              <span className="font-medium text-lg">
                <span className="text-foreground font-bold">{waitlistCount} personas</span> ya están en la lista
              </span>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/assets/tegu-hi.png"
                alt="Tegü mascot"
                width={500}
                height={500}
                className="relative drop-shadow-2xl w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <button
        onClick={scrollToNext}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full" />
        </div>
      </button>
    </section>
  );
}
