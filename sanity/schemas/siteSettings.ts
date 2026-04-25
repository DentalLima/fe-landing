import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({ name: "businessName", title: "Nombre del Negocio", type: "string", validation: (R) => R.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "whatsappNumber", title: "Número de WhatsApp (con código de país)", type: "string", description: "Ej: 51987654321", validation: (R) => R.required() }),
    defineField({ name: "whatsappDefaultMessage", title: "Mensaje por defecto de WhatsApp", type: "text", rows: 2 }),
    defineField({ name: "phone", title: "Teléfono", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Dirección", type: "string" }),
    defineField({ name: "googleMapsUrl", title: "URL de Google Maps", type: "url" }),
    defineField({ name: "googleMapsEmbedUrl", title: "URL de Embed de Google Maps (iframe)", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "tiktokUrl", title: "TikTok URL", type: "url" }),
    defineField({ name: "footerText", title: "Texto del Footer", type: "text", rows: 2 }),
    defineField({ name: "seoTitle", title: "SEO: Título", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO: Descripción", type: "text", rows: 3 }),
    defineField({ name: "seoImage", title: "SEO: Imagen Social", type: "image" }),
  ],
  preview: {
    select: { title: "businessName" },
    prepare: ({ title }) => ({ title: title || "Configuración del Sitio" }),
  },
});
