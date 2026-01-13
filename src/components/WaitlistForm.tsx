"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  Search,
  Wrench,
  Sparkles,
  ArrowRight,
  Share2,
  Hammer,
  Paintbrush,
  Zap,
  Droplets,
  Wind,
  Scissors,
  Mail,
  Phone,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { submitToWaitlist } from "@/app/actions/waitlist";

type Step = "contact" | "purpose" | "categories" | "success";
type Purpose = "buscar" | "ofrecer" | "ambas" | null;
type ContactMethod = "email" | "phone";

type ServiceCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "plomeria", name: "Plomería", icon: <Droplets className="w-6 h-6" /> },
  { id: "electricidad", name: "Electricidad", icon: <Zap className="w-6 h-6" /> },
  { id: "pintura", name: "Pintura", icon: <Paintbrush className="w-6 h-6" /> },
  { id: "carpinteria", name: "Carpintería", icon: <Hammer className="w-6 h-6" /> },
  { id: "jardineria", name: "Jardinería", icon: <Scissors className="w-6 h-6" /> },
  { id: "limpieza", name: "Limpieza", icon: <Sparkles className="w-6 h-6" /> },
  { id: "aire", name: "Aire Acondicionado", icon: <Wind className="w-6 h-6" /> },
  { id: "reparaciones", name: "Reparaciones", icon: <Wrench className="w-6 h-6" /> },
];

type WaitlistFormProps = {
  initialCount: number;
};

