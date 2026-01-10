"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Image
                src="/assets/tegulogo.png"
                alt="Tegu"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-text-primary font-medium text-sm">
                Proximamente en Argentina
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-6">
              El futuro de los servicios del hogar
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Conectamos talento verificado con quienes lo necesitan.
              Impulsado por inteligencia artificial.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToWaitlist}
                className={cn(
                  "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200",
                  "bg-primary text-white hover:bg-primary-dark",
                  "shadow-lg hover:shadow-xl hover:-translate-y-1",
                  "w-full sm:w-auto"
                )}
              >
                Unirme a la lista de espera
              </button>
            </div>

            <p className="mt-6 text-sm text-text-secondary/80">
              Ya hay <span className="font-semibold text-text-primary">247</span> personas en la lista
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-90" />
              <Image
                src="/assets/tegu-hi.png"
                alt="Tegu mascota saludando"
                width={400}
                height={400}
                className="relative z-10 w-64 md:w-80 lg:w-96 h-auto animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-text-primary/60 hover:text-text-primary transition-colors animate-bounce-gentle"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
