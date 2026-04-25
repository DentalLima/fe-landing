"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppFloatingButtonProps {
  phone: string;
  message: string;
}

export default function WhatsAppFloatingButton({
  phone,
  message,
}: WhatsAppFloatingButtonProps) {
  const whatsappUrl = buildWhatsAppUrl(phone, message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3.5 rounded-full shadow-2xl whatsapp-pulse transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle size={24} className="flex-shrink-0" />
      <span className="font-semibold text-sm hidden sm:block">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
