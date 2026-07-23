"use client";
 
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
 
  const toggleMenu = () => setIsOpen(!isOpen);
 
  const isActive = (path: string) => pathname === path;
 
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/20 backdrop-blur-[2px] isolate-blend">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-fraunces hover:opacity-85 transition-opacity"
            >
              <span className="font-extrabold text-text tracking-wide">MÁS IMAGEN PUBLICIDAD</span>
            </Link>
          </div>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-manrope pb-1 transition-all ${
                isActive("/") 
                  ? "font-bold text-text border-b-2 border-accent" 
                  : "font-semibold text-text-muted hover:text-text"
              }`}
            >
              Inicio
            </Link>
 
            <Link
              href="/servicios"
              className={`text-sm font-manrope pb-1 transition-all ${
                isActive("/servicios") 
                  ? "font-bold text-text border-b-2 border-accent" 
                  : "font-semibold text-text-muted hover:text-text"
              }`}
            >
              Servicios
            </Link>
 
            <Link
              href="/nosotros"
              className={`text-sm font-manrope pb-1 transition-all ${
                isActive("/nosotros") 
                  ? "font-bold text-text border-b-2 border-accent" 
                  : "font-semibold text-text-muted hover:text-text"
              }`}
            >
              Nosotros
            </Link>
 
            <Link
              href="/contacto"
              className={`text-sm font-manrope pb-1 transition-all ${
                isActive("/contacto") 
                  ? "font-bold text-text border-b-2 border-accent" 
                  : "font-semibold text-text-muted hover:text-text"
              }`}
            >
              Contacto
            </Link>
          </nav>
 
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-bg py-4 px-4 space-y-3"
          id="mobile-menu"
        >
          <Link
            href="/"
            className={`block px-3 py-2 text-base font-manrope ${
              isActive("/")
                ? "font-bold text-text border-b-2 border-accent w-fit"
                : "font-semibold text-text-muted hover:text-text"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className={`block px-3 py-2 text-base font-manrope ${
              isActive("/servicios")
                ? "font-bold text-text border-b-2 border-accent w-fit"
                : "font-semibold text-text-muted hover:text-text"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className={`block px-3 py-2 text-base font-manrope ${
              isActive("/nosotros")
                ? "font-bold text-text border-b-2 border-accent w-fit"
                : "font-semibold text-text-muted hover:text-text"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`block px-3 py-2 text-base font-manrope ${
              isActive("/contacto")
                ? "font-bold text-text border-b-2 border-accent w-fit"
                : "font-semibold text-text-muted hover:text-text"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
