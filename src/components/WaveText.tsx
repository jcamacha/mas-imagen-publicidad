"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface WaveParams {
  amp: number;
  freq: number;
  speed: number;
  phase: number;
  yOff: number;
}

function getWaves(h: number): WaveParams[] {
  return [
    { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.15 },
    { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.45 },
    { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,  yOff: h * 0.75 },
  ];
}

/**
 * Double-layer text: black below, white above with animated clip-path.
 * The clip-path reveals white text ONLY over dark wave areas.
 * Zero color mixing — pure black and pure white.
 */
export default function WaveText({ children }: { children: ReactNode }) {
  const [clip, setClip] = useState("polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    function computeClip() {
      const h = window.innerHeight;
      const w = window.innerWidth;
      const waves = getWaves(h);
      const t = performance.now() * 0.001;
      const blur = 30; // matches canvas blur radius

      // Build polygon points tracing the LOWEST wave curve
      const steps = 80;
      let path = "";
      const points: [number, number][] = [];

      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * w;
        // Find minimum Y (highest on screen) among all wave curves at this X
        let minY = h; // start at bottom
        for (const wave of waves) {
          const y =
            wave.yOff +
            Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
            Math.sin(x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) *
              wave.amp *
              0.35;
          // The visible dark area extends above the curve due to blur
          const darkTop = y - blur;
          if (darkTop < minY) minY = darkTop;
        }
        const xPct = (i / steps) * 100;
        const yPct = Math.max(0, (minY / h) * 100);
        points.push([xPct, yPct]);
      }

      // Build polygon: trace top edge left→right following wave,
      // then bottom-right, bottom-left to close
      path = "polygon(";
      // Top edge following wave
      for (const [x, y] of points) {
        path += `${x.toFixed(1)}% ${y.toFixed(1)}%, `;
      }
      // Right edge down
      path += "100% 100%, ";
      // Left edge up
      path += "0% 100%";
      path += ")";

      setClip(path);
      rafRef.current = requestAnimationFrame(computeClip);
    }

    rafRef.current = requestAnimationFrame(computeClip);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <span style={{ position: "relative", display: "inline" }}>
      {/* Layer 1: Black text — always visible */}
      <span style={{ color: "#2a2a2a" }}>{children}</span>

      {/* Layer 2: White text — only visible where clip-path reveals */}
      <span
        style={{
          position: "absolute",
          inset: 0,
          color: "#ffffff",
          clipPath: clip,
          WebkitClipPath: clip,
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
