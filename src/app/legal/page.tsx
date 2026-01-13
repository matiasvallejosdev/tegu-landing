"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Lock } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">("terms")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-3">Documentación legal</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Leé atentamente nuestros términos y condiciones antes de usar los servicios.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "terms"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <FileText className="w-5 h-5" />
              Términos y condiciones
            </button>
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "privacy"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Lock className="w-5 h-5" />
              Política de privacidad
            </button>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-12">
            {activeTab === "terms" ? (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Términos y Condiciones de Uso</h2>

                <p className="text-gray-600 mb-4">Última actualización: Enero 2026</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introducción</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Estos Términos regulan el uso de Tegu, plataforma operada por <strong>Tegu S.R.L.</strong>, con domicilio en Córdoba, Argentina.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Al usar Tegu, aceptás estos términos.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Definiciones</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li><strong>Tegu</strong>: Plataforma digital (web y app) en teguapp.com.ar</li>
                  <li><strong>Solicitante</strong>: Usuario que solicita servicios</li>
                  <li><strong>Prestador</strong>: Usuario que ofrece servicios</li>
                  <li><strong>Tarea</strong>: Servicio solicitado y realizado</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Elegibilidad</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Mayor de 18 años</li>
                  <li>Información veraz y actualizada</li>
                  <li>Una cuenta por persona</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Naturaleza de Tegu</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tegu es una <strong>plataforma de intermediación</strong>. No somos empleador ni prestador de servicios. Solo conectamos Solicitantes con Prestadores.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Los Prestadores son trabajadores independientes responsables de sus obligaciones fiscales y legales.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Uso Permitido</h3>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>Permitido:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Publicar tareas reales</li>
                  <li>Ofrecer servicios dentro de tus capacidades</li>
                  <li>Comunicarte respetuosamente</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>Prohibido:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Contenido falso, ofensivo o ilegal</li>
                  <li>Suplantación de identidad</li>
                  <li>Uso para actividades ilegales</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Pagos</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Tegu actualmente es <strong>gratuito</strong></li>
                  <li>Los pagos entre usuarios se coordinan a través de la plataforma</li>
                  <li>Podemos introducir tarifas en el futuro con notificación previa</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Calificaciones</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Las calificaciones deben reflejar experiencias reales</li>
                  <li>Tegu puede remover calificaciones abusivas o fraudulentas</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Contenido del Usuario</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Al subir contenido (fotos, descripciones), otorgás a Tegu licencia para usarlo en la plataforma.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Suspensión de Cuentas</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tegu puede suspender o cancelar cuentas que incumplan estos términos o presenten actividad fraudulenta.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Responsabilidad</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Tegu actúa como intermediario tecnológico</li>
                  <li>No garantizamos la idoneidad de los Prestadores</li>
                  <li>No somos responsables por daños derivados de las Tareas</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Propiedad Intelectual</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La marca, diseño y tecnología de Tegu son propiedad de Tegu S.R.L.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Modificaciones</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podemos modificar estos términos con notificación previa. El uso continuado implica aceptación.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">13. Ley Aplicable</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Estos términos se rigen por las leyes de Argentina. Jurisdicción: Tribunales de Córdoba, Argentina.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">14. Contacto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Email:</strong> legales@teguapp.com
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>© Tegu S.R.L. - Todos los derechos reservados</strong>
                </p>
              </div>
            ) : (
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Política de Privacidad</h2>

                <p className="text-gray-600 mb-4">Última actualización: Enero 2026</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introducción</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Esta política describe cómo <strong>Tegu S.R.L.</strong> (Córdoba, Argentina) recopila, usa y protege tus datos personales en teguapp.com.ar y la app Tegu.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Datos que Recopilamos</h3>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>Datos de registro:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Nombre, DNI, email, teléfono, foto de perfil</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>Datos de uso:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Tareas, mensajes, calificaciones, historial</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2"><strong>Datos técnicos:</strong></p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>IP, dispositivo, ubicación (si autorizás)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Uso de los Datos</h3>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Crear y administrar tu cuenta</li>
                  <li>Conectar Solicitantes con Prestadores</li>
                  <li>Enviar notificaciones</li>
                  <li>Brindar soporte</li>
                  <li>Mejorar la plataforma</li>
                  <li>Cumplir obligaciones legales</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Compartir Información</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Compartimos datos con:</p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li><strong>Otros usuarios</strong>: Información necesaria para completar tareas</li>
                  <li><strong>Proveedores de servicios</strong>: Hosting, analytics, soporte</li>
                  <li><strong>Autoridades</strong>: Cuando lo exija la ley</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>No vendemos tus datos personales.</strong>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Seguridad</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implementamos cifrado, controles de acceso y monitoreo para proteger tus datos.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Retención</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conservamos tus datos mientras tu cuenta esté activa y por el plazo legal necesario.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Tus Derechos</h3>
                <p className="text-gray-700 leading-relaxed mb-2">Podés:</p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4 space-y-2">
                  <li>Acceder a tus datos</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar eliminación</li>
                  <li>Oponerte a ciertos tratamientos</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para ejercer estos derechos: <strong>legales@teguapp.com</strong>
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Usamos cookies para mantener tu sesión y mejorar la experiencia. Podés gestionarlas desde tu navegador.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Menores</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tegu no está dirigido a menores de 18 años.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Modificaciones</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podemos actualizar esta política con notificación previa.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Contacto</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Email:</strong> legales@teguapp.com
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Reclamos:</strong> Si no resolvemos tu consulta, podés reclamar ante la AAIP (www.aaip.gob.ar)
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>© Tegu S.R.L. - Todos los derechos reservados</strong>
                </p>
              </div>
            )}
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Volver a Tegü
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 sm:py-8 mt-16 sm:mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © 2026 Tegü. Hecho con amor en Argentina.
        </div>
      </footer>
    </div>
  )
}
