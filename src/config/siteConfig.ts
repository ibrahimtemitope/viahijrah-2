/**
 * Centralized ViaHijrah Brand & Contact Configuration
 * Update logo paths, email, WhatsApp, or Calendly link in one place.
 */

export const SITE_CONFIG = {
  brandName: 'ViaHijrah',

  // Swap-ready <img> logos in /public/images/
  logos: {
    lightMode: '/images/viahijrah-logo-light.svg',
    darkMode: '/images/viahijrah-logo-dark.svg',
    alt: 'ViaHijrah',
  },

  // Contact placeholders (swap with official client email/WhatsApp anytime)
  contact: {
    email: 'kontakt@viahijrah.com',
    whatsappDisplay: '+45 00 00 00 00',
    whatsappHref: 'https://wa.me/4500000000',
    baseRegion: 'Danmark · Indonesien · Sharjah (UAE)',
  },

  // Calendly booking link (update when client shares live Calendly URL)
  calendly: {
    bookingUrl: 'https://calendly.com/viahijrah/introductory-consultation',
  },

  // Dormant Stripe hook kept ready for future paid consultation packages
  stripeFutureConfig: {
    enabled: false,
    publishableKeyPlaceholder: 'pk_live_REPLACE_WHEN_READY',
  },
} as const;
