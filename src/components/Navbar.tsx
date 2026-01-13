"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#waitlist");
    } else {
      const element = document.getElementById("waitlist");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/assets/tegu-logo2.png"
                alt="Tegu"
                width={40}
                height={40}
                className="h-10 w-10 md:h-11 md:w-11 rounded-full object-cover"
                priority
              />
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={scrollToWaitlist}
                className="hidden md:flex h-10 rounded-full border border-gray-200 bg-transparent hover:bg-gray-50 text-sm md:text-base px-4 shadow-none"
              >
                Unirme a la lista
              </Button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden h-10 w-10 flex items-center justify-center border border-gray-200 hover:bg-gray-50 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 space-y-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Por qué Tegü
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Legal links */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="/legal"
              className="block text-sm text-gray-500 hover:text-purple-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Términos y condiciones
            </a>
            <a
              href="/legal"
              className="block text-sm text-gray-500 hover:text-purple-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Política de privacidad
            </a>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-200">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-md"
              onClick={scrollToWaitlist}
            >
              Unirme a la lista
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
