import type { Metadata } from "next";
import "./globals.css";
import { getSiteSettings } from "@/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: settings?.seoTitle || settings?.businessName || "Dental Sonríe Lima",
    description:
      settings?.seoDescription ||
      "Consultorio dental en Lima. Atención personalizada para toda la familia. Agenda tu cita por WhatsApp.",
    openGraph: {
      title: settings?.seoTitle || settings?.businessName || "Dental Sonríe Lima",
      description:
        settings?.seoDescription ||
        "Consultorio dental en Lima. Atención personalizada para toda la familia.",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
