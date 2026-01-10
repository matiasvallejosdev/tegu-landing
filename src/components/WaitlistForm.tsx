"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Home, Wrench, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "client" | "provider" | "both" | null;
type Step = 1 | 2 | 3;

interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onClick: () => void;
}

function OptionCard({ icon, label, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 w-full text-left",
        selected
          ? "border-primary bg-primary/5 shadow-md"
          : "border-border hover:border-primary/50 bg-white"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
          selected ? "bg-primary text-white" : "bg-background-secondary text-text-secondary"
        )}
      >
        {icon}
      </div>
      <span className={cn("font-medium", selected ? "text-text-primary" : "text-text-secondary")}>
        {label}
      </span>
      {selected && (
        <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Check size={14} className="text-white" />
        </div>
      )}
    </button>
  );
}

export default function WaitlistForm() {
  const [step, setStep] = useState<Step>(1);
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>(null);
  const [position] = useState(Math.floor(Math.random() * 100) + 248);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setStep(2);
    }
  };

  const handleUserTypeSubmit = () => {
    if (userType) {
      console.log("Waitlist submission:", { email, userType });
      setStep(3);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-10 lg:p-12">
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    s === step ? "w-8 bg-primary" : "w-2 bg-border",
                    s < step && "bg-primary"
                  )}
                />
              ))}
            </div>

            {/* Step 1: Email */}
            {step === 1 && (
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/tegu-hi.png"
                    alt="Tegu saludando"
                    width={200}
                    height={200}
                    className="w-32 md:w-48 h-auto"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    Unite a la lista de espera
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Se de los primeros en probar Tegu
                  </p>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className={cn(
                        "w-full px-5 py-4 rounded-xl text-lg",
                        "border-2 border-border focus:border-primary",
                        "outline-none transition-colors",
                        "placeholder:text-text-secondary/50"
                      )}
                    />
                    <button
                      type="submit"
                      className={cn(
                        "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl",
                        "bg-primary text-white font-semibold text-lg",
                        "hover:bg-primary-dark transition-colors",
                        "shadow-lg hover:shadow-xl"
                      )}
                    >
                      Continuar
                      <ArrowRight size={20} />
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Step 2: User Type */}
            {step === 2 && (
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/tegu-form.png"
                    alt="Tegu con formulario"
                    width={200}
                    height={200}
                    className="w-32 md:w-48 h-auto"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 text-center md:text-left">
                    Que te trae a Tegu?
                  </h2>
                  <p className="text-text-secondary mb-6 text-center md:text-left">
                    Esto nos ayuda a personalizar tu experiencia
                  </p>
                  <div className="space-y-3 mb-6">
                    <OptionCard
                      icon={<Home size={24} />}
                      label="Busco servicios para mi hogar"
                      selected={userType === "client"}
                      onClick={() => setUserType("client")}
                    />
                    <OptionCard
                      icon={<Wrench size={24} />}
                      label="Quiero ofrecer mis servicios"
                      selected={userType === "provider"}
                      onClick={() => setUserType("provider")}
                    />
                    <OptionCard
                      icon={<Sparkles size={24} />}
                      label="Ambas cosas"
                      selected={userType === "both"}
                      onClick={() => setUserType("both")}
                    />
                  </div>
                  <button
                    onClick={handleUserTypeSubmit}
                    disabled={!userType}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl",
                      "font-semibold text-lg transition-all",
                      userType
                        ? "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl"
                        : "bg-border text-text-secondary cursor-not-allowed"
                    )}
                  >
                    Finalizar
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <div className="text-center py-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/assets/tegu-earn.png"
                    alt="Tegu celebrando"
                    width={200}
                    height={200}
                    className="w-40 md:w-56 h-auto"
                  />
                </div>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Listo! Estas en la lista
                </h2>
                <p className="text-text-secondary mb-6">
                  Sos el <span className="font-bold text-primary">#{position}</span> en la lista.
                  Te avisamos cuando lancemos.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="px-6 py-3 rounded-xl bg-background-secondary text-text-secondary font-medium hover:bg-border transition-colors">
                    Compartir
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
