"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { animate, stagger } from "animejs";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Columns stagger fade-in from below
            animate(".footer-col", {
              translateY: [40, 0],
              opacity: [0, 1],
              delay: stagger(100),
              easing: "outExpo",
              duration: 800,
            });

            // Logo scale and opacity
            animate(".footer-logo", {
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 800,
              easing: "outBack",
            });

            // Newsletter input width expansion
            animate(".footer-input", {
              width: ["0%", "100%"],
              duration: 600,
              delay: 800,
              easing: "outQuad",
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(e.currentTarget, {
      translateX: 5,
      duration: 200,
      easing: "outQuad",
    });
  };

  const handleLinkMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(e.currentTarget, {
      translateX: 0,
      duration: 200,
      easing: "outQuad",
    });
  };

  return (
    <footer className="bg-dark-section text-white border-t border-neutral-800 mt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna Marca & Newsletter */}
          <div className="md:col-span-2 space-y-6 footer-col opacity-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-wider font-fraunces text-white footer-logo inline-block"
            >
              MÁS IMAGEN PUBLICIDAD
            </Link>
            <p className="text-sm text-gray-400 max-w-sm font-manrope">
              Del pixel a la prenda. La única agencia en el Estado de México que
              integra marketing digital estratégico con taller de serigrafía y
              producción física propia.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Suscríbete a nuestro boletín
              </h4>
              <div className="flex max-w-sm w-full">
                <div className="flex-grow overflow-hidden">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    style={{ width: "0%" }}
                    className="footer-input bg-neutral-800 border border-neutral-700 rounded-l-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-accent font-manrope block"
                  />
                </div>
                <button className="bg-bg text-text px-4 py-2 rounded-r-xl text-sm font-semibold hover:bg-[#e8db5e] transition-colors font-manrope cursor-pointer flex-shrink-0">
                  Unirse
                </button>
              </div>
            </div>
          </div>

          {/* Columna Servicios */}
          <div className="footer-col opacity-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios#digital"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Presencia Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#fisico"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Presencia Física
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Taller de Serigrafía
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Planes Integrados
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Empresa & Contacto */}
          <div className="footer-col opacity-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Empresa
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/nosotros"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/portafolio"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  onMouseEnter={handleLinkMouseEnter}
                  onMouseLeave={handleLinkMouseLeave}
                  className="text-sm text-gray-400 hover:text-white transition-colors font-manrope inline-block"
                >
                  Contacto
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Redes Sociales
            </h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/525577196924"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.478 4.775 1.479 5.378 0 9.755-4.375 9.757-9.759.002-2.607-1.002-5.06-2.83-6.89C16.426 2.155 13.97 1.15 11.365 1.15c-5.385 0-9.764 4.378-9.766 9.761-.001 2.02.528 3.992 1.536 5.735l-.991 3.62 3.714-.974c1.716 1.104 3.238 1.636 4.708 1.636zm12.385-6.758c-.328-.164-1.94-.957-2.24-1.067-.3-.11-.518-.164-.736.164-.219.328-.847 1.067-1.038 1.286-.192.219-.383.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.634-1.947-1.826-2.274-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.736-1.776-1.01-2.433-.267-.641-.561-.553-.769-.564-.2-.01-.429-.012-.657-.012-.228 0-.6.086-.913.43-.313.344-1.196 1.171-1.196 2.858 0 1.687 1.229 3.313 1.4 3.543.17.229 2.417 3.691 5.856 5.17 1.012.436 1.802.697 2.423.894.887.282 1.696.242 2.335.146.711-.107 1.94-.793 2.213-1.52.274-.727.274-1.352.192-1.488-.082-.136-.3-.219-.628-.383z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-manrope">
            &copy; 2026 Más Imagen Publicidad. Parte del grupo Más Imagen.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-manrope">
            <span className="font-mono text-[#fff570]">
              12 años de trayectoria
            </span>
            <span className="font-mono text-gray-400">
              Taller de Serigrafía Propio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
