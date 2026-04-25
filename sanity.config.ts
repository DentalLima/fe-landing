import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "dental-sonrie-lima",
  title: "Dental Sonríe Lima - CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("⚙️ Configuración del Sitio")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.listItem()
              .title("🦸 Hero Principal")
              .child(S.documentTypeList("hero")),
            S.listItem()
              .title("✅ Elementos de Confianza")
              .child(S.documentTypeList("trustItem")),
            S.divider(),
            S.listItem()
              .title("🦷 Servicios Dentales")
              .child(S.documentTypeList("service")),
            S.listItem()
              .title("🎁 Promociones")
              .child(S.documentTypeList("promotion")),
            S.divider(),
            S.listItem()
              .title("ℹ️ Sobre el Consultorio")
              .child(S.documentTypeList("about")),
            S.listItem()
              .title("👨‍⚕️ Equipo Odontológico")
              .child(S.documentTypeList("doctor")),
            S.listItem()
              .title("🖼️ Galería")
              .child(S.documentTypeList("galleryImage")),
            S.divider(),
            S.listItem()
              .title("⭐ Testimonios")
              .child(S.documentTypeList("testimonial")),
            S.listItem()
              .title("❓ Preguntas Frecuentes")
              .child(S.documentTypeList("faq")),
            S.listItem()
              .title("🕐 Horarios de Atención")
              .child(S.documentTypeList("schedule")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
