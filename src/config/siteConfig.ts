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

  // Official ViaHijrah contact details
  contact: {
    email: 'Kontakt@viahijrah.dk',
    baseRegion: 'Skandinavien · Sharjah (UAE) · Indonesien',
  },

  // Live Calendly 30-minute free consultation link
  calendly: {
    bookingUrl: 'https://calendly.com/jacubumar1/30min',
  },

  // Dormant Stripe hook kept ready for future paid consultation packages
  stripeFutureConfig: {
    enabled: false,
    publishableKeyPlaceholder: 'pk_live_REPLACE_WHEN_READY',
  },
} as const;
