export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SiteSettings {
  _id: string;
  businessName: string;
  logo?: SanityImage;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  phone?: string;
  email?: string;
  address?: string;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  footerText?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: SanityImage;
}

export interface Hero {
  _id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  mainImage?: SanityImage;
  primaryButtonText?: string;
  primaryButtonMessage?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  active: boolean;
}

export interface TrustItem {
  _id: string;
  title: string;
  description?: string;
  iconName?: string;
  order: number;
  active: boolean;
}

export interface Service {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  fullDescription?: string;
  image?: SanityImage;
  category?: string;
  referencePrice?: number;
  currency?: string;
  showPrice?: boolean;
  priceNote?: string;
  duration?: string;
  featured?: boolean;
  active: boolean;
  whatsappMessage?: string;
  order?: number;
}

export interface Promotion {
  _id: string;
  title: string;
  description?: string;
  image?: SanityImage;
  ctaText?: string;
  whatsappMessage?: string;
  active: boolean;
  startDate?: string;
  endDate?: string;
  order?: number;
}

export interface About {
  _id: string;
  title: string;
  description?: string;
  image?: SanityImage;
  highlights?: string[];
  active: boolean;
}

export interface Doctor {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
  photo?: SanityImage;
  specialties?: string[];
  active: boolean;
  order?: number;
}

export interface GalleryImage {
  _id: string;
  title?: string;
  image: SanityImage;
  alt?: string;
  active: boolean;
  order?: number;
}

export interface Testimonial {
  _id: string;
  patientName: string;
  comment: string;
  rating?: number;
  active: boolean;
  order?: number;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  active: boolean;
  order?: number;
}

export interface Schedule {
  _id: string;
  day: string;
  openingTime?: string;
  closingTime?: string;
  closed?: boolean;
  order?: number;
}
