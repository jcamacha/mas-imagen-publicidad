"use client";

import { useEffect, useRef, useCallback } from "react";

interface Blob {
  x: number;
  y: number;
  radius: number;
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  ampX: number;
  ampY: number;
  opacity: number;
}

function createBlob(w: number, h: number): Blob {
  const minDim = Math.min(w, h);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    radius: minDim * 0.25 + Math.random() * minDim * 0.35,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    speedX: 0.0003 + Math.random() * 0.0007,
    speedY: 0.0003 + Math.random() * 0.0007,
    ampX: 0.3 + Math.random() * 0.4,
    ampY: 0.3 + Math.random() * 0.4,
    opacity: 0.35 + Math.random() * 0.30,
  };
}

const BLOB_COUNT = 5;

export default function OrganicTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const blobsRef = useRef<Blob[]>([]);
  const dimensionsRef = useRef({ w: 0, h: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = dimensionsRef.current;
    const blobs = blobsRef.current;
    const time = performance.now() * 0.001;

    ctx.clearRect(0, 0, w, h);

    for (const blob of blobs) {
      const dx = Math.sin(time * blob.speedX + blob.phaseX) * w * blob.ampX;
      const dy = Math.cos(time * blob.speedY + blob.phaseY) * h * blob.ampY;
      const cx = w / 2 + dx;
      const cy = h / 2 + dy;

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        blob.radius
      );
      gradient.addColorStop(0, `rgba(20, 20, 20, ${blob.opacity})`);
      gradient.addColorStop(0.6, `rgba(20, 20, 20, ${blob.opacity * 0.6})`);
      gradient.addColorStop(1, "rgba(20, 20, 20, 0)");

      ctx.beginPath();
      ctx.arc(cx, cy, blob.radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimensionsRef.current = { w, h };
      blobsRef.current = Array.from({ length: BLOB_COUNT }, () =>
        createBlob(w, h)
      );
    };

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block z-0"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
