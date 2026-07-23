"use client";

import { useEffect, useRef } from "react";

/**
 * Uses the SAME wave math as OrganicTrail to detect wave position.
 * Sets text white with !important when over dark wave area.
 */
export default function WaveContrast() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function getWaves(h: number) {
      return [
        { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.15 },
        { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.45 },
        { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,  yOff: h * 0.75 },
      ];
    }

    const SELECTOR =
      "h1, h2, h3, h4, p, span, li, label, .wave-text";
    const SKIP_SELECTOR =
      "nav, header, footer, button, input, textarea, select, .bg-dark-section, .no-wave";

    function check() {
      const h = window.innerHeight;
      const waves = getWaves(h);
      const t = performance.now() * 0.001;

      const texts = document.querySelectorAll<HTMLElement>(SELECTOR);

      for (const el of texts) {
        if (el.closest(SKIP_SELECTOR)) continue;

        const rect = el.getBoundingClientRect();
        // Sample multiple points: center, top-third, bottom-third
        const points = [
          { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
          { x: rect.left + rect.width * 0.3, y: rect.top + rect.height * 0.3 },
          { x: rect.left + rect.width * 0.7, y: rect.bottom - rect.height * 0.3 },
        ];

        let darkCount = 0;
        for (const p of points) {
          for (const wave of waves) {
            const waveY =
              wave.yOff +
              Math.sin(p.x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
              Math.sin(p.x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) *
                wave.amp *
                0.35;

            // Wave fills DOWNWARD from the curve. Text below curve = over dark fill.
            // Add buffer for blur spread
            if (p.y > waveY - wave.amp * 0.3) {
              darkCount++;
              break;
            }
          }
        }

        // Majority of sample points over dark → white text
        if (darkCount >= 2) {
          el.style.setProperty("color", "#ffffff", "important");
        } else {
          el.style.setProperty("color", "", "important");
        }
      }

      rafRef.current = requestAnimationFrame(check);
    }

    rafRef.current = requestAnimationFrame(check);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return null;
}
