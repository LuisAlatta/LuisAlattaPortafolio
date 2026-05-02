import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScrollProvider } from "@/components/smooth-scroll";
import { Background3DLoader } from "@/components/Background3DLoader";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
      <body
        className={`${fontInter.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <SmoothScrollProvider>
            <Background3DLoader />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
