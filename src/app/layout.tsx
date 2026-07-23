import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import OrganicTrailWrapper from "@/components/OrganicTrailWrapper";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Más Imagen Publicidad — Marketing Digital y Serigrafía",
  description:
    "Agencia de marketing digital con taller de serigrafía propio en EdoMex. Del pixel a la prenda: anuncios, webs, SEO, playeras, uniformes y más. Todo en un solo lugar.",
  keywords: [
    "agencia marketing digital",
    "serigrafía",
    "publicidad",
    "EdoMex",
    "SEO",
    "Google Ads",
    "diseño web",
    "uniformes empresariales",
    "Más Imagen Publicidad",
  ],
  openGraph: {
    title: "Más Imagen Publicidad — Marketing + Serigrafía",
    description:
      "Tu marca, donde sea que tus clientes la encuentren. Agencia digital con producción física propia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Layer 0: Organic animated blobs */}
        <OrganicTrailWrapper />

        {/* Layer 1: Grain texture */}
        <div className="grain-overlay" />

        {/* Layer 2: Content */}
        <div className="relative z-[2]">{children}</div>
      </body>
    </html>
  );
}
