"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { animate, stagger } from "animejs";

const slides = [
  { src: "/mockup-playera.jpg", alt: "Playera blanca con logo de gato y audífonos impreso en el pecho" },
  { src: "/mockup-gorra.jpg", alt: "Gorra negra con logo de gato y audífonos bordado en el frente" },
  { src: "/mockup-taza.jpg", alt: "Taza de cerámica blanca con logo de gato y audífonos impreso en el costado" },
  { src: "/mockup-termo.jpg", alt: "Termo metálico de acero inoxidable con logo de gato y audífonos grabado" },
  { src: "/mockup-madera.jpg", alt: "Placa de madera con logo de gato y audífonos grabado con láser" },
  { src: "/mockup-lona.jpg", alt: "Lona publicitaria exterior con logo de gato y audífonos impreso" },
  { src: "/mockup-botella.jpg", alt: "Botella de vidrio con logo de gato y audífonos impreso en el cuerpo" },
  { src: "/mockup-envase.jpg", alt: "Caja de empaque blanca con logo de gato y audífonos impreso" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    // No anime.js needed — dots use CSS transitions + conditional classes
  }, [current]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="dot w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
