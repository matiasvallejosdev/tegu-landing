import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tegu - El futuro de los servicios del hogar",
  description: "Conectamos talento verificado con quienes lo necesitan. Plataforma de servicios del hogar impulsada por IA.",
  openGraph: {
    title: "Tegu - El futuro de los servicios del hogar",
    description: "Conectamos talento verificado con quienes lo necesitan.",
    images: ["/assets/tegulogo.png"],
  },
  icons: {
    icon: "/tegulogo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
