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

    // Wave parameters
    const waves = [
      { amp: h * 0.22, freq: 0.0008, speed: 0.03, phase: 0, yOff: h * 0.35, opacity: 0.55 },
      { amp: h * 0.18, freq: 0.0012, speed: 0.04, phase: 2, yOff: h * 0.55, opacity: 0.40 },
      { amp: h * 0.15, freq: 0.0010, speed: -0.035, phase: 4, yOff: h * 0.70, opacity: 0.30 },
    ];

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const t = performance.now() * 0.001;

      for (const wave of waves) {
        ctx.beginPath();
        ctx.moveTo(0, h);

        // Draw wave across the screen
        for (let x = 0; x <= w; x += 2) {
          const y =
            wave.yOff +
            Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
            Math.sin(x * wave.freq * 2.3 + t * wave.speed * 1.4) * wave.amp * 0.3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        // Fill with gradient
        const gradient = ctx.createLinearGradient(0, wave.yOff - wave.amp, 0, wave.yOff + wave.amp);
        gradient.addColorStop(0, `rgba(20, 20, 20, 0)`);
        gradient.addColorStop(0.3, `rgba(20, 20, 20, ${wave.opacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(20, 20, 20, ${wave.opacity})`);
        gradient.addColorStop(0.7, `rgba(20, 20, 20, ${wave.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(20, 20, 20, 0)`);

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
      className="fixed inset-0 w-full h-full block"
      style={{ pointerEvents: "none", filter: "blur(60px)" }}
      aria-hidden="true"
    />
  );
}