export default function WaitlistForm({ initialCount }: WaitlistFormProps) {
  const [step, setStep] = useState<Step>("contact");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState<Purpose>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [waitlistNumber, setWaitlistNumber] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Check if user already submitted
  useEffect(() => {
    const saved = localStorage.getItem("tegu-waitlist");
    if (saved) {
      const data = JSON.parse(saved);
      setWaitlistNumber(data.position);
      setStep("success");
    }
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactMethod === "email" && email) {
      setStep("purpose");
    } else if (contactMethod === "phone" && phone) {
      setStep("purpose");
    }
  };

  const handlePurposeSelect = (selectedPurpose: Purpose) => {
    setPurpose(selectedPurpose);
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSubmitToWaitlist = async (categories: string[] = []) => {
    setIsSubmitting(true);
    setError(null);

    const result = await submitToWaitlist({
      contactMethod,
      email: email || null,
      phone: phone || null,
      purpose: purpose!,
      categories,
    });

    setIsSubmitting(false);

    if (!result.success) {
      setError(result.error || "Ocurrió un error.");
      return false;
    }

    const position = result.position || 1;
    setWaitlistNumber(position);

    // Save to localStorage
    localStorage.setItem("tegu-waitlist", JSON.stringify({ position }));

    return true;
  };

  const handleFinalize = async () => {
    if (purpose) {
      if (purpose === "ofrecer" || purpose === "ambas") {
        setStep("categories");
      } else {
        const success = await handleSubmitToWaitlist([]);
        if (success) {
          setStep("success");
        }
      }
    }
  };

  const handleCategoriesSubmit = async () => {
    if (selectedCategories.length > 0) {
      const success = await handleSubmitToWaitlist(selectedCategories);
      if (success) {
        setStep("success");
      }
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "Tegü - Tareas resueltas, oportunidades creadas",
      text: "Encontrá Tegu Pros verificados para cualquier tarea. Simple, rápido y seguro.",
      url: window.location.origin + "/#waitlist",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed, ignore
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Clipboard failed, ignore
      }
    }
  };

  const showCategoriesStep = purpose === "ofrecer" || purpose === "ambas";

  return (
    <section
      id="waitlist"
      className="bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                step === "contact" ? "w-12 bg-blue-600" : "w-2 bg-gray-300"
              )}
            />
            <div
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                step === "purpose" ? "w-12 bg-blue-600" : "w-2 bg-gray-300"
              )}
            />
            {showCategoriesStep && (
              <div
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  step === "categories" ? "w-12 bg-blue-600" : "w-2 bg-gray-300"
                )}
              />
            )}
            <div
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                step === "success" ? "w-12 bg-blue-600" : "w-2 bg-gray-300"
              )}
            />
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Step 1: Contact */}
            {step === "contact" && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Mascot */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/tegu-hi.png"
                      alt="Tegü"
                      width={200}
                      height={200}
                      className="drop-shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6 text-center md:text-left w-full">
                    <div className="space-y-2">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Unite a la lista de espera
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Sé de los primeros en probar Tegü
                      </p>
                    </div>

                    {/* Contact Method Toggle */}
                    <div className="flex justify-center md:justify-start">
                      <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 shadow-inner">
                        <button
                          type="button"
                          onClick={() => setContactMethod("email")}
                          className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                            contactMethod === "email"
                              ? "bg-blue-600 text-white shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          )}
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod("phone")}
                          className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                            contactMethod === "phone"
                              ? "bg-purple-600 text-white shadow-sm"
                              : "text-gray-600 hover:text-gray-900"
                          )}
                        >
                          <Phone className="w-4 h-4" />
                          Teléfono
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      {contactMethod === "email" ? (
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-14 text-lg px-6 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        />
                      ) : (
                        <Input
                          type="tel"
                          placeholder="+54 9 351 123 4567"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="h-14 text-lg px-6 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        />
                      )}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                      >
                        Continuar
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Purpose */}
            {step === "purpose" && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Mascot */}
                  <div className="flex-shrink-0 hidden md:block">
                    <Image
                      src="/assets/tegu-form.png"
                      alt="Tegü"
                      width={200}
                      height={200}
                      className="drop-shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6 w-full">
                    <div className="space-y-2 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        ¿Qué te trae a Tegü?
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Esto nos ayuda a personalizar tu experiencia
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Option 1 */}
                      <button
                        onClick={() => handlePurposeSelect("buscar")}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all hover:shadow-md",
                          purpose === "buscar"
                            ? "border-blue-600 bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            purpose === "buscar"
                              ? "bg-gradient-to-br from-blue-500 to-blue-600"
                              : "bg-gradient-to-br from-gray-100 to-gray-200"
                          )}
                        >
                          <Search
                            className={cn(
                              "w-6 h-6",
                              purpose === "buscar" ? "text-white" : "text-gray-600"
                            )}
                          />
                        </div>
                        <span className="text-lg font-medium text-left">
                          Necesito resolver una tarea
                        </span>
                      </button>

                      {/* Option 2 */}
                      <button
                        onClick={() => handlePurposeSelect("ofrecer")}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all hover:shadow-md",
                          purpose === "ofrecer"
                            ? "border-purple-600 bg-purple-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            purpose === "ofrecer"
                              ? "bg-gradient-to-br from-purple-500 to-purple-600"
                              : "bg-gradient-to-br from-gray-100 to-gray-200"
                          )}
                        >
                          <Wrench
                            className={cn(
                              "w-6 h-6",
                              purpose === "ofrecer" ? "text-white" : "text-gray-600"
                            )}
                          />
                        </div>
                        <span className="text-lg font-medium text-left">
                          Quiero ofrecer mis servicios
                        </span>
                      </button>

                      {/* Option 3 */}
                      <button
                        onClick={() => handlePurposeSelect("ambas")}
                        className={cn(
                          "w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all hover:shadow-md",
                          purpose === "ambas"
                            ? "border-cyan-600 bg-cyan-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            purpose === "ambas"
                              ? "bg-gradient-to-br from-cyan-500 to-cyan-600"
                              : "bg-gradient-to-br from-gray-100 to-gray-200"
                          )}
                        >
                          <Sparkles
                            className={cn(
                              "w-6 h-6",
                              purpose === "ambas" ? "text-white" : "text-gray-600"
                            )}
                          />
                        </div>
                        <span className="text-lg font-medium text-left">
                          Ambas cosas
                        </span>
                      </button>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      onClick={handleFinalize}
                      disabled={!purpose || isSubmitting}
                      size="lg"
                      className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Registrando...
                        </>
                      ) : (
                        <>
                          Continuar
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Categories (for professionals) */}
            {step === "categories" && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Mascot */}
                  <div className="flex-shrink-0 hidden md:block">
                    <Image
                      src="/assets/tegu-form.png"
                      alt="Tegü"
                      width={200}
                      height={200}
                      className="drop-shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6 w-full">
                    <div className="space-y-2 text-center md:text-left">
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        ¿Qué servicios ofrecés?
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Seleccioná una o más categorías
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SERVICE_CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className={cn(
                            "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all hover:shadow-md",
                            selectedCategories.includes(category.id)
                              ? "border-purple-600 bg-purple-50 shadow-md"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                        >
                          <div
                            className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
                              selectedCategories.includes(category.id)
                                ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
                                : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600"
                            )}
                          >
                            {category.icon}
                          </div>
                          <span className="text-base font-medium text-left">
                            {category.name}
                          </span>
                          {selectedCategories.includes(category.id) && (
                            <CheckCircle className="w-5 h-5 text-purple-600 ml-auto" />
                          )}
                        </button>
                      ))}
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        onClick={handleCategoriesSubmit}
                        disabled={selectedCategories.length === 0 || isSubmitting}
                        size="lg"
                        className="w-full h-14 text-lg rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Registrando...
                          </>
                        ) : (
                          <>
                            Finalizar
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                      {selectedCategories.length > 0 && (
                        <p className="text-sm text-center text-muted-foreground mt-3">
                          {selectedCategories.length}{" "}
                          {selectedCategories.length === 1
                            ? "categoría seleccionada"
                            : "categorías seleccionadas"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === "success" && (
              <div className="space-y-8 text-center">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                </div>

                {/* Mascot */}
                <div className="flex justify-center">
                  <Image
                    src="/assets/tegu-earn.png"
                    alt="Tegü celebrando"
                    width={280}
                    height={280}
                    className="drop-shadow-lg"
                  />
                </div>

                {/* Success Message */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    ¡Listo! Estás en la lista
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Sos el{" "}
                    <span className="font-bold text-blue-600">
                      #{waitlistNumber || "..."}
                    </span>{" "}
                    en la lista. Te avisamos cuando lancemos.
                  </p>
                </div>

                {/* Share Button */}
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="lg"
                  className="h-14 text-lg px-8 rounded-2xl border border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5 text-green-600" />
                      ¡Link copiado!
                    </>
                  ) : (
                    <>
                      <Share2 className="mr-2 w-5 h-5" />
                      Compartir
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
