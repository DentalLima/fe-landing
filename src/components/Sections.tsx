"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import type { Doctor, GalleryImage, Testimonial, FAQ } from "@/types";
import { urlFor } from "@/lib/sanity";

// ─── DoctorsSection ───────────────────────────────────────────────
interface DoctorsSectionProps {
  doctors: Doctor[];
}

export function DoctorsSection({ doctors }: DoctorsSectionProps) {
  if (!doctors.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestro Equipo
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Equipo Odontológico
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Profesionales comprometidos con tu salud bucal y tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover:border-sky-200 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br from-sky-50 to-blue-50">
                {doctor.photo ? (
                  <Image
                    src={urlFor(doctor.photo).width(300).height(400).url()}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    👨‍⚕️
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-gray-800 mb-1">{doctor.name}</h3>
                {doctor.role && (
                  <p className="text-sky-600 text-sm font-semibold mb-3">{doctor.role}</p>
                )}
                {doctor.bio && (
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{doctor.bio}</p>
                )}
                {doctor.specialties && doctor.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, i) => (
                      <span key={i} className="bg-sky-50 text-sky-700 text-xs px-2.5 py-1 rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GallerySection ───────────────────────────────────────────────
interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  if (!images.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Galería
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Un ambiente moderno, limpio y acogedor para tu comodidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={img._id}
              className={`relative overflow-hidden rounded-2xl bg-gray-100 ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={urlFor(img.image).width(600).height(600).url()}
                alt={img.alt || img.title || "Consultorio dental"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TestimonialsSection ──────────────────────────────────────────
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials.length) return null;

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Lo que dicen nuestros pacientes
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Testimonios
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:border-sky-200 hover:shadow-card transition-all duration-300"
            >
              {/* Stars */}
              {t.rating && (
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < t.rating! ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>
              )}

              <p className="text-gray-700 leading-relaxed mb-5 italic">
                &ldquo;{t.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold">
                  {t.patientName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.patientName}</p>
                  <p className="text-gray-400 text-xs">Paciente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FaqSection ───────────────────────────────────────────────────
interface FaqSectionProps {
  faqs: FAQ[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faqs.length) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Dudas frecuentes
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-500 text-lg">
            Resolvemos tus dudas antes de tu primera visita.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq._id;
            return (
              <div
                key={faq._id}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-sky-200 bg-sky-50/50" : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq._id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`font-semibold text-base ${isOpen ? "text-sky-700" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <ChevronUp size={20} className="text-sky-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
