import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import OrganicTrail from "@/components/OrganicTrail";
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
        {/* SVG filter for pure black & white text */}
        <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
          <filter id="bnw-filter">
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="5" intercept="-2" />
              <feFuncG type="linear" slope="5" intercept="-2" />
              <feFuncB type="linear" slope="5" intercept="-2" />
            </feComponentTransfer>
          </filter>
        </svg>
        <OrganicTrail />
        {children}
      </body>
    </html>
  );
}
