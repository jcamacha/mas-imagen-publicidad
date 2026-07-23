import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedTitle from "@/components/AnimatedTitle";

interface Project {
  title: string;
  industry: string;
  metric: string;
  description: string;
  placeholderText: string;
}

const PROJECTS: Project[] = [
  {
    title: "Taquería Los Arbolitos (Naucalpan)",
    industry: "Alimentos & Bebidas",
    metric: "+180% Pedidos Online",
    description:
      "Desarrollamos su menú digital responsivo con integración a WhatsApp y estampamos 60 playeras en serigrafía para sus taqueros y repartidores.",
    placeholderText: "Menú Digital + 60 Playeras",
  },
  {
    title: "Clínica Dental Satélite (Tlalnepantla)",
    industry: "Salud & Dental",
    metric: "+95 Pacientes Nuevos / mes",
    description:
      "Estrategia de SEO Local posicionando 15 palabras clave en primera página de Google, combinada con rotulación exterior acrílica 3D con iluminación LED.",
    placeholderText: "SEO Local + Letrero LED 3D",
  },
  {
    title: "Transportes Mexiquenses (Toluca)",
    industry: "Logística & Transporte",
    metric: "350+ Uniformes Bordados",
    description:
      "Diseño de su sitio web institucional con CSP seguro y producción de uniformes para su personal operativo con polos bordadas de alta duración.",
    placeholderText: "Web Corporativa + 350 Polos",
  },
  {
    title: "Café Orgánico Coatepec (EdoMex)",
    industry: "Comercio Gourmet",
    metric: "+125% Ventas E-commerce",
    description:
      "Creación de tienda online de alta velocidad de carga y producción de 500 tazas sublimadas con el logotipo de la marca para venta al público.",
    placeholderText: "E-commerce + 500 Tazas Merch",
  },
  {
    title: "Gimnasio Zeus (Ecatepec)",
    industry: "Fitness & Bienestar",
    metric: "2,000+ Playeras Campaña",
    description:
      "Producción textil express para su relanzamiento anual en serigrafía y desarrollo de landing page promocional para captación de membresías.",
    placeholderText: "Landing Page + 2k Playeras",
  },
  {
    title: "Constructora Delta (Metepec)",
    industry: "B2B / Construcción",
    metric: "4 Leads Corporativos Premium",
    description:
      "Campañas de Google Ads optimizadas para el sector industrial del EdoMex, acompañadas de la entrega de 30 chalecos reflectantes bordados.",
    placeholderText: "Google Ads + 30 Chalecos",
  },
];

export default function Portafolio() {
  return (
    <div className="min-h-screen bg-bg flex flex-col justify-between">
      <Header />

      <main className="flex-grow py-20 px-6 max-w-6xl mx-auto w-full">
        {/* H1 Animado */}
        <AnimatedTitle className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-fraunces text-center">
          Casos de <span className="gradient-text">Éxito</span>
        </AnimatedTitle>

        <p className="text-text-muted text-center font-manrope text-lg mb-16 max-w-2xl mx-auto">
          Descubre cómo ayudamos a negocios del Estado de México y alrededores a
          conectar su estrategia en línea con su indumentaria física.
        </p>

        {/* Grid 3x2 Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              {/* Imagen Placeholder Estilizada */}
              <div className="h-48 bg-gradient-to-br from-border to-surface flex flex-col items-center justify-center p-6 text-center border-b border-border relative overflow-hidden">
                {/* Micro-animación de fondo */}
                <div className="absolute inset-0 bg-accent/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-xs font-mono font-bold tracking-wider text-accent-light uppercase mb-2">
                  {project.industry}
                </span>
                <span className="text-sm font-bold font-fraunces text-white">
                  {project.placeholderText}
                </span>
                <div className="absolute bottom-4 right-4 text-xs font-bold text-beige font-mono uppercase tracking-wider">
                  Caso #{idx + 1}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-fraunces mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-manrope">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-border/80 pt-4 flex items-center justify-between">
                  <span className="text-xs text-text-muted uppercase font-mono tracking-wider">
                    Logro Destacado
                  </span>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold font-mono tracking-wide text-white bg-gradient-to-r from-accent to-accent-light">
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
