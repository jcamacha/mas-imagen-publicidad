"use client";

import React, { useEffect, useRef } from "react";

interface OrganicTrailProps {
  children?: React.ReactNode;
}

export default function OrganicTrail({ children }: OrganicTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Crear offscreen canvas
    if (!offscreenRef.current) {
      offscreenRef.current = document.createElement("canvas");
    }
    const offscreen = offscreenRef.current;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      
      // Configurar canvas principal
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Configurar canvas offscreen
      offscreen.width = w * dpr;
      offscreen.height = h * dpr;
      const oCtx = offscreen.getContext("2d");
      if (oCtx) {
        oCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Envolver el texto de H1 en spans para medir cada palabra de forma independiente y exacta
    const container = containerRef.current;
    if (container) {
      const h1 = container.querySelector("h1");
      if (h1 && !h1.dataset.wrapped) {
        const text = h1.innerText || h1.textContent || "";
        h1.innerHTML = text
          .split(/\s+/)
          .map(word => `<span>${word}</span>`)
          .join(" ");
        h1.dataset.wrapped = "true";
      }
    }

    // Parámetros de las ondas (NO CAMBIAR)
    const waves = [
      { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.15, opacity: 0.95 },
      { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.45, opacity: 0.85 },
      { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,  yOff: h * 0.75, opacity: 0.75 },
    ];

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      const t = performance.now() * 0.001;

      // 1. Dibujar ondas oscuras sobre fondo amarillo (visible)
      ctx.filter = "blur(25px)";
      for (const wave of waves) {
        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 2) {
          const y =
            wave.yOff +
            Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
            Math.sin(x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) * wave.amp * 0.35;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, wave.yOff - wave.amp, 0, wave.yOff + wave.amp);
        gradient.addColorStop(0, `rgba(15, 15, 15, ${wave.opacity})`);
        gradient.addColorStop(0.4, `rgba(15, 15, 15, ${wave.opacity})`);
        gradient.addColorStop(0.7, `rgba(15, 15, 15, ${wave.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(15, 15, 15, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Desactivar blur para dibujar la imagen offscreen (texto)
      ctx.filter = "none";

      // 2. Crear/limpiar offscreen canvas del mismo tamaño
      const offCanvas = offscreenRef.current;
      if (offCanvas) {
        const oCtx = offCanvas.getContext("2d");
        if (oCtx) {
          oCtx.clearRect(0, 0, w, h);
          oCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

          // 3. Dibujar fondo NEGRO en offscreen
          oCtx.filter = "none";
          oCtx.fillStyle = "black";
          oCtx.fillRect(0, 0, w, h);

          // 4. Dibujar las MISMAS ondas pero en BLANCO en offscreen
          oCtx.filter = "blur(25px)";
          for (const wave of waves) {
            oCtx.beginPath();
            oCtx.moveTo(0, h);

            for (let x = 0; x <= w; x += 2) {
              const y =
                wave.yOff +
                Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
                Math.sin(x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) * wave.amp * 0.35;
              oCtx.lineTo(x, y);
            }

            oCtx.lineTo(w, h);
            oCtx.closePath();

            const gradient = oCtx.createLinearGradient(0, wave.yOff - wave.amp, 0, wave.yOff + wave.amp);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${wave.opacity})`);
            gradient.addColorStop(0.4, `rgba(255, 255, 255, ${wave.opacity})`);
            gradient.addColorStop(0.7, `rgba(255, 255, 255, ${wave.opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            oCtx.fillStyle = gradient;
            oCtx.fill();
          }

          // Desactivar blur para el texto en offscreen
          oCtx.filter = "none";

          // 5. Dibujar texto en blanco sobre offscreen
          const h1 = containerRef.current?.querySelector("h1");
          if (h1) {
            const spans = h1.querySelectorAll("span");
            const computedStyle = window.getComputedStyle(h1);

            oCtx.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
            oCtx.textBaseline = "top";
            oCtx.fillStyle = "white";

            if ("letterSpacing" in oCtx) {
              oCtx.letterSpacing = computedStyle.letterSpacing;
            }

            // 6. Aplicar composite "destination-in" para recortar el duotono a los glifos
            oCtx.globalCompositeOperation = "destination-in";

            spans.forEach(span => {
              const rect = span.getBoundingClientRect();
              oCtx.fillText(span.textContent || "", rect.left, rect.top);
            });

            // Restaurar composite por defecto
            oCtx.globalCompositeOperation = "source-over";
          }

          // 7. Dibujar el offscreen sobre el canvas principal
          ctx.drawImage(offCanvas, 0, 0, w, h, 0, 0, w, h);
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full block z-0"
        aria-hidden="true"
        id="trail-canvas"
      />
      <div
        ref={containerRef}
        style={{ opacity: 0 }}
      >
        {children}
      </div>
    </>
  );
}
