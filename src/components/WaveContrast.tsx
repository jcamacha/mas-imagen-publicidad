"use client";

import { useEffect, useRef } from "react";

/**
 * Uses the SAME wave math as OrganicTrail to detect when text is over a dark wave.
 * No canvas sampling needed — pure math, deterministic.
 */
export default function WaveContrast() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Same wave parameters as OrganicTrail.tsx
    function getWaveParams(h: number) {
      return [
        { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.15, opacity: 0.95 },
        { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.45, opacity: 0.85 },
        { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,  yOff: h * 0.75, opacity: 0.75 },
      ];
    }

    function check() {
      const h = window.innerHeight;
      const w = window.innerWidth;
      const waves = getWaveParams(h);
      const t = performance.now() * 0.001;

      const texts = document.querySelectorAll<HTMLElement>(
        "h1, h2, h3, h4, p, span, li, label"
      );

      for (const el of texts) {
        if (
          el.closest("nav") ||
          el.closest("header") ||
          el.closest("footer") ||
          el.closest("button") ||
          el.closest("input") ||
          el.closest("textarea") ||
          el.closest("select") ||
          el.closest(".bg-dark-section")
        )
          continue;

        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        // Check if any wave is covering this point
        let isDark = false;
        for (const wave of waves) {
          const waveY =
            wave.yOff +
            Math.sin(cx * wave.freq + t * wave.speed + wave.phase) * wave.amp +
            Math.sin(cx * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) *
              wave.amp *
              0.35;

          // Text is over the dark wave if it's near the wave peak
          // The wave fills downward and has blur, so check a wide band
          const band = wave.amp * 1.2;
          if (cy > waveY - band && cy < waveY + band) {
            isDark = true;
            break;
          }
        }

        el.style.color = isDark ? "#ffffff" : "";
      }

      rafRef.current = requestAnimationFrame(check);
    }

    rafRef.current = requestAnimationFrame(check);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return null;
}
