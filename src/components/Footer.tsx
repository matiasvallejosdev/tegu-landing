import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Nav Links */}
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/tegulogo.png"
              alt="Tegü"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tegü
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <a
              href="#how-it-works"
              className="hover:text-gray-900 transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-900 transition-colors"
            >
              Precios
            </a>
            <a href="/legal" className="hover:text-gray-900 transition-colors">
              Términos
            </a>
            <a
              href="/legal"
              className="hover:text-gray-900 transition-colors"
            >
              Privacidad
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200" />

        {/* Bottom Row: Copyright and Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Tegü. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/teguapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/teguapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/teguapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
