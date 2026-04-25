import type { Service } from "@/types";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
  services: Service[];
  whatsapp: string;
  defaultMessage: string;
}

export default function ServicesSection({ services, whatsapp, defaultMessage }: ServicesSectionProps) {
  if (services.length === 0) {
    return null;
  }

  // Get unique categories
  const categories = Array.from(new Set(services.map((s) => s.category).filter(Boolean)));

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestros Tratamientos
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Servicios Dentales
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales para cuidar la salud bucal de toda tu familia.
            Precios referenciales sujetos a evaluación previa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              whatsapp={whatsapp}
              defaultMessage={defaultMessage}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            ¿No encuentras lo que buscas? Consúltanos directamente.
          </p>
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm border-b-2 border-sky-200 hover:border-sky-400 pb-0.5 transition-colors"
          >
            Consultar por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
