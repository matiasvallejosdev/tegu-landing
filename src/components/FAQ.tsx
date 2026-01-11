"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Todo lo que necesitas saber sobre Tegü
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline hover:bg-gray-50/50 transition-colors">
                  ¿Qué es Tegü?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base text-gray-700 leading-relaxed">
                  Tegü es una plataforma que conecta personas que necesitan
                  resolver tareas con profesionales verificados, usando
                  inteligencia artificial para encontrar el match perfecto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline hover:bg-gray-50/50 transition-colors">
                  ¿Cuándo estará disponible?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base text-gray-700 leading-relaxed">
                  Estamos trabajando para lanzar Tegü próximamente en Argentina.
                  Unite a nuestra lista de espera para ser de los primeros en
                  probar la plataforma cuando esté lista.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline hover:bg-gray-50/50 transition-colors">
                  ¿En qué ciudades operará?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base text-gray-700 leading-relaxed">
                  Comenzaremos operando en Córdoba Capital. A medida que
                  crezcamos, expandiremos nuestra cobertura a más ciudades
                  de Argentina.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline hover:bg-gray-50/50 transition-colors">
                  ¿Es gratis usar Tegü?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base text-gray-700 leading-relaxed">
                  Para clientes, usar Tegü es completamente gratis. No cobramos
                  comisiones. Próximamente implementaremos un sistema de
                  suscripciones para profesionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-lg font-semibold hover:no-underline hover:bg-gray-50/50 transition-colors">
                  ¿Cómo se verifican los profesionales?
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-base text-gray-700 leading-relaxed">
                  Cada profesional pasa por un proceso de verificación que
                  incluye validación de identidad, referencias laborales, y
                  revisión de experiencia. Además, contamos con un sistema de
                  reseñas donde los usuarios pueden calificar el servicio
                  recibido.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
