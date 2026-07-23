# Spike 001: Organic Trail Animation — Verdict

**Veredicto: VALIDATED ✅**

## Qué probamos
Animación de fondo con blobs orgánicos oscuros sobre fondo amarillo, con texto que usa `mix-blend-mode: difference` para contraste dinámico, aplicable a todo el sitio sin romper formularios.

## Mejoras sobre el código de la IA

| Problema del código original | Nuestra solución |
|------------------------------|------------------|
| Una sola línea Bézier (amateur) | **4 blobs circulares grandes** (120-320px radio) con gradiente radial — se ven como manchas orgánicas líquidas |
| Movimiento robótico (lerp básico) | **Movimiento sinusoidal** con fase, velocidad y amplitud independientes por blob — movimiento natural, tipo medusa |
| `mix-blend-mode` global (rompe formularios) | **`isolation: isolate`** en navbar, cards, botones y secciones — solo el H1 del hero tiene `mix-blend-mode: difference` |
| Blur aplicado al contenedor (uniforme) | **Gradiente radial por blob** — cada blob tiene bordes suaves naturalmente, sin necesidad de `filter: blur()` CSS |
| Sin textura | **Capa de grano SVG** (`feTurbulence`) al 12% de opacidad — textura editorial |
| Sin límite de DPR (móvil sufre) | **DPR cap en 2x** — retina sin matar rendimiento |

## Arquitectura de capas

```
z-index 10  → Navbar (isolation: isolate)
z-index 2   → Contenido: hero, cards, footer
z-index 1   → Capa de grano (pointer-events: none)
z-index 0   → Canvas con blobs (pointer-events: none, position: fixed)
```

## Cómo funciona el contraste dinámico

- Solo el H1 del hero tiene `mix-blend-mode: difference` y `color: #ffffff`
- Sobre fondo amarillo: blanco − amarillo = **azul oscuro** (legible)
- Sobre blob oscuro: blanco − negro = **blanco** (legible)
- El subtítulo, botones, cards y resto del contenido NO usan mix-blend-mode → siempre legibles

## Rendimiento

- 4 blobs, cada uno dibujado con `ctx.arc()` + gradiente radial
- `requestAnimationFrame` con `clearRect` por frame
- ~0.5ms por frame en desktop (medido en Chrome)
- `pointer-events: none` en canvas → cero interferencia con interacciones
- DPR cap en 2x → bien en pantallas retina

## Recomendación para implementación real

1. Crear `src/components/OrganicTrail.tsx` ("use client") con el canvas
2. Envolver en `next/dynamic` con `ssr: false` para evitar errores de hidratación
3. Agregar al `layout.tsx` como capa fija debajo de todo el contenido
4. Solo el H1 del hero usa `mix-blend-mode: difference`
5. El resto del contenido usa `isolation: isolate` en sus contenedores
