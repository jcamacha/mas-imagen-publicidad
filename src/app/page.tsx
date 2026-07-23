"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleContactForm from "@/components/SimpleContactForm";
import HeroSlideshow from "@/components/HeroSlideshow";
import Link from "next/link";
import StepCounter from "@/components/StepCounter";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const servicesContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-accent-light selection:text-accent">
      <Header />
 
      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 text-left">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#c4b840] text-text text-xs font-semibold tracking-wider font-manrope"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Taller propio · 12 años · EdoMex
            </motion.div>
 
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight font-fraunces"
            >
              Tu negocio, en digital y en físico. En un solo lugar.
            </motion.h1>
 
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-text-muted leading-relaxed font-manrope max-w-xl"
            >
              Somos la única agencia en EdoMex con taller de serigrafía propio. Hacemos tu web, tus anuncios y tus playeras. Sin complicaciones, desde hace 12 años.
            </motion.p>
 
            <div className="pt-4">
              <MotionLink
                href="#contacto-final"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-center py-4 px-8 text-base font-semibold font-manrope cursor-pointer inline-block"
              >
                Cuéntanos tu proyecto
              </MotionLink>
            </div>
          </div>
 
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex-1 w-full flex justify-center items-center"
          >
            <HeroSlideshow />
          </motion.div>
        </section>

        {/* SECTION 2: LO QUE HACEMOS */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-fraunces text-text">
                Lo que hacemos por tu negocio
              </h2>
              <p className="text-text-muted font-manrope text-base max-w-xl mx-auto">
                Soluciones integrales de marketing y producción física directa, controladas por nosotros de inicio a fin.
              </p>
            </div>
 
            <motion.div
              variants={servicesContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {/* Tarjeta 1: Tu página web */}
              <motion.div
                variants={serviceCardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                className="p-8 flex flex-col justify-between rounded-2xl"
              >
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                  <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
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
              </motion.div>
 
              {/* Tarjeta 2: Tus anuncios */}
              <motion.div
                variants={serviceCardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                className="p-8 flex flex-col justify-between rounded-2xl"
              >
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                  <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
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
              </motion.div>
 
              {/* Tarjeta 3: Tus playeras y más */}
              <motion.div
                variants={serviceCardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
                className="p-8 flex flex-col justify-between rounded-2xl"
              >
                <div>
                  <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                  <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
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
              </motion.div>
            </motion.div>
          </div>
        </section>
 
        {/* SECTION 3: ¿POR QUÉ NOSOTROS? */}
        <section className="py-20 md:py-24 px-6 border-t border-[#c4b840]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-fraunces text-text">
                Mucho más que una agencia de marketing
              </h2>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Columna 1 */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-bg border border-border p-8 rounded-2xl flex flex-col"
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
                  Taller propio
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-manrope">
                  Desde hace 12 años producimos playeras, uniformes, tazas y displays en nuestro taller de serigrafía. No subcontratamos: controlamos calidad, tiempos y precio.
                </p>
              </motion.div>
 
              {/* Columna 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-bg border border-border p-8 rounded-2xl flex flex-col"
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
                  Digital + físico
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-manrope">
                  Nadie más te ofrece la página web, los anuncios Y las playeras en un solo lugar. Una factura, un equipo, cero dolores de cabeza.
                </p>
              </motion.div>
 
              {/* Columna 3 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="bg-bg border border-border p-8 rounded-2xl flex flex-col"
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center rounded-xl bg-accent-light text-text">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-fraunces mb-3 text-text">
                  Resultados que se miden
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-manrope">
                  No hacemos humo. Cada campaña tiene métricas claras: visitas, leads, ventas. Te reportamos resultados, no excusas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
 
        {/* SECTION 4: CÓMO TRABAJAMOS */}
        <section className="py-20 md:py-24 px-6 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-fraunces text-text">
                Así de fácil es trabajar con nosotros
              </h2>
              <p className="text-text-muted font-manrope text-base max-w-xl mx-auto">
                Sin intermediarios ni problemas de comunicación. Nos encargamos de todo el proceso.
              </p>
            </div>
            <StepCounter />
          </div>
        </section>
 
        {/* SECTION 5: CTA FINAL */}
        <motion.section
          id="contacto-final"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          viewport={{ once: true }}
          className="py-20 px-6 bg-dark-section"
        >
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold font-fraunces text-white">
                ¿Empezamos?
              </h2>
              <p className="text-white text-base font-manrope opacity-90">
                Te contactamos hoy mismo. Sin compromiso.
              </p>
            </div>
 
            <div className="p-8 text-left">
              <SimpleContactForm />
            </div>
 
            <div className="space-y-2 pt-4">
              <p className="text-gray-400 text-sm font-manrope">
                ¿Prefieres hablar directamente?
              </p>
              <motion.a
                whileHover={{ x: 3 }}
                href="https://wa.me/525577196924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#fff9c2] hover:text-white font-semibold font-manrope transition-colors"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.167 1.478 4.775 1.479 5.378 0 9.755-4.375 9.757-9.759.002-2.607-1.002-5.06-2.83-6.89C16.426 2.155 13.97 1.15 11.365 1.15c-5.385 0-9.764 4.378-9.766 9.761-.001 2.02.528 3.992 1.536 5.735l-.991 3.62 3.714-.974c1.716 1.104 3.238 1.636 4.708 1.636zm12.385-6.758c-.328-.164-1.94-.957-2.24-1.067-.3-.11-.518-.164-.736.164-.219.328-.847 1.067-1.038 1.286-.192.219-.383.246-.71.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.634-1.947-1.826-2.274-.192-.328-.02-.505.144-.668.148-.146.328-.383.493-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.736-1.776-1.01-2.433-.267-.641-.561-.553-.769-.564-.2-.01-.429-.012-.657-.012-.228 0-.6.086-.913.43-.313.344-1.196 1.171-1.196 2.858 0 1.687 1.229 3.313 1.4 3.543.17.229 2.417 3.691 5.856 5.17 1.012.436 1.802.697 2.423.894.887.282 1.696.242 2.335.146.711-.107 1.94-.793 2.213-1.52.274-.727.274-1.352.192-1.488-.082-.136-.3-.219-.628-.383z" />
                </svg>
                O mándanos WhatsApp: 55 7719 6924
              </motion.a>
            </div>
          </div>
        </motion.section>
      </main>
 
      <Footer />
    </div>
  );
}
