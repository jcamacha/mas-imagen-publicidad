import Link from "next/link";

interface ServiceCardProps {
  icon: string; // SVG string
  title: string;
  description: string;
  cta: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
  href,
}: ServiceCardProps) {
  return (
    <div className="bento-card flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
      <div>
        <div
          className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <h3 className="text-2xl font-bold mb-3 font-fraunces text-white group-hover:text-accent-light transition-all duration-300">
          {title}
        </h3>
        <p className="text-text-muted text-base leading-relaxed mb-6 font-manrope">
          {description}
        </p>
      </div>
      <div>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-accent-light group-hover:text-white transition-all duration-300 gap-2"
        >
          {cta}
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
