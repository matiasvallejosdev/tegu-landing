"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Que es Tegu?",
    answer:
      "Tegu es una plataforma que conecta personas que necesitan servicios para el hogar con profesionales verificados, usando inteligencia artificial para encontrar el match perfecto.",
  },
  {
    question: "Cuando estara disponible?",
    answer:
      "Estamos en fase de desarrollo. Unite a la lista de espera para ser de los primeros en acceder cuando lancemos.",
  },
  {
    question: "En que ciudades operara?",
    answer:
      "Comenzaremos en Buenos Aires y AMBA, con planes de expansion a otras ciudades de Argentina.",
  },
  {
    question: "Es gratis usar Tegu?",
    answer:
      "Crear una cuenta y publicar tareas es gratis. Solo cobramos una pequena comision cuando se completa un trabajo exitosamente.",
  },
  {
    question: "Como se verifican los profesionales?",
    answer:
      "Validamos identidad, antecedentes y referencias. Ademas, el sistema de resenas permite que la comunidad evalue cada experiencia.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-semibold text-text-primary pr-4">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "flex-shrink-0 text-text-secondary transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-text-secondary leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-background-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-text-secondary">
            Todo lo que necesitas saber sobre Tegu
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQAccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
