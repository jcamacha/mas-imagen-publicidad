import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleContactForm from "@/components/SimpleContactForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-accent/10 selection:text-accent">
      <Header />

      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fdf0e6] border border-accent/20 text-accent text-xs font-semibold tracking-wider font-manrope">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              EdoMex • Taller propio
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#374151] leading-tight font-fraunces">
              Tu negocio, en digital y en físico.{" "}
              <span className="text-accent block sm:inline">Sin complicaciones.</span>
            </h1>

            <p className="text-lg md:text-xl text-text leading-relaxed font-manrope max-w-xl">
              Hacemos tu página web, tus anuncios, tus playeras. Todo en un solo lugar, con taller propio desde hace 12 años.
            </p>

            <div className="pt-4">
              <Link
                href="#contacto-final"
                className="btn-primary text-center py-4 px-8 text-base font-semibold font-manrope cursor-pointer inline-block shadow-sm"
              >
                Cuéntanos tu proyecto
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md bg-[#f8f8fa]">
              <Image
                src="/hero-mockup.svg"
                alt="Mockup de celular con sitio web y playera impresa"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: LO QUE HACEMOS */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] font-fraunces">
                Lo que hacemos por tu negocio
              </h2>
              <p className="text-text-muted font-manrope text-base max-w-xl mx-auto">
                Soluciones integrales de marketing y producción física directa, controladas por nosotros de inicio a fin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Tarjeta 1: Tu página web */}
              <div className="bg-[#f8f8fa] border border-border p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#374151] font-fraunces mb-3">
                    Tu página web
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-manrope">
                    Diseño profesional y a la medida de tu negocio. Optimizado para buscadores, de carga rápida y adaptado a móviles.
                  </p>
                  <ul className="space-y-2">
                    {["Diseño profesional a medida", "Optimización SEO", "Velocidad de carga rápida", "Totalmente responsivo"].map((bullet, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-text font-manrope">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tarjeta 2: Tus anuncios */}
              <div className="bg-[#f8f8fa] border border-border p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
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
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#374151] font-fraunces mb-3">
                    Tus anuncios
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-manrope">
                    Llega a los clientes ideales para tu negocio. Gestionamos tus campañas en Google Ads, Facebook e Instagram.
                  </p>
                  <ul className="space-y-2">
                    {["Campañas en Google Search", "Anuncios en Facebook e Instagram", "Seguimiento de llamadas y leads", "Optimización de presupuesto"].map((bullet, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-text font-manrope">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tarjeta 3: Tus playeras y más */}
              <div className="bg-[#f8f8fa] border border-border p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent/10 text-accent">
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
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#374151] font-fraunces mb-3">
                    Tus playeras y más
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-manrope">
                    Uniformes profesionales y artículos promocionales para tu marca. Calidad directa de nuestro taller de serigrafía.
                  </p>
                  <ul className="space-y-2">
                    {["Estampado textil en serigrafía", "Polos bordadas para uniformes", "Tazas y artículos de merch", "Letreros y lonas exteriores"].map((bullet, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-text font-manrope">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CASOS REALES */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] font-fraunces">
                Negocios como el tuyo que ya crecen con nosotros
              </h2>
              <p className="text-text-muted font-manrope text-base max-w-xl">
                Casos reales de pequeñas y medianas empresas mexicanas que decidieron unificar su publicidad digital y física.
              </p>
            </div>

            <div className="space-y-12">
              {/* Tarjeta Caso 1 */}
              <div className="flex flex-col md:flex-row items-center bg-[#f8f8fa] border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full md:w-80 lg:w-96 aspect-[4/3] md:aspect-square shrink-0">
                  <Image
                    src="/caso-taqueria.jpg"
                    alt="Uniforme y sitio web de Taquería El Güero"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 space-y-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider font-mono">
                    Restaurantes &bull; CDMX
                  </span>
                  <h3 className="text-2xl font-bold text-[#374151] font-fraunces leading-tight">
                    Taquería El Güero
                  </h3>
                  <blockquote className="text-text text-base leading-relaxed italic font-manrope">
                    &ldquo;+60% más clientes con su web y uniformes nuevos&rdquo;
                  </blockquote>
                  <p className="text-text-muted text-sm leading-relaxed font-manrope">
                    Creamos un menú digital interactivo y optimizamos su ubicación en Google Maps. Además, el taller bordó 30 camisas polo con el nuevo logo, incrementando notablemente la confianza de los clientes en local.
                  </p>
                </div>
              </div>

              {/* Tarjeta Caso 2 */}
              <div className="flex flex-col md:flex-row items-center bg-[#f8f8fa] border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full md:w-80 lg:w-96 aspect-[4/3] md:aspect-square shrink-0">
                  <Image
                    src="/caso-dental.jpg"
                    alt="Página web y tarjetas de Clínica Dental Juárez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 space-y-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider font-mono">
                    Salud &bull; EdoMex
                  </span>
                  <h3 className="text-2xl font-bold text-[#374151] font-fraunces leading-tight">
                    Clínica Dental Juárez
                  </h3>
                  <blockquote className="text-text text-base leading-relaxed italic font-manrope">
                    &ldquo;+45% citas agendadas con su nueva web y folletos&rdquo;
                  </blockquote>
                  <p className="text-text-muted text-sm leading-relaxed font-manrope">
                    Desarrollamos una página informativa limpia con agendamiento directo por WhatsApp y lanzamos campañas locales de anuncios. También imprimimos folletos explicativos y tarjetas de citas para los pacientes del consultorio.
                  </p>
                </div>
              </div>

              {/* Tarjeta Caso 3 */}
              <div className="flex flex-col md:flex-row items-center bg-[#f8f8fa] border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full md:w-80 lg:w-96 aspect-[4/3] md:aspect-square shrink-0">
                  <Image
                    src="/caso-cafe.jpg"
                    alt="Mockup de empaque y web de Café de Toluca"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 space-y-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider font-mono">
                    Cafetería &bull; Toluca
                  </span>
                  <h3 className="text-2xl font-bold text-[#374151] font-fraunces leading-tight">
                    Café de Toluca
                  </h3>
                  <blockquote className="text-text text-base leading-relaxed italic font-manrope">
                    &ldquo;Incrementó 80% sus ventas con tienda en línea y bolsas impresas&rdquo;
                  </blockquote>
                  <p className="text-text-muted text-sm leading-relaxed font-manrope">
                    Pusimos en marcha una plataforma de comercio electrónico que automatiza sus envíos de granos de café. A la par, el taller produjo calcomanías troqueladas y estampó bolsas de papel kraft con tintas ecológicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CÓMO TRABAJAMOS */}
        <section className="py-20 md:py-24 px-6 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] font-fraunces">
                Así de fácil es trabajar con nosotros
              </h2>
              <p className="text-text-muted font-manrope text-base max-w-xl mx-auto">
                Sin intermediarios ni problemas de comunicación. Nos encargamos de todo el proceso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Paso 1 */}
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold font-fraunces text-accent tracking-tight">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#374151] font-fraunces">
                  Platicamos
                </h3>
                <p className="text-text text-sm leading-relaxed font-manrope max-w-xs mx-auto">
                  Entendemos tu negocio, tu mercado y tus objetivos para diseñar una estrategia integral a tu medida.
                </p>
              </div>

              {/* Paso 2 */}
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold font-fraunces text-accent tracking-tight">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#374151] font-fraunces">
                  Creamos
                </h3>
                <p className="text-text text-sm leading-relaxed font-manrope max-w-xs mx-auto">
                  Desarrollamos tu sitio web, programamos tus campañas y producimos las prendas físicas en nuestro taller.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold font-fraunces text-accent tracking-tight">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#374151] font-fraunces">
                  Creces
                </h3>
                <p className="text-text text-sm leading-relaxed font-manrope max-w-xs mx-auto">
                  Lanzamos las campañas, medimos los resultados de visitas y cotizaciones, y realizamos los ajustes necesarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA FINAL */}
        <section id="contacto-final" className="py-20 px-6 bg-[#f8f8fa] border-t border-border">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#374151] font-fraunces">
                ¿Empezamos?
              </h2>
              <p className="text-text text-base font-manrope">
                Te contactamos hoy mismo. Sin compromiso.
              </p>
            </div>

            <div className="bg-white border border-border p-8 rounded-2xl shadow-sm text-left">
              <SimpleContactForm />
            </div>

            <div className="space-y-2 pt-4">
              <p className="text-text-muted text-sm font-manrope">
                ¿Prefieres hablar directamente?
              </p>
              <a
                href="https://wa.me/525577196924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold font-manrope transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.478 4.775 1.479 5.378 0 9.755-4.375 9.757-9.759.002-2.607-1.002-5.06-2.83-6.89C16.426 2.155 13.97 1.15 11.365 1.15c-5.385 0-9.764 4.378-9.766 9.761-.001 2.02.528 3.992 1.536 5.735l-.991 3.62 3.714-.974c1.716 1.104 3.238 1.636 4.708 1.636zm12.385-6.758c-.328-.164-1.94-.957-2.24-1.067-.3-.11-.518-.164-.736.164-.219.328-.847 1.067-1.038 1.286-.192.219-.383.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.634-1.947-1.826-2.274-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.736-1.776-1.01-2.433-.267-.641-.561-.553-.769-.564-.2-.01-.429-.012-.657-.012-.228 0-.6.086-.913.43-.313.344-1.196 1.171-1.196 2.858 0 1.687 1.229 3.313 1.4 3.543.17.229 2.417 3.691 5.856 5.17 1.012.436 1.802.697 2.423.894.887.282 1.696.242 2.335.146.711-.107 1.94-.793 2.213-1.52.274-.727.274-1.352.192-1.488-.082-.136-.3-.219-.628-.383z" />
                </svg>
                O mándanos WhatsApp: 55 7719 6924
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
