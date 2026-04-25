import { MessageCircle, CalendarCheck } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface FinalCTAProps {
  whatsapp: string;
  defaultMessage: string;
  businessName?: string;
}

export default function FinalCTA({ whatsapp, defaultMessage, businessName }: FinalCTAProps) {
  const whatsappUrl = buildWhatsAppUrl(whatsapp, defaultMessage);

  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-100 rounded-3xl mb-6">
          <CalendarCheck size={36} className="text-sky-600" />
        </div>

        <span className="inline-block text-sky-600 text-sm font-semibold uppercase tracking-widest mb-4">
          ¿Listo para tu primera cita?
        </span>

        <h2 className="font-display text-4xl lg:text-6xl text-gray-900 mb-6 leading-tight">
          Agenda tu evaluación{" "}
          <span className="text-sky-600">hoy mismo</span>
        </h2>

        <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Contáctanos por WhatsApp, cuéntanos lo que necesitas y te respondemos
          a la brevedad. Sin esperas largas, sin complicaciones.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            "📍 Miraflores, Lima",
            "⏱️ Respuesta rápida por WhatsApp",
            "💳 Precios accesibles",
            "🦷 Para toda la familia",
          ].map((item) => (
            <span
              key={item}
              className="bg-gray-50 border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Big CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-blue hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
        >
          <MessageCircle size={24} />
          Agendar Cita por WhatsApp
        </a>

        <p className="text-gray-400 text-sm mt-6">
          *Los precios mostrados son referenciales y pueden variar según evaluación clínica.
        </p>
      </div>
    </section>
  );
}
