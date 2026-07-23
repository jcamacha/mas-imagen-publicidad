"use client";

import { useEffect } from "react";

/**
 * Pixel-samples the wave canvas behind each text element.
 * If the wave is dark at that position, text turns white.
 * No CSS blend modes needed — reliable black/white result.
 */
export default function WaveContrast() {
  useEffect(() => {
    let raf: number;

    function check() {
      const canvas = document.querySelector<HTMLCanvasElement>(
        'canvas[aria-hidden="true"]'
      );
      if (!canvas) {
        raf = requestAnimationFrame(check);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        raf = requestAnimationFrame(check);
        return;
      }

      const cw = canvas.width;
      const ch = canvas.height;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        raf = requestAnimationFrame(check);
        return;
      }

      const texts = document.querySelectorAll<HTMLElement>(
        "h1, h2, h3, h4, p, span, li, label"
      );

      for (const el of texts) {
        // Skip nav, header, footer, buttons, inputs, dark sections
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

        const elRect = el.getBoundingClientRect();
        const cx = (elRect.left + elRect.width / 2 - rect.left) * (cw / rect.width);
        const cy = (elRect.top + elRect.height / 2 - rect.top) * (ch / rect.height);

        if (cx < 1 || cy < 1 || cx >= cw - 1 || cy >= ch - 1) continue;

        try {
          const pixel = ctx.getImageData(Math.floor(cx), Math.floor(cy), 1, 1).data;
          // r, g, b all < 100 means dark wave area
          const isDark = pixel[0] < 100 && pixel[1] < 100 && pixel[2] < 100;
          el.style.color = isDark ? "#ffffff" : "";
        } catch {
          // tainted canvas or off-bounds — skip
        }
      }

      raf = requestAnimationFrame(check);
    }

    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
