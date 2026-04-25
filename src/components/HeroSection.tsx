import Image from "next/image";
import { ArrowDown, MessageCircle, MapPin } from "lucide-react";
import type { Hero } from "@/types";
import { urlFor } from "@/lib/sanity";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface HeroSectionProps {
  hero: Hero | null;
  whatsapp: string;
  defaultMessage: string;
}

export default function HeroSection({ hero, whatsapp, defaultMessage }: HeroSectionProps) {
  const title = hero?.title || "Tu Sonrisa, Nuestra Prioridad";
  const subtitle =
    hero?.subtitle ||
    "Atención dental personalizada para toda la familia en el corazón de Miraflores. Agenda tu evaluación hoy.";
  const eyebrow = hero?.eyebrow || "Consultorio Dental en Lima";
  const primaryText = hero?.primaryButtonText || "Agendar Cita por WhatsApp";
  const primaryMessage = hero?.primaryButtonMessage || defaultMessage;
  const secondaryText = hero?.secondaryButtonText || "Ver Servicios";
  const secondaryUrl = hero?.secondaryButtonUrl || "#servicios";

  const whatsappUrl = buildWhatsAppUrl(whatsapp, primaryMessage);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-emerald-100/30 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0284c7 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              {eyebrow}
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight mb-6">
              {title.split(",").map((part, i, arr) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="text-sky-600">{part}</span>
                  ) : (
                    part
                  )}
                  {i < arr.length - 1 ? "," : ""}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              {[
                "✓ Ambiente seguro e higienizado",
                "✓ Precios referenciales",
                "✓ Atención personalizada",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 rounded-full text-base shadow-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                {primaryText}
              </a>
              <a
                href={secondaryUrl}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full text-base border border-gray-200 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {secondaryText}
                <ArrowDown size={18} className="mt-0.5" />
              </a>
            </div>

            {/* Location hint */}
            <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start text-sm text-gray-500">
              <MapPin size={14} className="text-sky-500" />
              <span>Miraflores, Lima, Perú</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-3xl rotate-3 scale-105" />

              <div className="relative w-full max-w-md lg:max-w-lg">
                {hero?.mainImage ? (
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={urlFor(hero.mainImage).width(600).height(750).url()}
                      alt="Consultorio Dental Sonríe Lima"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  /* Placeholder when no image */
                  <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sky-100 to-blue-50 border border-sky-200/50 shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🦷</div>
                      <p className="text-sky-600 font-semibold font-display text-2xl">
                        Dental Sonríe Lima
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Agrega una imagen desde Sanity Studio
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/4 bg-white rounded-2xl p-3 shadow-card border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">
                    ⭐
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">4.9 / 5</p>
                    <p className="text-xs text-gray-500">Pacientes satisfechos</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-3 shadow-card border border-gray-100 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-sm">
                    🦷
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">+500</p>
                    <p className="text-xs text-gray-500">Pacientes atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs font-medium">Explorar</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
