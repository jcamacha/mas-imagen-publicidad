"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Más Imagen resolvió todo lo que necesitábamos. Diseñaron nuestra tienda en línea, manejaron nuestras campañas de Meta, y en el mismo pedido nos entregaron 300 uniformes bordados para nuestro personal. El incremento en ventas digitales fue inmediato y el equipo luce impecable.",
    name: "Sofía Ruiz",
    company: "Taquerías El Califa de León (CDMX)",
    metric: "+120% Pedidos Online & 300+ Uniformes",
  },
  {
    quote:
      "Llevábamos meses buscando un proveedor de serigrafía que entendiera nuestra identidad digital. Con Más Imagen, nuestro merch promocional coincide exactamente con el branding de nuestro sitio web. Además, redujimos a la mitad la gestión de proveedores.",
    name: "Alejandro Mendoza",
    company: "Café de Altura Coatepec",
    metric: "+45% Tráfico Web & 1,500 Tazas Merch",
  },
  {
    quote:
      "Nuestra constructora necesitaba letreros físicos para las obras y al mismo tiempo posicionarnos en Google para captar clientes corporativos. Su estrategia digital nos trajo 3 leads de alto valor en el primer mes, y las lonas del taller son de la más alta resistencia.",
    name: "Ing. Carlos Peralta",
    company: "Grupo Constructor Cumbres (Toluca)",
    metric: "3 Leads Premium & 50+ Displays de Obra",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="text-center flex flex-col items-center justify-center"
          >
            {/* SVG Comillas */}
            <svg
              className="w-12 h-12 text-accent/20 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 10.017-10.426V6.75c-3.84 0-5.486 2.051-5.748 5.638h5.748V21H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 10.017-10.426V6.75C6.177 6.75 4.542 8.801 4.28 12.388H10.02V21H0z" />
            </svg>

            <blockquote className="text-xl md:text-2xl font-medium font-fraunces text-text leading-relaxed mb-6 max-w-3xl">
              &ldquo;{TESTIMONIALS[index].quote}&rdquo;
            </blockquote>
 
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-accent bg-accent-light border border-accent/20">
                Métrica: {TESTIMONIALS[index].metric}
              </span>
            </div>
 
            <cite className="not-italic">
              <span className="block text-base font-bold text-text font-manrope">
                {TESTIMONIALS[index].name}
              </span>
              <span className="block text-sm text-text-muted font-manrope">
                {TESTIMONIALS[index].company}
              </span>
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === index ? "bg-accent w-8" : "bg-border hover:bg-text-muted"
            }`}
            aria-label={`Testimonio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
