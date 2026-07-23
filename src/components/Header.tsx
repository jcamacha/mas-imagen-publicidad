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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl md:text-2xl font-fraunces hover:text-accent transition-colors"
            >
              <span className="font-extrabold text-text">MÁS IMAGEN</span>{" "}
              <span className="text-accent font-medium">PUBLICIDAD</span>
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

            <Link
              href="/servicios"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/servicios") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Servicios
            </Link>

            <Link
              href="/nosotros"
              className={`text-sm font-semibold transition-colors hover:text-accent font-manrope ${
                isActive("/nosotros") ? "text-accent" : "text-text-muted hover:text-text"
              }`}
            >
              Nosotros
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
                ? "bg-accent-light text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/servicios")
                ? "bg-accent-light text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/nosotros")
                ? "bg-accent-light text-accent"
                : "text-text-muted hover:text-text hover:bg-surface"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`block px-3 py-2 rounded-md text-base font-semibold font-manrope ${
              isActive("/contacto")
                ? "bg-accent-light text-accent"
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
