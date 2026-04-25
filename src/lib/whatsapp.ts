/**
 * Genera un link de WhatsApp con número y mensaje
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Genera link de WhatsApp para un servicio específico o mensaje genérico
 */
export function getServiceWhatsAppUrl(
  phone: string,
  defaultMessage: string,
  serviceMessage?: string | null,
  serviceName?: string
): string {
  const message =
    serviceMessage ||
    (serviceName
      ? `Hola, me gustaría obtener información sobre ${serviceName}. ¿Pueden ayudarme?`
      : defaultMessage);
  return buildWhatsAppUrl(phone, message);
}

/**
 * Mensaje genérico de agendar cita
 */
export function getDefaultWhatsAppUrl(
  phone: string,
  defaultMessage?: string
): string {
  const message = defaultMessage || "Hola, quisiera agendar una consulta dental. ¿Tienen disponibilidad?";
  return buildWhatsAppUrl(phone, message);
}
