import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";
import Image from "next/image";

interface Project {
  title: string;
  industry: string;
  metric: string;
  description: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    title: "Restaurante completo",
    industry: "Alimentos & Bebidas",
    metric: "Web + Uniformes",
    description: "Desarrollo de página web y menú digital interactivo + producción de 50 uniformes estampados en serigrafía para personal de cocina y salón + campaña de Google Ads locales.",
    image: "/caso-taqueria.jpg",
  },
  {
    title: "Clínica profesional",
    industry: "Salud & Consultorios",
    metric: "Web + SEO Local",
    description: "Diseño de sitio web corporativo optimizado para agendamiento directo + posicionamiento SEO local en Google Maps + batas bordadas para personal médico y tarjetas de presentación.",
    image: "/caso-dental.jpg",
  },
  {
    title: "Constructora",
    industry: "Construcción & B2B",
    metric: "Web + Uniformes",
    description: "Desarrollo de portal web institucional + estampado de 100 playeras de alta visibilidad para personal de obra + diseño de letrero exterior publicitario + sesión fotográfica en sitio.",
    image: "/caso-cafe.jpg",
  },
  {
    title: "Tienda o E-commerce",
    industry: "Comercio & Retail",
    metric: "E-commerce + Bolsas",
    description: "Creación de tienda en línea veloz con pasarela de pagos integrada + producción de 200 bolsas de papel kraft impresas con tintas ecológicas + etiquetas textiles tejidas de marca.",
    image: "/caso-cafe.jpg",
  },
  {
    title: "Gimnasio o Studio",
    industry: "Fitness & Bienestar",
    metric: "Landing + Uniformes",
    description: "Página de aterrizaje de alta conversión para venta de membresías + confección de 150 playeras técnicas dry-fit sublimadas para socios + termos grabados + campañas en Instagram.",
    image: "/caso-dental.jpg",
  },
  {
    title: "Corporativo & Oficina",
    industry: "Servicios B2B",
    metric: "Web + Papelería",
    description: "Desarrollo de sitio web corporativo + diseño e impresión de papelería corporativa premium + letrero de recepción en acrílico 3D + uniformes ejecutivos con logotipos bordados.",
    image: "/caso-taqueria.jpg",
  },
];

export default function Portafolio() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-20 px-6 max-w-6xl mx-auto w-full">
        {/* H1 Animado */}
        <AnimatedTitle className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-fraunces text-center text-text">
          Lo que podemos hacer por tu <span className="text-accent">negocio</span>
        </AnimatedTitle>

        <p className="text-text-muted text-center font-manrope text-lg mb-16 max-w-2xl mx-auto">
          Del pixel a la prenda, todo en un solo lugar. Conoce las soluciones integrales en digital y físico que podemos implementar para hacer crecer tu marca.
        </p>

        {/* Grid 3x2 Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              {/* Imagen Placeholder */}
              <div className="relative h-48 w-full border-b border-border overflow-hidden bg-accent-light">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-accent-light text-accent text-xs font-mono font-bold tracking-wider px-2 py-1 rounded">
                  {project.industry}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold font-fraunces mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-manrope">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-border/80 pt-4 flex items-center justify-between">
                  <span className="text-xs text-text-muted uppercase font-mono tracking-wider">
                    Integración
                  </span>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold font-mono tracking-wide text-accent bg-accent-light">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
