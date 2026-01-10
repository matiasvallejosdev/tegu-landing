import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { label: "Terminos", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Contacto", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-text-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/assets/tegu-logo2.png"
              alt="Tegu"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-white/70 hover:text-white transition-colors",
                  "text-sm font-medium"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={cn(
                  "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
                  "text-white/70 hover:text-white hover:bg-white/20 transition-all"
                )}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 w-full">
            <p className="text-white/50 text-sm">
              2025 Tegu. Hecho con amor en Argentina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
