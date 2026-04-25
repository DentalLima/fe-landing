import Image from "next/image";
import { MessageCircle, Clock, Tag } from "lucide-react";
import type { Service } from "@/types";
import { urlFor } from "@/lib/sanity";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: Service;
  whatsapp: string;
  defaultMessage: string;
}

export default function ServiceCard({ service, whatsapp, defaultMessage }: ServiceCardProps) {
  const whatsappUrl = getServiceWhatsAppUrl(
    whatsapp,
    defaultMessage,
    service.whatsappMessage,
    service.name
  );

  const currency = service.currency === "USD" ? "$" : "S/";

  return (
    <div className="service-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:border-sky-200">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
        {service.image ? (
          <Image
            src={urlFor(service.image).width(400).height(300).url()}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-30">🦷</span>
          </div>
        )}

        {/* Category badge */}
        {service.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-100">
              {service.category}
            </span>
          </div>
        )}

        {/* Featured badge */}
        {service.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full">
              ⭐ Destacado
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">
          {service.name}
        </h3>

        {service.shortDescription && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
        )}

        {/* Meta info */}
        <div className="flex items-center gap-3 mb-4">
          {service.duration && (
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={12} />
              <span>{service.duration}</span>
            </div>
          )}

          {service.showPrice && service.referencePrice ? (
            <div className="flex items-center gap-1">
              <Tag size={12} className="text-sky-500" />
              <span className="text-sm font-bold text-sky-600">
                {service.priceNote && (
                  <span className="font-normal text-gray-400 mr-1">
                    {service.priceNote}
                  </span>
                )}
                {currency} {service.referencePrice.toLocaleString("es-PE")}
              </span>
            </div>
          ) : service.priceNote && !service.showPrice ? (
            <div className="flex items-center gap-1">
              <Tag size={12} className="text-gray-400" />
              <span className="text-xs text-gray-400">{service.priceNote}</span>
            </div>
          ) : null}
        </div>

        {/* Price disclaimer */}
        {service.showPrice && service.referencePrice && (
          <p className="text-xs text-gray-400 mb-4 italic">
            *Precio referencial, sujeto a evaluación
          </p>
        )}

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:shadow-blue"
        >
          <MessageCircle size={16} />
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
