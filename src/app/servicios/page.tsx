import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-20 px-6 max-w-6xl mx-auto w-full">
        {/* H1 Animado */}
        <AnimatedTitle className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-fraunces text-center">
          Nuestros <span className="text-accent">Servicios</span>
        </AnimatedTitle>

        <p className="text-text-muted text-center font-manrope text-lg mb-4 max-w-2xl mx-auto">
          Explora soluciones integrales diseñadas para hacer crecer tu marca.
          Navega entre nuestros dos grandes pilares.
        </p>

        <p className="text-accent text-center font-manrope text-base font-semibold mb-12 max-w-2xl mx-auto bg-accent-light px-4 py-2.5 rounded-xl border border-accent/20">
          Todos nuestros servicios digitales pueden combinarse con producción física. Tú decides qué necesita tu negocio.
        </p>

        {/* Botones de Anclas */}
        <div className="flex justify-center gap-4 mb-20">
          <Link
            href="#digital"
            className="btn-outline !py-3 !px-6 text-sm font-semibold flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-accent"
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
            Presencia Digital
          </Link>
          <Link
            href="#fisico"
            className="btn-outline !py-3 !px-6 text-sm font-semibold flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 text-accent"
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
            Presencia Física
          </Link>
        </div>

        {/* Sección 1: Digital */}
        <section id="digital" className="scroll-mt-24 py-12 border-b border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold font-fraunces">
                Presencia Digital
              </h2>
              <p className="text-text-muted text-sm font-manrope">
                Estrategias web y de pauta publicitaria orientadas al mercado de
                México.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent-light border border-accent/20 text-accent font-mono text-xs uppercase font-bold">
              Marketing &amp; Desarrollo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                SEO Local &amp; Nacional
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Optimizamos la estructura de tu web y creamos contenido estratégico
                para que aparezcas en los primeros resultados de Google. Nos
                enfocamos en búsquedas locales dentro del Estado de México y la
                república entera.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Publicidad en Meta Ads
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Diseñamos y pautamos campañas en Facebook e Instagram enfocadas en
                conversión y generación de leads. Ideal para negocios locales que
                buscan prospectos de manera inmediata por WhatsApp o Messenger.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Pautas en Google Ads
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Capturamos a las personas que ya están buscando activamente tus
                servicios en Google. Creamos anuncios persuasivos que maximizan tu
                presupuesto por clic y elevan las llamadas o cotizaciones web.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Desarrollo Web (Next.js &amp; CSP)
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Escribimos interfaces rápidas y responsivas usando Next.js. Todos
                nuestros desarrollos incluyen configuraciones estrictas de seguridad
                en cabeceras CSP para proteger la información de tus clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Sección 2: Físico */}
        <section id="fisico" className="scroll-mt-24 py-20 border-b border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold font-fraunces">
                Presencia Física (Taller)
              </h2>
              <p className="text-text-muted text-sm font-manrope">
                Prendas y artículos corporativos producidos en nuestra propia planta.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-accent-light border border-accent/20 text-accent font-mono text-xs uppercase font-bold">
              Taller de Serigrafía Propio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/60 transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Serigrafía Textil Profesional
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Estampado de alta duración en pulpo automático para playeras
                promocionales de campañas, uniformes o marcas de ropa. Tintas
                plastisoles de la más alta resistencia a lavados.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/60 transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Uniformes Bordados Corporativos
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Bordados de logotipos de alta definición en camisas polo de algodón,
                camisas de mezclilla o gabardina, chalecos industriales y chamarras
                para que tu personal luzca una imagen profesional en campo.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/60 transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Merchandising &amp; Regalos
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Tazas sublimadas, cilindros de aluminio para agua, llaveros, plumas y
                agendas impresas. Excelente opción para obsequiar a tus clientes y
                lograr presencia de marca constante en sus oficinas o autos.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/60 transition-colors">
              <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center mb-4">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-fraunces mb-2">
                Letreros &amp; Lonas de Gran Formato
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Rotulación exterior en acrílico con luz de fondo, espectaculares
                ligeros, displays informativos enrollables para eventos de venta y
                lonas publicitarias gruesas resistentes al sol y la lluvia.
              </p>
            </div>
          </div>
        </section>

        {/* Tabla comparativa de paquetes */}
        <section className="py-20 border-b border-border">
          <h2 className="text-3xl font-bold font-fraunces text-center mb-12">
            Comparativa de Paquetes
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-text font-mono">
                    Entregable / Beneficio
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-accent font-mono text-center">
                    Arranque
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-accent font-mono text-center bg-bg/50">
                    Negocio en Serio
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-accent font-mono text-center">
                    Marca Completa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Sitio Web / Desarrollo
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    Landing Page (1 sección)
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    Sitio Web Corporativo (5 secciones)
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    Tienda en Línea o Web Corporativa Compleja
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Campañas Digitales
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    Meta Ads Básica
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    Meta Ads + Google Ads Integrados
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    Campañas Avanzadas Omnicanal
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Gestión Redes Sociales
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope font-mono">
                    No incluido
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    2 Redes (Facebook/IG)
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    3+ Redes con Contenido Semanal
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Serigrafía Textil (Taller)
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    20 Playeras básicas
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    50 Playeras en Serigrafía
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    150 Playeras en Serigrafía
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Polos Bordadas (Uniformes)
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope font-mono">
                    No incluido
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    15 Polos Bordadas
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    40 Polos Bordadas Premium
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-sm font-semibold text-text font-manrope">
                    Merch &amp; Rotulación
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    10 Tazas + 1 Lona
                  </td>
                  <td className="py-4 px-6 text-sm text-text text-center font-manrope bg-bg/50 font-semibold">
                    30 Tazas + 2 Displays Araña
                  </td>
                  <td className="py-4 px-6 text-sm text-text-muted text-center font-manrope">
                    100 Artículos Mixtos + Letrero LED 3D
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Preguntas frecuentes (FAQ Accordion con details nativo) */}
        <section className="py-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-fraunces text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            <details className="group bg-surface border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-semibold text-text cursor-pointer font-manrope select-none">
                ¿Tienen mínimos de compra en el taller de serigrafía?
                <span className="transition group-open:rotate-180 text-accent">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-relaxed font-manrope">
                Sí. Para garantizar la viabilidad y precios competitivos de taller
                directo, nuestro mínimo de producción textil en serigrafía es de 20
                piezas por diseño de estampado. Para uniformes bordados tipo polo, el
                mínimo de pedido es de 10 piezas.
              </p>
            </details>

            <details className="group bg-surface border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-semibold text-text cursor-pointer font-manrope select-none">
                ¿Cómo funciona la facturación de campañas digitales y uniformes?
                <span className="transition group-open:rotate-180 text-accent">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-relaxed font-manrope">
                Al ser una sola empresa la que controla ambos procesos, facturamos
                todo en el mismo folio. Podemos catalogar la factura bajo conceptos
                de pautas publicitarias, servicios digitales o artículos
                promocionales según convenga a la contabilidad de tu empresa, sin
                triangulaciones.
              </p>
            </details>

            <details className="group bg-surface border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-semibold text-text cursor-pointer font-manrope select-none">
                ¿Cuánto tiempo tardan en entregar un sitio web y el paquete físico?
                <span className="transition group-open:rotate-180 text-accent">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-relaxed font-manrope">
                El desarrollo de un sitio web corporativo de 5 secciones toma
                habitualmente entre 2 y 3 semanas. La producción textil en el taller
                de serigrafía toma de 5 a 7 días hábiles tras la aprobación del
                diseño. Coordinamos todo el proyecto para que los uniformes y
                materiales físicos se te entreguen en mano justo el día del
                lanzamiento de tu web.
              </p>
            </details>

            <details className="group bg-surface border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-semibold text-text cursor-pointer font-manrope select-none">
                ¿Ustedes administran el presupuesto de anuncios de Google y Meta?
                <span className="transition group-open:rotate-180 text-accent">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-relaxed font-manrope">
                Para garantizar total transparencia financiera, el presupuesto para las
                plataformas de anuncios se cobra directamente a tu tarjeta de crédito o
                débito corporativa en Meta Ads o Google Ads. Nosotros únicamente
                cobramos una tarifa fija mensual por el montaje, monitoreo técnico y
                optimización de las campañas digitales.
              </p>
            </details>

            <details className="group bg-surface border border-border rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-center font-semibold text-text cursor-pointer font-manrope select-none">
                ¿Dónde se encuentra su taller físico de serigrafía?
                <span className="transition group-open:rotate-180 text-accent">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-muted text-sm leading-relaxed font-manrope">
                Nuestras instalaciones de producción textil están localizadas en el
                Estado de México. Hacemos entregas a domicilio programadas en toda el
                Área Metropolitana del Valle de México (EdoMex y CDMX) y envíos
                consolidados al interior de la República Mexicana mediante FedEx, DHL
                o Estafeta.
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
