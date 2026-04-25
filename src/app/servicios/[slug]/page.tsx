import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Tag, MessageCircle, ArrowLeft } from "lucide-react";
import { getServiceBySlug, getSiteSettings, getAllServices } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Servicio no encontrado" };
  return {
    title: `${service.name} | Dental Sonríe Lima`,
    description: service.shortDescription || `Conoce más sobre ${service.name} en Dental Sonríe Lima.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const [service, settings] = await Promise.all([
    getServiceBySlug(slug),
    getSiteSettings(),
  ]);

  if (!service) notFound();

  const whatsapp = settings?.whatsappNumber || "51987654321";
  const defaultMessage = settings?.whatsappDefaultMessage || "Hola, quisiera agendar una consulta.";
  const whatsappUrl = getServiceWhatsAppUrl(whatsapp, defaultMessage, service.whatsappMessage, service.name);
  const currency = service.currency === "USD" ? "$" : "S/";

  return (
    <main className="min-h-screen bg-white">
      <Header settings={settings} />

      <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <a
          href="/#servicios"
          className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver a servicios
        </a>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sky-50 shadow-card">
            {service.image ? (
              <Image
                src={urlFor(service.image).width(700).height(525).url()}
                alt={service.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                🦷
              </div>
            )}
            {service.category && (
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-sky-100">
                  {service.category}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              {service.name}
            </h1>

            {service.shortDescription && (
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.shortDescription}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-6">
              {service.duration && (
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700">
                  <Clock size={16} className="text-sky-500" />
                  <span>Duración: <strong>{service.duration}</strong></span>
                </div>
              )}
              {service.showPrice && service.referencePrice && (
                <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 px-4 py-2 rounded-full text-sm text-sky-700">
                  <Tag size={16} className="text-sky-500" />
                  <span>
                    {service.priceNote && <span className="text-gray-400 mr-1">{service.priceNote}</span>}
                    <strong>{currency} {service.referencePrice.toLocaleString("es-PE")}</strong>
                  </span>
                </div>
              )}
            </div>

            {service.showPrice && service.referencePrice && (
              <p className="text-xs text-gray-400 italic mb-6">
                *Precio referencial. Puede variar según evaluación clínica individual.
              </p>
            )}

            {service.fullDescription && (
              <div className="mb-8">
                <h2 className="font-display text-xl text-gray-800 mb-3">Descripción del tratamiento</h2>
                <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
              </div>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-base py-4 rounded-xl transition-all duration-200 hover:shadow-blue"
            >
              <MessageCircle size={20} />
              Consultar por WhatsApp
            </a>

            <p className="text-gray-400 text-xs text-center mt-3">
              Respuesta rápida. Sin compromiso.
            </p>
          </div>
        </div>
      </div>

      <Footer settings={settings} />
      <WhatsAppFloatingButton phone={whatsapp} message={defaultMessage} />
    </main>
  );
}
