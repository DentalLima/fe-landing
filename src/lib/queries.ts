import { sanityClient } from "./sanity";
import type {
  SiteSettings,
  Hero,
  TrustItem,
  Service,
  Promotion,
  About,
  Doctor,
  GalleryImage,
  Testimonial,
  FAQ,
  Schedule,
} from "@/types";

// ─── Site Settings ───────────────────────────────────────────────
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0]{
      _id,
      businessName,
      logo,
      whatsappNumber,
      whatsappDefaultMessage,
      phone,
      email,
      address,
      googleMapsUrl,
      googleMapsEmbedUrl,
      instagramUrl,
      facebookUrl,
      tiktokUrl,
      footerText,
      seoTitle,
      seoDescription,
      seoImage
    }`,
    {},
    { next: { tags: ["siteSettings"] } }
  );
}

// ─── Hero ────────────────────────────────────────────────────────
export async function getHero(): Promise<Hero | null> {
  return sanityClient.fetch(
    `*[_type == "hero" && active == true] | order(_updatedAt desc)[0]{
      _id,
      title,
      subtitle,
      eyebrow,
      mainImage,
      primaryButtonText,
      primaryButtonMessage,
      secondaryButtonText,
      secondaryButtonUrl,
      active
    }`,
    {},
    { next: { tags: ["hero"] } }
  );
}

// ─── Trust Items ─────────────────────────────────────────────────
export async function getTrustItems(): Promise<TrustItem[]> {
  return sanityClient.fetch(
    `*[_type == "trustItem" && active == true] | order(order asc){
      _id,
      title,
      description,
      iconName,
      order,
      active
    }`,
    {},
    { next: { tags: ["trustItem"] } }
  );
}

// ─── Services ────────────────────────────────────────────────────
export async function getFeaturedServices(): Promise<Service[]> {
  return sanityClient.fetch(
    `*[_type == "service" && active == true && featured == true] | order(order asc){
      _id,
      name,
      slug,
      shortDescription,
      image,
      category,
      referencePrice,
      currency,
      showPrice,
      priceNote,
      duration,
      featured,
      active,
      whatsappMessage,
      order
    }`,
    {},
    { next: { tags: ["service"] } }
  );
}

export async function getAllServices(): Promise<Service[]> {
  return sanityClient.fetch(
    `*[_type == "service" && active == true] | order(order asc){
      _id,
      name,
      slug,
      shortDescription,
      image,
      category,
      referencePrice,
      currency,
      showPrice,
      priceNote,
      duration,
      featured,
      active,
      whatsappMessage,
      order
    }`,
    {},
    { next: { tags: ["service"] } }
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return sanityClient.fetch(
    `*[_type == "service" && slug.current == $slug && active == true][0]{
      _id,
      name,
      slug,
      shortDescription,
      fullDescription,
      image,
      category,
      referencePrice,
      currency,
      showPrice,
      priceNote,
      duration,
      whatsappMessage,
      active
    }`,
    { slug },
    { next: { tags: ["service"] } }
  );
}

// ─── Promotions ──────────────────────────────────────────────────
export async function getActivePromotions(): Promise<Promotion[]> {
  const now = new Date().toISOString();
  return sanityClient.fetch(
    `*[_type == "promotion" && active == true && (startDate == null || startDate <= $now) && (endDate == null || endDate >= $now)] | order(order asc){
      _id,
      title,
      description,
      image,
      ctaText,
      whatsappMessage,
      active,
      startDate,
      endDate,
      order
    }`,
    { now },
    { next: { tags: ["promotion"] } }
  );
}

// ─── About ───────────────────────────────────────────────────────
export async function getAbout(): Promise<About | null> {
  return sanityClient.fetch(
    `*[_type == "about" && active == true][0]{
      _id,
      title,
      description,
      image,
      highlights,
      active
    }`,
    {},
    { next: { tags: ["about"] } }
  );
}

// ─── Doctors ─────────────────────────────────────────────────────
export async function getDoctors(): Promise<Doctor[]> {
  return sanityClient.fetch(
    `*[_type == "doctor" && active == true] | order(order asc){
      _id,
      name,
      role,
      bio,
      photo,
      specialties,
      active,
      order
    }`,
    {},
    { next: { tags: ["doctor"] } }
  );
}

// ─── Gallery ─────────────────────────────────────────────────────
export async function getGallery(): Promise<GalleryImage[]> {
  return sanityClient.fetch(
    `*[_type == "galleryImage" && active == true] | order(order asc){
      _id,
      title,
      image,
      alt,
      active,
      order
    }`,
    {},
    { next: { tags: ["galleryImage"] } }
  );
}

// ─── Testimonials ────────────────────────────────────────────────
export async function getTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial" && active == true] | order(order asc){
      _id,
      patientName,
      comment,
      rating,
      active,
      order
    }`,
    {},
    { next: { tags: ["testimonial"] } }
  );
}

// ─── FAQs ────────────────────────────────────────────────────────
export async function getFaqs(): Promise<FAQ[]> {
  return sanityClient.fetch(
    `*[_type == "faq" && active == true] | order(order asc){
      _id,
      question,
      answer,
      active,
      order
    }`,
    {},
    { next: { tags: ["faq"] } }
  );
}

// ─── Schedule ────────────────────────────────────────────────────
export async function getSchedule(): Promise<Schedule[]> {
  return sanityClient.fetch(
    `*[_type == "schedule"] | order(order asc){
      _id,
      day,
      openingTime,
      closingTime,
      closed,
      order
    }`,
    {},
    { next: { tags: ["schedule"] } }
  );
}
