# ViaHijrah — Sovereign Hijrah Relocation Platform

Custom static React + TypeScript + Tailwind CSS + Framer Motion platform built for **ViaHijrah** (Sharjah, UAE ↔ Scandinavia).

## Quick Start & Static Deployment

```bash
npm install
npm run dev      # Local development server
npm run build    # Production static bundle in /dist (ready for Vercel / Netlify / Cloudflare Pages)
```

## 60-Second Edit Map (Where Everything Lives)

1. **Brand Logo (`<img>` tags), Contact Info, Calendly URL & Future Stripe Toggle**
   - Edit `src/config/siteConfig.ts`
   - Drop final logo files into `public/images/viahijrah-logo-light.svg` and `public/images/viahijrah-logo-dark.svg` (or update paths in `siteConfig.ts`).
   - Paste live Calendly URL into `siteConfig.calendly.calendlyUrl` and flip `embedLiveIframe: true` when ready.
   - When ready to add Stripe consultation deposits later, flip `siteConfig.stripe.enabled = true`.

2. **3-Tier Sharjah Pricing (`7,000 DKK/mo` Budget, Moderate, Luxury) & Currency Rates**
   - Edit `src/config/pricingTiers.ts`
   - Every household profile (`solo`, `couple`, `family`) and monthly line item (`housing`, `utilitiesAndFiber`, `halalLivingAndGroceries`, `localMobilityAndAmenities`) is cleanly editable in DKK and auto-converts across `DKK`, `SEK`, `EUR`, and `AED`.

3. **Multi-Language Matrices (`English`, `Dansk`, `Svenska`) & Dynamic Du'as**
   - Edit `src/config/translations.ts`

4. **Typography Swap**
   - Update `--font-display` and `--font-sans` at the top of `src/index.css`.
