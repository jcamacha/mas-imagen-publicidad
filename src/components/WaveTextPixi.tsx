"use client";

import React, { useEffect, useRef } from "react";
import type * as PixiType from "pixi.js";

interface WaveTextPixiProps {
  children: React.ReactNode;
}

export default function WaveTextPixi({ children }: WaveTextPixiProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const domTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: PixiType.Application | null = null;
    let active = true;

    const initPixi = async () => {
      // Importar PixiJS dinámicamente en el cliente
      const PIXI = await import("pixi.js");
      if (!active) return;

      const {
        Application,
        Graphics,
        Text,
        TextStyle,
        RenderTexture,
        Filter,
        GlProgram,
        UniformGroup,
        BlurFilter,
      } = PIXI;

      const domTextEl = domTextRef.current;
      if (!domTextEl) return;

      const h1 = domTextEl.querySelector("h1");
      if (!h1) return;

      const textContent = h1.textContent || h1.innerText || "";
      const computed = window.getComputedStyle(h1);
      const fontSize = parseFloat(computed.fontSize);
      const fontFamily = computed.fontFamily;
      const fontWeight = computed.fontWeight;
      const lineHeight = parseFloat(computed.lineHeight) || fontSize * 1.2;
      const rect = h1.getBoundingClientRect();

      let w = window.innerWidth;
      let h = window.innerHeight;

      // 1. Inicializar PIXI.Application con fondo TRANSPARENTE
      const newApp = new Application();
      await newApp.init({
        resizeTo: window,
        backgroundAlpha: 0,
        antialias: true,
      });

      if (!active) {
        newApp.destroy(true, { children: true });
        return;
      }

      app = newApp;

      // Agregar el canvas al div contenedor
      if (containerRef.current) {
        containerRef.current.appendChild(app.canvas);
      }

      // 2. Crear PIXI.Text
      const pixiText = new Text({
        text: textContent,
        style: new TextStyle({
          fontFamily,
          fontSize,
          fontWeight: fontWeight as any,
          fill: 0xffffff,
          wordWrap: true,
          wordWrapWidth: rect.width,
          lineHeight: lineHeight as number,
          align: (computed.textAlign as any) || "left",
          padding: 20,
        }),
      });

      pixiText.x = rect.left;
      pixiText.y = rect.top;

      // 3. Crear Graphics para las ondas
      const wavesGraphics = new Graphics();
      const blurFilter = new BlurFilter({ strength: 25 });
      wavesGraphics.filters = [blurFilter];

      // 4. Crear RenderTexture
      const renderTexture = RenderTexture.create({
        width: w,
        height: h,
      });

      // Parámetros de las ondas (OrganicTrail)
      const waves = [
        { amp: h * 0.40, freq: 0.0004, speed: 0.28, phase: 0, yOff: h * 0.15, opacity: 0.95 },
        { amp: h * 0.35, freq: 0.0006, speed: 0.34, phase: 2, yOff: h * 0.45, opacity: 0.85 },
        { amp: h * 0.38, freq: 0.0005, speed: -0.30, phase: 4, yOff: h * 0.75, opacity: 0.75 },
      ];

      // 5. Shader personalizado (GLSL ES 3.0)
      const vertexSrc = `
        in vec2 aPosition;
        out vec2 vTextureCoord;
        out vec2 vFilterCoord;

        uniform vec4 uInputSize;
        uniform vec4 uOutputFrame;
        uniform vec4 uOutputTexture;

        void main(void) {
          vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
          position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
          position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;
          gl_Position = vec4(position, 0.0, 1.0);
          
          vTextureCoord = aPosition * (uOutputFrame.zw * uInputSize.zw);
          vFilterCoord = vTextureCoord;
        }
      `;

      const fragmentSrc = `
        precision highp float;

        in vec2 vFilterCoord;
        out vec4 finalColor;

        uniform sampler2D uTexture;     // textura del texto (alpha)
        uniform sampler2D uWaveTex;     // textura de ondas (RenderTexture)
        uniform vec2 uResolution;
        uniform float uThreshold;

        void main() {
          vec4 textSample = texture(uTexture, vFilterCoord);
          if (textSample.a < 0.3) discard;
          
          vec4 waveSample = texture(uWaveTex, vFilterCoord);
          float lum = dot(waveSample.rgb, vec3(0.299, 0.587, 0.114));
          float c = smoothstep(uThreshold - 0.05, uThreshold + 0.05, lum);
          
          // c=1 where bright (yellow bg) → black text
          // c=0 where dark (wave) → white text
          finalColor = vec4(vec3(1.0 - c), textSample.a);
        }
      `;

      const waveUniforms = new UniformGroup({
        uThreshold: { value: 0.5, type: "f32" },
        uResolution: { value: [w, h], type: "vec2<f32>" },
      });

      const glProgram = GlProgram.from({
        vertex: vertexSrc,
        fragment: fragmentSrc,
        name: "wave-text-filter",
      });

      const waveFilter = new Filter({
        glProgram,
        resources: {
          waveUniforms,
          uWaveTex: renderTexture.source,
        },
      });

      // Configurar área de filtro para que ocupe toda la pantalla
      pixiText.filterArea = app.screen;
      pixiText.filters = [waveFilter];

      // Añadir elementos a la escena
      app.stage.addChild(wavesGraphics);
      app.stage.addChild(pixiText);

      // Ticker para animar las ondas
      let t = 0;
      const tick = () => {
        if (!app) return;
        t = performance.now() * 0.001;
        const currentW = window.innerWidth;
        const currentH = window.innerHeight;

        // Limpiar y dibujar curvas de las ondas
        wavesGraphics.clear();
        for (const wave of waves) {
          wavesGraphics.moveTo(0, currentH);
          for (let x = 0; x <= currentW; x += 10) {
            const y =
              wave.yOff +
              Math.sin(x * wave.freq + t * wave.speed + wave.phase) * wave.amp +
              Math.sin(x * wave.freq * 2.1 + t * wave.speed * 1.3 + wave.phase) * wave.amp * 0.35;
            wavesGraphics.lineTo(x, y);
          }
          wavesGraphics.lineTo(currentW, currentH);
          wavesGraphics.closePath();
          wavesGraphics.fill({ color: 0x0f0f0f, alpha: wave.opacity });
        }

        // Renderizar wavesGraphics a la RenderTexture con fondo BLANCO
        app.renderer.render({
          container: wavesGraphics,
          target: renderTexture,
          clear: true,
          clearColor: 0xffffff,
        });
      };

      app.ticker.add(tick);

      // Manejador de Redimensionamiento (Resize)
      const handleResize = () => {
        if (!app) return;
        const newW = window.innerWidth;
        const newH = window.innerHeight;

        // Actualizar variables de tamaño de ondas
        waves[0].amp = newH * 0.40;
        waves[0].yOff = newH * 0.15;
        waves[1].amp = newH * 0.35;
        waves[1].yOff = newH * 0.45;
        waves[2].amp = newH * 0.38;
        waves[2].yOff = newH * 0.75;

        // Redimensionar RenderTexture y actualizar resolución
        renderTexture.resize(newW, newH);
        waveUniforms.uniforms.uResolution = [newW, newH];

        // Volver a medir el H1 del DOM y re-ubicar / re-estilar PIXI.Text
        const newRect = h1.getBoundingClientRect();
        const newComputed = window.getComputedStyle(h1);
        const newFontSize = parseFloat(newComputed.fontSize);
        const newLineHeight = parseFloat(newComputed.lineHeight) || newFontSize * 1.2;

        pixiText.x = newRect.left;
        pixiText.y = newRect.top;
        pixiText.style.fontSize = newFontSize;
        pixiText.style.wordWrapWidth = newRect.width;
        pixiText.style.lineHeight = newLineHeight;
        pixiText.style.fontFamily = newComputed.fontFamily;
        pixiText.style.fontWeight = newComputed.fontWeight as any;
        pixiText.style.align = (newComputed.textAlign as any) || "left";
      };

      window.addEventListener("resize", handleResize);

      // Limpieza en el manejador del useEffect
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    let cleanupResize: (() => void) | undefined;
    initPixi().then((cleanup) => {
      cleanupResize = cleanup;
    });

    return () => {
      active = false;
      if (cleanupResize) cleanupResize();
      if (app) {
        app.destroy(true, { children: true });
      }
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10" />
      <div ref={domTextRef} style={{ opacity: 0 }} aria-hidden="true">
        {children}
      </div>
    </>
  );
}
