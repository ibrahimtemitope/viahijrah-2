export type CorridorId = 'sharjah' | 'indonesia';
export type CurrencyCode = 'DKK' | 'SEK' | 'EUR' | 'AED';
export type HouseholdId = 'solo' | 'couple' | 'family';
export type TierId = 'budget' | 'moderate' | 'luxury';

export interface CurrencyMeta {
  code: CurrencyCode;
  symbol: string;
  rateFromDkk: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
  DKK: { code: 'DKK', symbol: 'DKK', rateFromDkk: 1 },
  SEK: { code: 'SEK', symbol: 'SEK', rateFromDkk: 1.54 },
  EUR: { code: 'EUR', symbol: '€', rateFromDkk: 0.134 },
  AED: { code: 'AED', symbol: 'AED', rateFromDkk: 0.53 },
};

export interface CostBreakdownDkk {
  housing: number;
  utilitiesAndFiber: number;
  halalLivingAndGroceries: number;
  localMobilityAndAmenities: number;
}

export interface CorridorTierProfile {
  id: TierId;
  featured?: boolean;
  profilesDkk: Record<HouseholdId, CostBreakdownDkk>;
  estimatedSetupFromDkk: number;
  districts: string[];
  masjidWalk: string;
}

export const SHARJAH_TIERS: CorridorTierProfile[] = [
  {
    id: 'budget',
    profilesDkk: {
      solo: {
        housing: 3800,
        utilitiesAndFiber: 850,
        halalLivingAndGroceries: 1650,
        localMobilityAndAmenities: 700,
      },
      couple: {
        housing: 5200,
        utilitiesAndFiber: 1050,
        halalLivingAndGroceries: 2650,
        localMobilityAndAmenities: 950,
      },
      family: {
        housing: 7400,
        utilitiesAndFiber: 1350,
        halalLivingAndGroceries: 4100,
        localMobilityAndAmenities: 1450,
      },
    },
    estimatedSetupFromDkk: 28500,
    districts: ['Muwaileh Commercial', 'Al Khan', 'Al Nahda Sharjah'],
    masjidWalk: '2–4 min',
  },
  {
    id: 'moderate',
    featured: true,
    profilesDkk: {
      solo: {
        housing: 7200,
        utilitiesAndFiber: 1200,
        halalLivingAndGroceries: 2900,
        localMobilityAndAmenities: 1600,
      },
      couple: {
        housing: 9400,
        utilitiesAndFiber: 1450,
        halalLivingAndGroceries: 4100,
        localMobilityAndAmenities: 2250,
      },
      family: {
        housing: 13200,
        utilitiesAndFiber: 1850,
        halalLivingAndGroceries: 6100,
        localMobilityAndAmenities: 3150,
      },
    },
    estimatedSetupFromDkk: 36000,
    districts: ['Aljada (Arada)', 'Al Majaz Waterfront', 'Mamsha Sharjah'],
    masjidWalk: '1–3 min',
  },
  {
    id: 'luxury',
    profilesDkk: {
      solo: {
        housing: 13500,
        utilitiesAndFiber: 1800,
        halalLivingAndGroceries: 4600,
        localMobilityAndAmenities: 3600,
      },
      couple: {
        housing: 16800,
        utilitiesAndFiber: 2150,
        halalLivingAndGroceries: 6200,
        localMobilityAndAmenities: 4350,
      },
      family: {
        housing: 22500,
        utilitiesAndFiber: 2700,
        halalLivingAndGroceries: 8600,
        localMobilityAndAmenities: 5200,
      },
    },
    estimatedSetupFromDkk: 49000,
    districts: ['Al Zahia Gated Villas', 'Tilal City', 'Sharjah Sustainable City'],
    masjidWalk: '1–2 min',
  },
];

export const INDONESIA_TIERS: CorridorTierProfile[] = [
  {
    id: 'budget',
    profilesDkk: {
      solo: {
        housing: 1350,
        utilitiesAndFiber: 300,
        halalLivingAndGroceries: 950,
        localMobilityAndAmenities: 400,
      },
      couple: {
        housing: 1950,
        utilitiesAndFiber: 400,
        halalLivingAndGroceries: 1650,
        localMobilityAndAmenities: 600,
      },
      family: {
        housing: 2900,
        utilitiesAndFiber: 550,
        halalLivingAndGroceries: 2550,
        localMobilityAndAmenities: 900,
      },
    },
    estimatedSetupFromDkk: 9500,
    districts: ['Yogyakarta', 'Bandung / Bogor', 'Lombok'],
    masjidWalk: '1–3 min',
  },
  {
    id: 'moderate',
    featured: true,
    profilesDkk: {
      solo: {
        housing: 2900,
        utilitiesAndFiber: 550,
        halalLivingAndGroceries: 2250,
        localMobilityAndAmenities: 1300,
      },
      couple: {
        housing: 3900,
        utilitiesAndFiber: 700,
        halalLivingAndGroceries: 3400,
        localMobilityAndAmenities: 1800,
      },
      family: {
        housing: 5600,
        utilitiesAndFiber: 950,
        halalLivingAndGroceries: 4950,
        localMobilityAndAmenities: 2400,
      },
    },
    estimatedSetupFromDkk: 13500,
    districts: ['South Jakarta / Bintaro', 'Bandung North', 'Lombok Mataram'],
    masjidWalk: '1–3 min',
  },
  {
    id: 'luxury',
    profilesDkk: {
      solo: {
        housing: 5100,
        utilitiesAndFiber: 850,
        halalLivingAndGroceries: 3650,
        localMobilityAndAmenities: 2400,
      },
      couple: {
        housing: 6800,
        utilitiesAndFiber: 1050,
        halalLivingAndGroceries: 5150,
        localMobilityAndAmenities: 3200,
      },
      family: {
        housing: 9400,
        utilitiesAndFiber: 1350,
        halalLivingAndGroceries: 7150,
        localMobilityAndAmenities: 4100,
      },
    },
    estimatedSetupFromDkk: 18500,
    districts: ['Kemang / Pondok Indah', 'BSD Green City', 'Lombok Villa Enclaves'],
    masjidWalk: '1–3 min',
  },
];

export function getCorridorTiers(corridor: CorridorId): CorridorTierProfile[] {
  return corridor === 'sharjah' ? SHARJAH_TIERS : INDONESIA_TIERS;
}

export function getTierTotalDkk(tier: CorridorTierProfile, household: HouseholdId): number {
  const p = tier.profilesDkk[household];
  return (
    p.housing +
    p.utilitiesAndFiber +
    p.halalLivingAndGroceries +
    p.localMobilityAndAmenities
  );
}

export function formatBudgetAmount(dkk: number, currency: CurrencyCode): string {
  const meta = CURRENCIES[currency];
  const raw = dkk * meta.rateFromDkk;
  const rounded =
    currency === 'DKK'
      ? Math.round(raw)
      : Math.round(raw / 50) * 50 || Math.round(raw);

  const locale = currency === 'EUR' ? 'de-DE' : currency === 'SEK' ? 'sv-SE' : 'da-DK';
  const formatted = new Intl.NumberFormat(locale).format(rounded);

  if (currency === 'EUR') return `€${formatted}`;
  return `${formatted} ${meta.symbol}`;
}
