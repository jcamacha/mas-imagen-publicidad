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

            // Step 1: number scale 0->1, text fade in, line 1 connect to step 2
            tl.add(".step-1-num", {
              scale: [0, 1],
              opacity: [0, 1],
              duration: 800,
              easing: "outElastic(1, .5)",
            })
            .add(".step-1-text", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: "outQuad",
            }, "-=400")
            .add(".step-line-1", {
              scaleX: [0, 1],
              duration: 600,
              easing: "outQuad",
            }, "-=300")
            // Step 2: number scale 0->1, text fade in, line 2 connect to step 3
            .add(".step-2-num", {
              scale: [0, 1],
              opacity: [0, 1],
              duration: 800,
              easing: "outElastic(1, .5)",
            }, "-=200")
            .add(".step-2-text", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: "outQuad",
            }, "-=400")
            .add(".step-line-2", {
              scaleX: [0, 1],
              duration: 600,
              easing: "outQuad",
            }, "-=300")
            // Step 3: number scale 0->1, text fade in
            .add(".step-3-num", {
              scale: [0, 1],
              opacity: [0, 1],
              duration: 800,
              easing: "outElastic(1, .5)",
            }, "-=200")
            .add(".step-3-text", {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              easing: "outQuad",
            }, "-=400");

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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
      {/* Paso 1 */}
      <div className="relative text-center space-y-4">
        {/* Line to next step */}
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-accent origin-left scale-x-0 step-line step-line-1" />
        <div className="step-1-num text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center">
          1
        </div>
        <div className="step-1-text opacity-0">
          <h3 className="text-xl font-bold font-fraunces text-text">
            Platicamos
          </h3>
          <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
            Entendemos tu negocio, tu mercado y tus objetivos para diseñar una estrategia integral a tu medida.
          </p>
        </div>
      </div>

      {/* Paso 2 */}
      <div className="relative text-center space-y-4">
        {/* Line to next step */}
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-accent origin-left scale-x-0 step-line step-line-2" />
        <div className="step-2-num text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center">
          2
        </div>
        <div className="step-2-text opacity-0">
          <h3 className="text-xl font-bold font-fraunces text-text">
            Creamos
          </h3>
          <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
            Desarrollamos tu sitio web, programamos tus campañas y producimos las prendas físicas en nuestro taller.
          </p>
        </div>
      </div>

      {/* Paso 3 */}
      <div className="relative text-center space-y-4">
        <div className="step-3-num text-6xl font-bold font-fraunces text-text tracking-tight opacity-0 inline-block origin-center">
          3
        </div>
        <div className="step-3-text opacity-0">
          <h3 className="text-xl font-bold font-fraunces text-text">
            Creces
          </h3>
          <p className="text-text-muted text-sm leading-relaxed font-manrope max-w-xs mx-auto">
            Lanzamos las campañas, medimos los resultados de visitas y cotizaciones, y realizamos los ajustes necesarios.
          </p>
        </div>
      </div>
    </div>
  );
}
