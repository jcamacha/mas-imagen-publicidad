import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import Testimonials from "@/components/Testimonials";
import AnimatedTitle from "@/components/AnimatedTitle";
import Link from "next/link";

// SVGs en string para ServiceCards
const iconDigital = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;

const iconFisico = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20.38 3.46L16 1.7A2 2 0 0 0 14.3 2L12 4.3L9.7 2a2 2 0 0 0-1.7-.3L3.62 3.46A2 2 0 0 0 2.2 5.18l.82 5.76a2 2 0 0 0 1.25 1.56L8 14.5V20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5.5l3.73-2a2 2 0 0 0 1.25-1.56l.82-5.76a2 2 0 0 0-1.42-1.72z"></path></svg>`;

export default function Home() {
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Header />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center text-center justify-center pt-24 pb-20 px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
            Taller propio • 12 años de experiencia
          </div>

          {/* H1 Animado */}
          <AnimatedTitle className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-fraunces leading-tight max-w-4xl">
            Tu marca, donde sea que tus{" "}
            <span className="gradient-text">clientes la encuentren</span>
          </AnimatedTitle>

          <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 font-manrope">
            Del pixel a la prenda, todo en un solo lugar. Creamos tu sitio web,
            gestionamos tus campañas y producimos tus uniformes en nuestro taller.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
            <Link
              href="/contacto"
              className="btn-primary text-center py-4 px-8 text-base font-semibold font-manrope cursor-pointer"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/servicios"
              className="btn-outline text-center py-4 px-8 text-base font-semibold font-manrope cursor-pointer"
            >
              Ver servicios
            </Link>
          </div>
        </section>

        {/* Section 2: Servicios (Dos mundos, una agencia) */}
        <section className="py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-fraunces mb-4">
              Dos mundos, una sola agencia
            </h2>
            <p className="text-text-muted font-manrope">
              Combinamos marketing digital de alto nivel con producción física de serigrafía y uniformes. Sin intermediarios, una sola factura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={iconDigital}
              title="Presencia Digital"
              description="Posicionamiento SEO, anuncios en Google y Meta, diseño web con CSP seguro y redes sociales. Todo planeado para conseguir prospectos calificados en el mercado de México."
              cta="Ver detalles digitales"
              href="/servicios#digital"
            />
            <ServiceCard
              icon={iconFisico}
              title="Presencia Física (Taller)"
              description="Serigrafía textil con pulpo automático, playeras de campaña, uniformes de trabajo tipo polo bordados, tazas impresas y displays promocionales. Calidad controlada por nosotros."
              cta="Explorar taller físico"
              href="/servicios#fisico"
            />
          </div>
        </section>

        {/* Section 3: Paquetes Integrados */}
        <section className="py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-fraunces mb-4">
              Planes Todo en Uno
            </h2>
            <p className="text-text-muted font-manrope">
              Elige un paquete que integre tu presencia online con materiales físicos para tu equipo de trabajo. Ahorra tiempo y presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            <PackageCard
              name="Arranque"
              price="$8,000 - $15,000"
              services={[
                "Landing page optimizada",
                "Google Business y SEO básico",
                "Campañas de Meta Ads (Facebook/IG)",
                "Reporte de visitas mensual",
              ]}
              products={[
                "20 playeras en serigrafía",
                "10 tazas con tu logo",
                "1 lona publicitaria (3x2m)",
              ]}
              featured={false}
            />
            <PackageCard
              name="Negocio en Serio"
              price="$15,000 - $30,000"
              services={[
                "Sitio web corporativo (5 pág.)",
                "SEO local avanzado",
                "Meta Ads + Google Ads integrados",
                "Gestión de 2 redes sociales",
              ]}
              products={[
                "50 playeras en serigrafía",
                "15 polos bordadas (uniformes)",
                "30 tazas promocionales",
                "2 displays tipo araña",
              ]}
              featured={true}
            />
            <PackageCard
              name="Marca Completa"
              price="$30,000 - $60,000"
              services={[
                "Sitio web con e-commerce",
                "SEO Avanzado & Contenidos",
                "Campañas Omnicanal completas",
                "Embudo de ventas automatizado",
              ]}
              products={[
                "150 playeras promocionales",
                "40 polos bordados premium",
                "100 artículos promocionales mixtos",
                "1 letrero exterior LED 3D",
              ]}
              featured={false}
            />
          </div>
        </section>

        {/* Section 4: Diferenciador */}
        <section className="py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-fraunces mb-4">
              ¿Por qué Más Imagen Publicidad?
            </h2>
            <p className="text-text-muted font-manrope">
              Nuestra ventaja competitiva radica en que controlamos toda la cadena de valor, desde el código hasta la costura.
            </p>
          </div>

          <div className="bento-grid max-w-5xl mx-auto">
            <div className="bento-card">
              <h3 className="text-xl font-bold text-white font-fraunces mb-3">
                Taller Propio de Serigrafía
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                No somos intermediarios. Con 12 años operando "Más Imagen / Serigrafics", controlamos tiempos de entrega, calidad de tintas y precios de fábrica. Nadie más te ofrece web y playeras directo de taller.
              </p>
            </div>
            <div className="bento-card border-accent/25">
              <h3 className="text-xl font-bold text-white font-fraunces mb-3">
                Todo con un Solo Proveedor
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Simplifica tu administración. Una sola factura para tus campañas de Google Ads y para los uniformes de tu personal. Evita llamadas cruzadas entre agencias y talleres externos.
              </p>
            </div>
            <div className="bento-card">
              <h3 className="text-xl font-bold text-white font-fraunces mb-3">
                Resultados Reales y Medibles
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-manrope">
                Medimos conversiones, llamadas y ventas en tu web, al mismo tiempo que te entregamos uniformes profesionales que generan confianza de marca inmediata en el mundo físico.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Proceso */}
        <section className="py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-fraunces mb-4">
              Cómo lo logramos
            </h2>
            <p className="text-text-muted font-manrope">
              Un camino estructurado en cuatro fases para llevar tu marca al siguiente nivel digital y físico.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Paso 1 */}
            <div className="text-center p-6 bg-surface border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4 font-mono font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-fraunces">Estrategia</h3>
              <p className="text-text-muted text-xs font-manrope leading-relaxed">
                Analizamos tu nicho en México, definimos palabras clave y estructuramos las necesidades de indumentaria de tu equipo.
              </p>
            </div>
            {/* Paso 2 */}
            <div className="text-center p-6 bg-surface border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4 font-mono font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-fraunces">Diseño</h3>
              <p className="text-text-muted text-xs font-manrope leading-relaxed">
                Creamos los prototipos de tu interfaz web y los fotomontajes de las prendas y artículos promocionales para tu autorización.
              </p>
            </div>
            {/* Paso 3 */}
            <div className="text-center p-6 bg-surface border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4 font-mono font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-fraunces">Producción</h3>
              <p className="text-text-muted text-xs font-manrope leading-relaxed">
                Nuestros programadores escriben código seguro mientras el taller estampa y borda tus uniformes con precisión milimétrica.
              </p>
            </div>
            {/* Paso 4 */}
            <div className="text-center p-6 bg-surface border border-border rounded-xl">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4 font-mono font-bold text-lg">
                04
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-fraunces">Medición</h3>
              <p className="text-text-muted text-xs font-manrope leading-relaxed">
                Lanzamos campañas digitales, monitoreamos las estadísticas de visitas y te entregamos tu paquete físico directo en tu local.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-20 px-6 bg-surface/30 border-y border-border">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-fraunces mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-text-muted font-manrope">
              Casos reales de PyMEs mexicanas que integraron su publicidad con nosotros.
            </p>
          </div>
          <Testimonials />
        </section>

        {/* Section 7: Clientes (Logos de negocios mexicanos reales) */}
        <section className="py-16 px-6">
          <h2 className="text-2xl font-bold text-center text-white font-fraunces mb-10">
            Empresas que confían en nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto items-center justify-center">
            {[
              "Tacos El Patrón",
              "Clínica Dental Juárez",
              "Café de Toluca",
              "Ferretería La Principal",
              "Pastelería Marisol",
              "Gimnasio Zeus",
              "Boutique Sofía",
              "Transportes Mexiquenses",
            ].map((name, idx) => (
              <div
                key={idx}
                className="bg-surface border border-border rounded-xl p-4 text-center text-xs font-bold font-mono tracking-wider text-text-muted hover:text-white transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: CTA Final Formulario Simple */}
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white font-fraunces mb-4">
              ¿Listo para crecer tu negocio?
            </h2>
            <p className="text-text-muted text-sm font-manrope mb-8">
              Déjanos tus datos mínimos y te contactaremos en menos de 24 horas hábiles para platicar de tu proyecto.
            </p>

            <form
              action="/contacto"
              className="flex flex-col sm:flex-row gap-3 justify-center items-stretch"
            >
              <input
                type="text"
                placeholder="Tu Nombre"
                required
                className="bg-bg border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent w-full sm:max-w-xs font-manrope"
              />
              <input
                type="email"
                placeholder="Tu Correo"
                required
                className="bg-bg border border-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent w-full sm:max-w-xs font-manrope"
              />
              <button
                type="submit"
                className="btn-primary py-3 px-6 text-sm font-semibold rounded-xl cursor-pointer"
              >
                Iniciar
              </button>
            </form>
          </div>
        </section>

        {/* Section 9: Stats Bar */}
        <section className="py-12 bg-surface/50 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">80%</div>
              <div className="text-xs text-text-muted font-manrope">Consumidores busca en Google</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">40%</div>
              <div className="text-xs text-text-muted font-manrope">Más ventas con presencia integrada</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">5,000+</div>
              <div className="text-xs text-text-muted font-manrope">Playeras producidas</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white font-mono mb-1">12+</div>
              <div className="text-xs text-text-muted font-manrope">Años de experiencia</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
