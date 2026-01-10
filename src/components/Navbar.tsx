"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Image
              src="/assets/tegu-logo2.png"
              alt="Tegu"
              width={100}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </div>
          <button
            onClick={scrollToWaitlist}
            className={cn(
              "px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-medium text-sm md:text-base transition-all duration-200",
              "bg-primary text-white hover:bg-primary-dark",
              "shadow-md hover:shadow-lg hover:-translate-y-0.5"
            )}
          >
            Unirme a la lista
          </button>
        </div>
      </div>
    </nav>
  );
}
