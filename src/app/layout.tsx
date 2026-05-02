import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Background3DLoader } from "@/components/Background3DLoader";

export const metadata: Metadata = {
  title: "Luis Alatta | Portafolio Profesional",
  description: "Desarrollador Web / Full Stack Developer con experiencia en soluciones funcionales, web corporativas y aplicaciones móviles. Conoce mis proyectos y tecnologías.",
  keywords: ["Luis Alatta", "Luis Fernando Alatta Torres", "Desarrollador Web", "Full Stack Developer", "Programador", "Portafolio"],
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://flagcdn.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Background3DLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
