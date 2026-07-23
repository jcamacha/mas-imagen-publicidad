"use client";
 
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
 
  const toggleMenu = () => setIsOpen(!isOpen);
 
  const isActive = (path: string) => pathname === path;
 
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold tracking-wider font-fraunces text-text hover:text-accent transition-colors"
            >
              MÁS IMAGEN <span className="text-accent">PUBLICIDAD</span>
            </Link>
          </div>
 
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Inicio
            </Link>
 
            {/* Dropdown hover */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`text-sm font-semibold transition-colors hover:text-accent font-manrope flex items-center gap-1 cursor-pointer py-2 ${
                  pathname.startsWith("/servicios") ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
 
              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-48 rounded-xl shadow-lg bg-white border border-border py-2 z-50">
                  <Link
                    href="/servicios#digital"
                    className="block px-4 py-2.5 text-sm text-text-muted hover:text-text hover:bg-surface transition-colors font-manrope"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Presencia Digital
                  </Link>
                  <Link
                    href="/servicios#fisico"
                    className="block px-4 py-2.5 text-sm text-text-muted hover:text-text hover:bg-surface transition-colors font-manrope"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Presencia Física (Taller)
                  </Link>
                  <hr className="border-border my-1" />
                  <Link
                    href="/servicios"
                    className="block px-4 py-2.5 text-sm font-bold text-accent hover:text-accent-hover hover:bg-surface transition-colors font-manrope"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Ver Todos
                  </Link>
                </div>
              )}
            </div>
 
            <Link
              href="/nosotros"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/nosotros") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Nosotros
            </Link>
 
            <Link
              href="/portafolio"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/portafolio") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Portafolio
            </Link>
 
            <Link
              href="/contacto"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/contacto") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Contacto
            </Link>
          </nav>
 
          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="btn-primary text-xs !py-2.5 !px-5 rounded-lg font-bold block"
            >
              Cotizar
            </Link>
          </div>
 
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text hover:bg-surface focus:outline-none transition-colors"
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
          className="md:hidden bg-white border-b border-border py-4 px-4 space-y-3"
          id="mobile-menu"
        >
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/")
                ? "bg-accent/10 text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <div className="px-3 py-1">
            <span className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2 font-mono">
              Servicios
            </span>
            <div className="pl-3 space-y-2 border-l border-border">
              <Link
                href="/servicios#digital"
                className="block py-1 text-sm text-text-muted hover:text-text font-manrope"
                onClick={() => setIsOpen(false)}
              >
                Presencia Digital
              </Link>
              <Link
                href="/servicios#fisico"
                className="block py-1 text-sm text-text-muted hover:text-text font-manrope"
                onClick={() => setIsOpen(false)}
              >
                Presencia Física
              </Link>
            </div>
          </div>
          <Link
            href="/nosotros"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/nosotros")
                ? "bg-accent/10 text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/portafolio"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/portafolio")
                ? "bg-accent/10 text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Portafolio
          </Link>
          <Link
            href="/contacto"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/contacto")
                ? "bg-accent/10 text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
          <div className="pt-2 px-3">
            <Link
              href="/contacto"
              className="btn-primary block text-center py-2.5 font-bold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Cotizar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
