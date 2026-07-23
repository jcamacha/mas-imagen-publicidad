import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-20 px-6 max-w-6xl mx-auto w-full">
        {/* H1 Animado */}
        <AnimatedTitle className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-fraunces text-center text-text">
          Ponte en <span className="text-accent">Contacto</span>
        </AnimatedTitle>
 
        <p className="text-text-muted text-center font-manrope text-lg mb-16 max-w-2xl mx-auto">
          ¿Tienes dudas o estás listo para arrancar tu proyecto? Escríbenos.
          Para conocer nuestro taller de producción, visita{" "}
          <a
            href="https://www.serigrafics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            serigrafics.com
          </a>.
        </p>
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Información de Contacto */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl space-y-6">
              <h2 className="text-2xl font-bold font-fraunces text-text">
                Datos de Contacto
              </h2>
 
              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-light text-text flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono mb-1">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+525577196924"
                    className="text-text hover:opacity-80 font-semibold transition-opacity font-manrope"
                  >
                    +52 55 7719 6924
                  </a>
                </div>
              </div>
 
              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-light text-text flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:contacto@masimagenpublicidad.mx"
                    className="text-text hover:opacity-80 font-semibold transition-opacity font-manrope"
                  >
                    contacto@masimagenpublicidad.mx
                  </a>
                </div>
              </div>

              {/* Taller */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-light text-accent flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono mb-1">
                    Taller de Producción
                  </h4>
                  <a
                    href="https://www.serigrafics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-semibold font-manrope"
                  >
                    Visitar serigrafics.com →
                  </a>
                  <p className="text-text-muted text-xs mt-1 font-manrope">
                    Conoce nuestro taller de serigrafía, capacidades y productos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </main>

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/525577196924"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-[#ffffff] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border border-[#1ebd5b]"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.478 4.775 1.479 5.378 0 9.755-4.375 9.757-9.759.002-2.607-1.002-5.06-2.83-6.89C16.426 2.155 13.97 1.15 11.365 1.15c-5.385 0-9.764 4.378-9.766 9.761-.001 2.02.528 3.992 1.536 5.735l-.991 3.62 3.714-.974c1.716 1.104 3.238 1.636 4.708 1.636zm12.385-6.758c-.328-.164-1.94-.957-2.24-1.067-.3-.11-.518-.164-.736.164-.219.328-.847 1.067-1.038 1.286-.192.219-.383.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.634-1.947-1.826-2.274-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.736-1.776-1.01-2.433-.267-.641-.561-.553-.769-.564-.2-.01-.429-.012-.657-.012-.228 0-.6.086-.913.43-.313.344-1.196 1.171-1.196 2.858 0 1.687 1.229 3.313 1.4 3.543.17.229 2.417 3.691 5.856 5.17 1.012.436 1.802.697 2.423.894.887.282 1.696.242 2.335.146.711-.107 1.94-.793 2.213-1.52.274-.727.274-1.352.192-1.488-.082-.136-.3-.219-.628-.383z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}
