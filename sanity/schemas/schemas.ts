import { defineField, defineType } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero Principal",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título Principal", type: "string", validation: (R) => R.required() }),
    defineField({ name: "subtitle", title: "Subtítulo", type: "text", rows: 3 }),
    defineField({ name: "eyebrow", title: "Texto pequeño arriba del título", type: "string" }),
    defineField({ name: "mainImage", title: "Imagen Principal", type: "image", options: { hotspot: true } }),
    defineField({ name: "primaryButtonText", title: "Botón Principal: Texto", type: "string" }),
    defineField({ name: "primaryButtonMessage", title: "Botón Principal: Mensaje WhatsApp", type: "text", rows: 2 }),
    defineField({ name: "secondaryButtonText", title: "Botón Secundario: Texto", type: "string" }),
    defineField({ name: "secondaryButtonUrl", title: "Botón Secundario: URL (ej: #servicios)", type: "string" }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", active: "active" },
    prepare: ({ title, active }) => ({ title: title || "Hero", subtitle: active ? "✅ Activo" : "❌ Inactivo" }),
  },
});

export const trustItemSchema = defineType({
  name: "trustItem",
  title: "Elementos de Confianza",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 2 }),
    defineField({ name: "iconName", title: "Nombre del Ícono (Lucide)", type: "string", description: "Ej: Shield, Heart, Clock, MapPin, Star, CheckCircle" }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "title", order: "order" },
    prepare: ({ title, order }) => ({ title: `${order}. ${title}` }),
  },
});

export const serviceSchema = defineType({
  name: "service",
  title: "Servicios Dentales",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre del Servicio", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "name", maxLength: 96 }, validation: (R) => R.required() }),
    defineField({ name: "shortDescription", title: "Descripción Corta", type: "text", rows: 3 }),
    defineField({ name: "fullDescription", title: "Descripción Completa", type: "text", rows: 6 }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Categoría", type: "string", options: { list: ["Preventivo", "Estético", "Ortodoncia", "Restaurador", "Cirugía", "Urgencia", "Diagnóstico"] } }),
    defineField({ name: "referencePrice", title: "Precio Referencial", type: "number" }),
    defineField({ name: "currency", title: "Moneda", type: "string", initialValue: "PEN", options: { list: ["PEN", "USD"] } }),
    defineField({ name: "showPrice", title: "Mostrar precio en la web", type: "boolean", initialValue: true }),
    defineField({ name: "priceNote", title: "Nota de precio", type: "string", description: 'Ej: "desde", "evaluación previa", etc.' }),
    defineField({ name: "duration", title: "Duración estimada", type: "string", description: 'Ej: "30-45 min"' }),
    defineField({ name: "featured", title: "Destacado en inicio", type: "boolean", initialValue: false }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "whatsappMessage", title: "Mensaje de WhatsApp específico", type: "text", rows: 2 }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "name", featured: "featured", active: "active" },
    prepare: ({ title, featured, active }) => ({
      title,
      subtitle: `${featured ? "⭐ Destacado" : ""} ${active ? "✅" : "❌"}`,
    }),
  },
});

export const promotionSchema = defineType({
  name: "promotion",
  title: "Promociones",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
    defineField({ name: "ctaText", title: "Texto del botón", type: "string" }),
    defineField({ name: "whatsappMessage", title: "Mensaje de WhatsApp", type: "text", rows: 2 }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "startDate", title: "Fecha de inicio", type: "datetime" }),
    defineField({ name: "endDate", title: "Fecha de fin", type: "datetime" }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "title", active: "active" },
    prepare: ({ title, active }) => ({ title, subtitle: active ? "✅ Activo" : "❌ Inactivo" }),
  },
});

export const aboutSchema = defineType({
  name: "about",
  title: "Sobre el Consultorio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 5 }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
    defineField({ name: "highlights", title: "Puntos destacados", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
  ],
});

export const doctorSchema = defineType({
  name: "doctor",
  title: "Equipo Odontológico",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nombre completo", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", title: "Cargo / Especialidad", type: "string" }),
    defineField({ name: "bio", title: "Biografía", type: "text", rows: 4 }),
    defineField({ name: "photo", title: "Foto", type: "image", options: { hotspot: true } }),
    defineField({ name: "specialties", title: "Especialidades", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});

export const galleryImageSchema = defineType({
  name: "galleryImage",
  title: "Galería de Imágenes",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string" }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true }, validation: (R) => R.required() }),
    defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonios",
  type: "document",
  fields: [
    defineField({ name: "patientName", title: "Nombre del Paciente", type: "string", validation: (R) => R.required() }),
    defineField({ name: "comment", title: "Comentario", type: "text", rows: 4, validation: (R) => R.required() }),
    defineField({ name: "rating", title: "Calificación (1-5)", type: "number", validation: (R) => R.min(1).max(5) }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "patientName", subtitle: "comment" },
  },
});

export const faqSchema = defineType({
  name: "faq",
  title: "Preguntas Frecuentes",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Pregunta", type: "string", validation: (R) => R.required() }),
    defineField({ name: "answer", title: "Respuesta", type: "text", rows: 4, validation: (R) => R.required() }),
    defineField({ name: "active", title: "Activo", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "question" },
  },
});

export const scheduleSchema = defineType({
  name: "schedule",
  title: "Horarios de Atención",
  type: "document",
  fields: [
    defineField({ name: "day", title: "Día", type: "string", validation: (R) => R.required() }),
    defineField({ name: "openingTime", title: "Hora de apertura", type: "string", description: 'Ej: "9:00 a.m."' }),
    defineField({ name: "closingTime", title: "Hora de cierre", type: "string", description: 'Ej: "7:00 p.m."' }),
    defineField({ name: "closed", title: "Cerrado", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Orden", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "day", closed: "closed" },
    prepare: ({ title, closed }) => ({ title, subtitle: closed ? "🔴 Cerrado" : "🟢 Abierto" }),
  },
});
