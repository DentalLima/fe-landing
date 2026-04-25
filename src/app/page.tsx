import {
  getSiteSettings,
  getHero,
  getTrustItems,
  getAllServices,
  getActivePromotions,
  getAbout,
  getDoctors,
  getGallery,
  getTestimonials,
  getFaqs,
  getSchedule,
} from "@/lib/queries";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import PromotionBanner from "@/components/PromotionBanner";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ScheduleLocationSection from "@/components/ScheduleLocationSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default async function HomePage() {
  const [
    settings,
    hero,
    trustItems,
    services,
    promotions,
    about,
    doctors,
    gallery,
    testimonials,
    faqs,
    schedule,
  ] = await Promise.all([
    getSiteSettings(),
    getHero(),
    getTrustItems(),
    getAllServices(),
    getActivePromotions(),
    getAbout(),
    getDoctors(),
    getGallery(),
    getTestimonials(),
    getFaqs(),
    getSchedule(),
  ]);

  const whatsapp = settings?.whatsappNumber || "51987654321";
  const defaultMessage =
    settings?.whatsappDefaultMessage ||
    "Hola, quisiera agendar una consulta. ¿Tienen disponibilidad?";

  return (
    <main className="min-h-screen bg-white">
      <Header settings={settings} />

      <HeroSection
        hero={hero}
        whatsapp={whatsapp}
        defaultMessage={defaultMessage}
      />

      <TrustBar items={trustItems} />

      <ServicesSection
        services={services}
        whatsapp={whatsapp}
        defaultMessage={defaultMessage}
      />

      {promotions.length > 0 && (
        <PromotionBanner
          promotions={promotions}
          whatsapp={whatsapp}
        />
      )}

      <AboutSection about={about} />

      {doctors.length > 0 && <DoctorsSection doctors={doctors} />}

      {gallery.length > 0 && <GallerySection images={gallery} />}

      {testimonials.length > 0 && (
        <TestimonialsSection testimonials={testimonials} />
      )}

      {faqs.length > 0 && <FaqSection faqs={faqs} />}

      <ScheduleLocationSection
        schedule={schedule}
        settings={settings}
      />

      <FinalCTA
        whatsapp={whatsapp}
        defaultMessage={defaultMessage}
        businessName={settings?.businessName}
      />

      <Footer settings={settings} />

      <WhatsAppFloatingButton
        phone={whatsapp}
        message={defaultMessage}
      />
    </main>
  );
}
