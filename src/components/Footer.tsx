import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/tegulogo.png"
                alt="Tegü"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-2xl font-bold">Tegü</span>
            </div>
            <p className="text-purple-200 leading-relaxed max-w-sm">
              Tareas resueltas, oportunidades creadas. Conectamos personas con
              profesionales verificados.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Producto Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Producto</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Empresa Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Empresa</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Carreras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Términos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Licencias
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-200 text-sm">
              © 2025 Tegü. Hecho con amor en Argentina.
            </p>
            <div className="flex items-center gap-6 text-sm text-purple-200">
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
