"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

export default function StepCounter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = createTimeline({ loop: false });

            // Step 1 appears
            tl.add('.step-1', {
              scale: [0, 1],
              opacity: [0, 1],
              ease: 'outBack',
              duration: 600,
            })
            // Step 1 attenuates, Step 2 appears
            .add('.step-1', {
              opacity: 0.4,
              ease: 'outQuad',
              duration: 300,
            }, '+=300')
            .add('.step-2', {
              scale: [0, 1],
              opacity: [0, 1],
              ease: 'outBack',
              duration: 600,
            }, '-=300')
            // Step 2 attenuates, Step 3 appears
            .add('.step-2', {
              opacity: 0.4,
              ease: 'outQuad',
              duration: 300,
            }, '+=300')
            .add('.step-3', {
              scale: [0, 1],
              opacity: [0, 1],
              ease: 'outBack',
              duration: 600,
            }, '-=300');

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
      {/* Paso 1 */}
      <div className="text-center space-y-4">
        <div
          data-step="1"
          className="step-1 text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center"
        >
          1
        </div>
        <h3 className="text-xl font-bold font-fraunces text-text">
          Platicamos
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
          Entendemos tu negocio, tu mercado y tus objetivos para diseñar una estrategia integral a tu medida.
        </p>
      </div>

      {/* Paso 2 */}
      <div className="text-center space-y-4">
        <div
          data-step="2"
          className="step-2 text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center"
        >
          2
        </div>
        <h3 className="text-xl font-bold font-fraunces text-text">
          Creamos
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
          Desarrollamos tu sitio web, programamos tus campañas y producimos las prendas físicas en nuestro taller.
        </p>
      </div>

      {/* Paso 3 */}
      <div className="text-center space-y-4">
        <div
          data-step="3"
          className="step-3 text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center"
        >
          3
        </div>
        <h3 className="text-xl font-bold font-fraunces text-text">
          Creces
        </h3>
        <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
          Lanzamos las campañas, medimos los resultados de visitas y cotizaciones, y realizamos los ajustes necesarios.
        </p>
      </div>
    </div>
  );
}
