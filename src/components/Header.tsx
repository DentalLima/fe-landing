"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import type { SiteSettings } from "@/types";
import { urlFor } from "@/lib/sanity";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

interface HeaderProps {
  settings: SiteSettings | null;
}

export default function Header({ settings }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = settings?.whatsappNumber || "51987654321";
  const message = settings?.whatsappDefaultMessage || "Hola, quisiera agendar una consulta.";
  const whatsappUrl = getDefaultWhatsAppUrl(phone, message);
  const businessName = settings?.businessName || "Dental Sonríe Lima";

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#horarios", label: "Horarios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {settings?.logo ? (
              <div className="relative w-10 h-10">
                <Image
                  src={urlFor(settings.logo).width(80).height(80).url()}
                  alt={businessName}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-blue">
                🦷
              </div>
            )}
            <div>
              <span className="font-display text-gray-900 text-lg leading-tight block">
                {businessName.split(" ").slice(0, -1).join(" ")}
              </span>
              <span className="font-display text-sky-600 text-lg leading-tight block -mt-1">
                {businessName.split(" ").slice(-1)}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {settings?.phone && (
              <a
                href={`tel:${settings.phone}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-sky-600 transition-colors"
              >
                <Phone size={16} />
                {settings.phone}
              </a>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-blue hover:shadow-lg hover:-translate-y-0.5"
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-sky-600 py-3 border-b border-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-full text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              📅 Agendar Cita por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
