import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-20 px-6 max-w-4xl mx-auto w-full">
        {/* H1 Animado */}
        <AnimatedTitle className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-fraunces text-center">
          Sobre <span className="gradient-text">Nosotros</span>
        </AnimatedTitle>

        <p className="text-text-muted text-center font-manrope text-lg mb-16 max-w-2xl mx-auto">
          Conoce la historia, misión y el equipo detrás de Más Imagen Publicidad,
          la agencia que conecta el píxel con la prenda.
        </p>

        {/* Sección Historia */}
        <div className="space-y-12">
          <div className="bg-surface border border-border p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white font-fraunces mb-4">
              Nuestra Historia
            </h2>
            <div className="space-y-4 text-text-muted font-manrope text-sm leading-relaxed">
              <p>
                Todo comenzó en el Estado de México hace 12 años bajo el nombre
                de <strong>&ldquo;Más Imagen / Serigrafics&rdquo;</strong>, un
                pequeño pero dedicado taller familiar de serigrafía. Desde
                nuestros inicios, nos enfocamos en vestir a las micro y pequeñas
                empresas de la región con playeras promocionales, uniformes
                industriales y artículos de merch que destacaran del resto.
              </p>
              <p>
                Con el paso de los años y la digitalización acelerada de los
                negocios, nos dimos cuenta de que nuestros clientes necesitaban
                algo más que playeras impresas para vender: necesitaban ser
                encontrados en internet. Las agencias tradicionales les diseñaban
                webs increíbles, pero no sabían cómo traducir eso en ropa física
                para su personal de campo. Los talleres de serigrafía les
                imprimían uniformes, pero no entendían de paletas de colores web
                o logotipos vectorizados de alta fidelidad.
              </p>
              <p>
                Fue así como en 2020 decidimos dar el paso evolutivo e integrar
                servicios de <strong>Marketing Digital y SEO</strong> directamente
                en nuestra oferta de valor. Hoy en día, somos la única agencia
                integral en el EdoMex que te entrega tu campaña publicitaria
                digital en Google y Meta, tu página web adaptada a CSP, y los
                uniformes listos para tu equipo en el local físico, todo en una
                sola factura y bajo el mismo estándar de calidad.
              </p>
            </div>
          </div>

          {/* Misión y Valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white font-fraunces mb-4">
                Misión
              </h2>
              <p className="text-text-muted font-manrope text-sm leading-relaxed">
                Empoderar a las PyMEs mexicanas integrando su identidad física y
                presencia digital en una sola estrategia coherente, facilitando
                la gestión de proveedores con transparencia, velocidad y
                excelencia técnica.
              </p>
            </div>

            <div className="bg-surface border border-border p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white font-fraunces mb-4">
                Valores
              </h2>
              <ul className="text-text-muted font-manrope text-sm leading-relaxed space-y-2">
                <li>
                  <strong className="text-accent-light">Sinceridad:</strong>{" "}
                  Entregamos reportes basados en conversiones reales, no en
                  &ldquo;métricas de vanidad&rdquo;.
                </li>
                <li>
                  <strong className="text-accent-light">
                    Calidad de Taller:
                  </strong>{" "}
                  Cada costura y cada línea de código pasa por nuestra
                  inspección manual.
                </li>
                <li>
                  <strong className="text-accent-light">Cercanía:</strong> Somos
                  del EdoMex y entendemos los retos de los negocios de la
                  región.
                </li>
              </ul>
            </div>
          </div>

          {/* Foto Placeholder Equipo */}
          <div className="bg-surface border border-border rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white font-fraunces mb-2">
              Nuestro Equipo
            </h3>
            <p className="text-text-muted font-manrope text-xs max-w-md mb-6">
              Programadores, diseñadores gráficos, estrategas SEO y maestros
              serigrafistas trabajando bajo un mismo techo.
            </p>
            <div className="w-full bg-bg border border-border border-dashed rounded-xl py-12 text-sm text-text-muted font-mono uppercase tracking-wider">
              Foto del equipo (Más Imagen Publicidad &amp; Serigrafics)
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
