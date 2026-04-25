import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { About } from "@/types";
import { urlFor } from "@/lib/sanity";

interface AboutSectionProps {
  about: About | null;
}

const defaultHighlights = [
  "Ambiente moderno, limpio y seguro",
  "Profesionales con años de experiencia",
  "Atención para toda la familia",
  "Equipos modernos de diagnóstico",
  "Trato cercano y sin tecnicismos",
];

export default function AboutSection({ about }: AboutSectionProps) {
  const title = about?.title || "¿Por qué elegirnos?";
  const description =
    about?.description ||
    "Somos un consultorio dental privado comprometido con brindar atención de calidad en un ambiente tranquilo y de confianza. Nuestro equipo de profesionales está disponible para acompañarte en cada paso de tu tratamiento.";
  const highlights =
    about?.highlights && about.highlights.length > 0
      ? about.highlights
      : defaultHighlights;

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-sky-100 rounded-3xl" />

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {about?.image ? (
                  <Image
                    src={urlFor(about.image).width(600).height(450).url()}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">🏥</div>
                      <p className="text-sky-600 font-medium">Consultorio Dental</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-card border border-gray-100">
              <p className="text-3xl font-bold text-sky-600 font-display">+500</p>
              <p className="text-gray-500 text-xs mt-1">Pacientes atendidos</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle size={14} className="text-sky-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
