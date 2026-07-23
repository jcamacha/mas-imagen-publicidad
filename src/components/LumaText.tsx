"use client";

import { type ReactNode } from "react";

/**
 * Renders text with dynamic black/white contrast using an SVG luminance mask.
 * The mask reads the trail-canvas, extracts luminance, and reveals white text
 * where the background is dark (wave area), while black text shows on yellow.
 *
 * Strategy by OpenCode GLM 5.1: "stop blending, start masking by luminance."
 * Zero color mixing — pure black and pure white from CSS, never blended.
 */
export default function LumaText({ children }: { children: ReactNode }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {/* Black layer — always visible underneath */}
      <span style={{ color: "#2a2a2a" }}>{children}</span>

      {/* White layer — masked by luminance: visible where wave is dark */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          color: "#ffffff",
          maskImage: "url(#luma-to-alpha)",
          WebkitMaskImage: "url(#luma-to-alpha)",
          maskMode: "luminance",
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
