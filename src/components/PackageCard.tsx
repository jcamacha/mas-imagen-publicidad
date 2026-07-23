import Link from "next/link";

interface PackageCardProps {
  name: string;
  price: string;
  services: string[];
  products: string[];
  featured: boolean;
}

export default function PackageCard({
  name,
  price,
  services,
  products,
  featured,
}: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-8 bg-surface border transition-all duration-300 ${
        featured
          ? "border-accent ring-2 ring-accent/20 shadow-[0_0_30px_rgba(99,102,241,0.15)] lg:scale-105 z-10"
          : "border-border hover:border-accent/50"
      }`}
    >
      {featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-accent to-accent-light rounded-full shadow-lg">
          Más popular
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold font-fraunces text-white mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 my-4">
          <span className="text-3xl font-extrabold text-white font-mono">{price}</span>
          <span className="text-text-muted text-sm">/mes</span>
        </div>

        <hr className="border-border my-6" />

        {/* Servicios Digitales */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-accent-light mb-3 font-mono">
            Presencia Digital
          </h4>
          <ul className="space-y-2.5">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text">
                <svg
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-manrope">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Productos Físicos */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-beige mb-3 font-mono">
            Productos Físicos
          </h4>
          <ul className="space-y-2.5">
            {products.map((product, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text">
                <svg
                  className="w-5 h-5 text-beige shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-manrope">{product}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/contacto"
          className={`w-full text-center block font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
            featured
              ? "bg-gradient-to-r from-accent to-accent-light text-white hover:opacity-90 shadow-md"
              : "bg-surface border border-border text-white hover:bg-border hover:border-accent"
          }`}
        >
          Cotizar Ahora
        </Link>
      </div>
    </div>
  );
}
