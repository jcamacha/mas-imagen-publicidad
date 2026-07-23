import type { Metadata } from "next";
import { Fraunces, Manrope, Climate_Crisis } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const climateCrisis = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate-crisis",
  display: "swap",
});

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
        className={`${climateCrisis.variable} ${fraunces.variable} ${manrope.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
