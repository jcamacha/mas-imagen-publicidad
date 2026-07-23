"use client";

import { useEffect, useRef } from "react";

export default function OrganicTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    // Waves: full-page coverage, fast, dark
    const waves = [
      { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.20, opacity: 0.85 },
      { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.50, opacity: 0.75 },
      { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,   yOff: h * 0.80, opacity: 0.65 },
    ];

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const t = performance.now() * 0.001;

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

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block z-0"
      style={{ pointerEvents: "none", filter: "blur(25px)" }}
      aria-hidden="true"
      id="trail-canvas"
    />
  );
}
