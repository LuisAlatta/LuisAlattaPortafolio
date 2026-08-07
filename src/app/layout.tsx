import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { profile, siteUrl } from "@/data/profile";

const title = "Luis Alatta | Desarrollador Full Stack";
const description = profile.subheadline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Luis Alatta",
  },
  description,
  keywords: ["Luis Alatta", "Luis Fernando Alatta Torres", "Desarrollador Web", "Full Stack Developer", "Next.js", "React", "Programador", "Portafolio", "Arequipa", "Perú"],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: "Luis Alatta — Portafolio",
    title,
    description,
    images: [
      {
        url: "/perfil.webp",
        width: 384,
        height: 640,
        alt: "Luis Alatta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/perfil.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  alternateName: profile.name,
  jobTitle: profile.headline,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arequipa",
    addressCountry: "PE",
  },
  sameAs: [
    profile.social.github,
    profile.social.linkedin,
  ].filter((u) => u && !u.includes("placeholder")),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
