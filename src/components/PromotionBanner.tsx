import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Promotion } from "@/types";
import { urlFor } from "@/lib/sanity";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface PromotionBannerProps {
  promotions: Promotion[];
  whatsapp: string;
}

export default function PromotionBanner({ promotions, whatsapp }: PromotionBannerProps) {
  if (!promotions.length) return null;
  const promo = promotions[0];

  const whatsappUrl = buildWhatsAppUrl(
    whatsapp,
    promo.whatsappMessage || `Hola, vi la promoción "${promo.title}" y me gustaría obtener más información.`
  );

  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 relative overflow-hidden">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              🎁 Promoción especial
            </span>
            <h2 className="font-display text-3xl lg:text-5xl mb-4 leading-tight">
              {promo.title}
            </h2>
            {promo.description && (
              <p className="text-sky-100 text-lg leading-relaxed mb-8">
                {promo.description}
              </p>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-sky-700 font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              {promo.ctaText || "Aprovechar Promoción"}
            </a>
          </div>

          {/* Image */}
          {promo.image && (
            <div className="relative">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={urlFor(promo.image).width(600).height(400).url()}
                  alt={promo.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
