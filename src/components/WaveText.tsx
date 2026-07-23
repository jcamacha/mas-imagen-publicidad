"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function getWaves(h: number) {
  return [
    { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0,   yOff: h * 0.15 },
    { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2,   yOff: h * 0.45 },
    { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4,  yOff: h * 0.75 },
  ];
}

export default function WaveText({ children }: { children: ReactNode }) {
  const [clip, setClip] = useState("inset(100% 0 0 0)");
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const BLUR = 30;

    function computeClip() {
      const h = window.innerHeight;
      const w = window.innerWidth;
      const waves = getWaves(h);
      const t = performance.now() * 0.001;
      const steps = 60;

      let topPct = 100; // start fully hidden

      // Sample at multiple X positions along the viewport width
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * w;
        let minDarkY = h;
        for (const wave of waves) {
          const curveY =
            wave.yOff +
            Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
            Math.sin(x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) *
              wave.amp *
              0.35;
          const darkTop = curveY - BLUR;
          if (darkTop < minDarkY) minDarkY = darkTop;
        }
        const pct = (minDarkY / h) * 100;
        if (pct < topPct) topPct = pct;
      }

      // Clip from the top down to the highest dark wave point
      setClip(`inset(${Math.max(0, topPct).toFixed(1)}% 0 0 0)`);
      rafRef.current = requestAnimationFrame(computeClip);
    }

    rafRef.current = requestAnimationFrame(computeClip);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        verticalAlign: "baseline",
      }}
    >
      {/* Black text — always visible underneath */}
      <span style={{ color: "#2a2a2a" }}>{children}</span>

      {/* White text — clipped by inset to only show over dark wave */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          color: "#ffffff",
          clipPath: clip,
          WebkitClipPath: clip,
          userSelect: "none",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
