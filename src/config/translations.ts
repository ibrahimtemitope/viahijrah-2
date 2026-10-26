import { TierId } from './budgetData';

export type LanguageCode = 'da' | 'sv' | 'en';

export interface TierTranslation {
  name: string;
  tagline: string;
  highlights: string[];
  footnote: string;
}

export interface TranslationContent {
  langCode: LanguageCode;
  langName: string;
  langFlag: string;
  nav: {
    destinations: string;
    budgets: string;
    noFunds: string;
    steps: string;
    advice: string;
    bookCta: string;
    mobileDock: {
      destinations: string;
      budgets: string;
      noFunds: string;
      book: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
    freeMeetingNote: string;
    sharjahPill: string;
    indonesiaPill: string;
    galleryCaptions: {
      mosque: string;
      waterfront: string;
      residence: string;
    };
    localAgentsLine: string;
  };
  destinations: {
    eyebrow: string;
    title: string;
    viewBudgetsBtn: string;
    sharjah: {
      tag: string;
      name: string;
      headline: string;
      description: string;
      metrics: { label: string; value: string }[];
      bullets: string[];
      cta: string;
    };
    indonesia: {
      tag: string;
      name: string;
      headline: string;
      description: string;
      metrics: { label: string; value: string }[];
      bullets: string[];
      cta: string;
    };
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillars: {
      num: string;
      tag: string;
      title: string;
      body: string;
      image: string;
    }[];
  };
  budgetAnalyzer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    corridorLabel: string;
    sharjahTab: string;
    sharjahSub: string;
    indonesiaTab: string;
    indonesiaSub: string;
    currencyLabel: string;
    householdLabel: string;
    households: {
      solo: string;
      couple: string;
      family: string;
    };
    sliderTitle: string;
    recommendedBadge: string;
    withinBudgetMsg: string;
    stretchBudgetMsg: string;
    perMonth: string;
    planWithTierBtn: string;
    breakdownTitle: string;
    breakdownLabels: {
      housing: string;
      utilities: string;
      living: string;
      mobility: string;
    };
    districtsLabel: string;
    masjidLabel: string;
    setupFromLabelSharjah: string;
    setupFromLabelIndonesia: string;
    disclaimer: string;
    sharjahTiers: Record<TierId, TierTranslation>;
    indonesiaTiers: Record<TierId, TierTranslation>;
  };
  noFunds: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
    cta: string;
    note: string;
  };
  processAndAdvice: {
    stepsEyebrow: string;
    stepsTitle: string;
    steps: {
      num: string;
      title: string;
      body: string;
    }[];
    adviceEyebrow: string;
    adviceTitle: string;
    adviceCards: {
      num: string;
      title: string;
      body: string;
    }[];
    faqs: {
      q: string;
      a: string;
    }[];
  };
  consultation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    expectItems: string[];
    directContactTitle: string;
    form: {
      situationLabel: string;
      situationOptions: {
        exploring: string;
        sharjahUae: string;
        indonesiaEssential: string;
        indonesiaComfort: string;
        indonesiaPremium: string;
        noFundsYet: string;
      };
      openCalendlyBtn: string;
      privacyNote: string;
    };
  };
  footer: {
    tagline: string;
    description: string;
    linksTitle: string;
    contactTitle: string;
    transparency: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  da: {
    langCode: 'da',
    langName: 'Dansk',
    langFlag: '🇩🇰',
    nav: {
      destinations: 'UAE & Indonesien',
      budgets: 'Budgetter',
      noFunds: 'Ingen opsparing?',
      steps: 'De 5 Trin',
      advice: 'Gode råd',
      bookCta: 'Book gratis samtale',
      mobileDock: {
        destinations: 'Lande',
        budgets: 'Budget',
        noFunds: 'Ingen penge?',
        book: 'Gratis samtale',
      },
    },
    hero: {
      eyebrow: 'Skandinavien → Sharjah (UAE) & Indonesien',
      headline: 'Fra pres i hverdagen til ro om din deen.',
      subtext:
        'Slip for konstant at forsvare din tro. Vi hjælper dig trygt videre med visum, selskab, verificeret bolig og et realistisk budget.',
      primaryCta: 'Book en uforpligtende samtale',
      secondaryCta: 'Sammenlign budgetter',
      freeMeetingNote: '30 min · 100% gratis og uforpligtende',
      sharjahPill: '🇦🇪 Sharjah, UAE · Fra 7.000 DKK/md.',
      indonesiaPill: '🇮🇩 Indonesien · Fra 3.000 DKK/md.',
      galleryCaptions: {
        mosque: 'Moské i Sharjah, UAE',
        waterfront: 'Vandkant & moské · Sharjah',
        residence: 'Verificerede familieboliger',
      },
      localAgentsLine: 'Folk på jorden & lejligheder gennem vores lokale agenter — vi tjekker alt med dig.',
    },
    destinations: {
      eyebrow: 'To Trygge Destinationer',
      title: 'Sharjah (UAE) & Indonesien',
      viewBudgetsBtn: 'Se 3 budgetter',
      sharjah: {
        tag: '01 · SHARJAH, UAE',
        name: 'Sharjah, Emiraterne',
        headline: '100% alkoholfrit, trygt og familievenligt — 20 min. fra Dubai.',
        description:
          'Moskéer i hvert kvarter, 0% personskat, høj sikkerhed og stærke islamiske og internationale skoler.',
        metrics: [
          { label: 'Budget', value: 'Fra 7.000 DKK' },
          { label: 'Personskat', value: '0% skat' },
          { label: 'Miljø', value: 'Alkoholfrit' },
        ],
        bullets: [
          'Free Zone-selskab, Emirates ID & familievisum',
          'Moskéer i alle kvarterer med fem daglige Adhan',
          'Verificeret bolig gennem lokale mæglere',
        ],
        cta: 'Planlæg Sharjah',
      },
      indonesia: {
        tag: '02 · INDONESIEN',
        name: 'Indonesien',
        headline: 'Stor frihed, varm kultur & lave leveomkostninger.',
        description:
          'Verdens største muslimske land med moskéer overalt, folk på jorden og budgetter fra 3.000 til 12.000 DKK/md.',
        metrics: [
          { label: 'Essential', value: '3.000 DKK' },
          { label: 'Comfort', value: '7.000 DKK' },
          { label: 'Premium', value: '12.000 DKK' },
        ],
        bullets: [
          'Lejligheder gennem vores lokale agenter på jorden',
          'Halal mad, caféer, warungs & nem Grab-transport',
          'Fuld vejledning om KITAS-ophold & områder',
        ],
        cta: 'Planlæg Indonesien',
      },
      pillarsEyebrow: 'Samlet Hjælp',
      pillarsTitle: 'Det Hjælper Vi Dig Konkret Med',
      pillars: [
        {
          num: '01',
          tag: 'VISUM & UDREJSE',
          title: 'Selskab, Ophold & CPR-Udrejse',
          body: 'UAE Free Zone + Emirates ID eller KITAS i Indonesien — samt styr på dansk CPR og svensk udrejse.',
          image: '/images/sharjah-freezone.jpg',
        },
        {
          num: '02',
          tag: 'VERIFICERET BOLIG',
          title: 'Lejligheder via Lokale Agenter',
          body: 'Send aldrig depositum blindt. Vi tjekker bolig, husleje, kontrakt og moskéafstand sammen med dig.',
          image: '/images/sharjah-residence.jpg',
        },
        {
          num: '03',
          tag: 'HALAL ØKONOMI',
          title: 'Remote Indkomst & Budget',
          body: 'Plan for B2B/online-indkomst, opsparing og realistiske månedlige udgifter før du rejser.',
          image: '/images/remote-transition.jpg',
        },
      ],
    },
    budgetAnalyzer: {
      eyebrow: 'INTERAKTIVT BUDGET-OVERBLIK',
      title: 'Sammenlign Månedlige Budgetter',
      subtitle: 'Skift mellem Sharjah og Indonesien, vælg husstand, valuta eller træk i skyderen.',
      corridorLabel: 'Destination',
      sharjahTab: '🇦🇪 Sharjah, UAE',
      sharjahSub: 'Fra 7.000 DKK/md.',
      indonesiaTab: '🇮🇩 Indonesien',
      indonesiaSub: 'Fra 3.000 DKK/md.',
      currencyLabel: 'Valuta',
      householdLabel: 'Husstand',
      households: {
        solo: 'Solo',
        couple: 'Ægtepar',
        family: 'Familie',
      },
      sliderTitle: 'Test dit månedlige budget',
      recommendedBadge: 'Anbefalet',
      withinBudgetMsg: 'Inden for dit valgte budget',
      stretchBudgetMsg: 'Over valgt skyder-mål',
      perMonth: '/ md.',
      planWithTierBtn: 'Vælg dette budget',
      breakdownTitle: 'Månedlig fordeling',
      breakdownLabels: {
        housing: 'Bolig (husleje)',
        utilities: 'El, vand, AC & fiberinternet',
        living: 'Halal mad, restauranter & indkøb',
        mobility: 'Transport & fritid',
      },
      districtsLabel: 'Områder',
      masjidLabel: 'Moské-afstand',
      setupFromLabelSharjah: 'Free Zone + Visum fra',
      setupFromLabelIndonesia: 'KITAS / visum fra',
      disclaimer: '* Vejledende tal baseret på lokale priser. Præcist budget afhænger af bolig og familie.',
      sharjahTiers: {
        budget: {
          name: '01 · Budget',
          tagline: 'Enkel og tryg start i Sharjah.',
          highlights: [
            'Besigtiget studio / 1-værelses i roligt kvarter',
            'Gåafstand til moské, indkøb & halal spisesteder',
            'Hurtigt fiberinternet & fuld AC inkluderet',
          ],
          footnote: 'Ideelt til solo-iværksættere og par.',
        },
        moderate: {
          name: '02 · Moderate',
          tagline: 'Moderne komfort i familievenlige områder.',
          highlights: [
            '2–3 værelses i Aljada eller Al Majaz',
            'Legepladser, moské & familieliv lige udenfor',
            'Tæt på gode internationale & islamiske skoler',
          ],
          footnote: 'Mest valgte niveau for familier.',
        },
        luxury: {
          name: '03 · Luxury',
          tagline: 'Privat rækkehus eller villa med egen have.',
          highlights: [
            'Gated bolig i Al Zahia, Tilal eller Sustainable City',
            'Privat gårdhave + lokal Jumu’ah-moské',
            'Tæt sparring om skole, bank & selskab',
          ],
          footnote: 'Maksimal plads og privatliv til familien.',
        },
      },
      indonesiaTiers: {
        budget: {
          name: '01 · Essential',
          tagline: 'En god hverdag til lav pris.',
          highlights: [
            'Fin, enkel lejlighed i prisvenligt område',
            'Lokale restauranter eller warungs hver dag',
            'Grab-ture, mobil & internet inkluderet',
          ],
          footnote: 'Stramt men realistisk ved enkel livsstil.',
        },
        moderate: {
          name: '02 · Comfort',
          tagline: 'Komfort, frihed og fleksibilitet.',
          highlights: [
            'Møbleret lejlighed med AC i godt område',
            'Daglige café- og restaurantbesøg',
            'Regelmæssig Grab/taxa & plads til fritid',
          ],
          footnote: 'Bedste balance mellem pris og komfort.',
        },
        luxury: {
          name: '03 · Premium',
          tagline: 'Høj levestandard med plads til opsparing.',
          highlights: [
            'Moderne lejlighed eller hus i attraktivt kvarter',
            'Bedre restauranter, fitness, caféer & fritid',
            'Stort råderum til både hverdag og opsparing',
          ],
          footnote: 'Høj komfort langt billigere end i Norden.',
        },
      },
    },
    noFunds: {
      eyebrow: 'Ingen opsparing endnu?',
      title: 'Drømmer du om hijrah — men har ingen penge klar endnu?',
      body: 'Du er stadig hjerteligt velkommen. Book en gratis samtale, selv uden opsparing eller onlineindkomst — så lægger vi ærligt en realistisk plan for dine første skridt.',
      tags: ['Onlineindkomst', 'Opsparingsplan', 'Budgettering', 'Første skridt'],
      cta: 'Book en uforpligtende samtale',
      note: 'Vi lover ikke økonomisk støtte, men giver dig ærlig vejledning videre.',
    },
    processAndAdvice: {
      stepsEyebrow: 'Køreplan',
      stepsTitle: 'Din Hijrah i 5 Enkle Trin',
      steps: [
        {
          num: '01',
          title: 'Afklaring & Land',
          body: 'Vi matcher din familie og økonomi med Sharjah eller Indonesien.',
        },
        {
          num: '02',
          title: 'CPR & Skat-Udrejse',
          body: 'Rigtig rækkefølge for dansk CPR- eller svensk udrejse.',
        },
        {
          num: '03',
          title: 'Selskab & Visum',
          body: 'UAE Free Zone + Emirates ID eller KITAS i Indonesien.',
        },
        {
          num: '04',
          title: 'Verificeret Bolig',
          body: 'Vi tjekker lejlighed og kontrakt med vores lokale agenter.',
        },
        {
          num: '05',
          title: 'Tryg Ankomst',
          body: 'Praktisk start med skole, moské og hverdag på plads.',
        },
      ],
      adviceEyebrow: 'Gode Råd Før Du Rejser',
      adviceTitle: '6 Ting Du Bør Tænke Over Inden Hijrah',
      adviceCards: [
        {
          num: '01',
          title: 'Prøv landet først',
          body: 'Tag gerne et prøveophold først, så du mærker klima, priser og hverdag i virkeligheden.',
        },
        {
          num: '02',
          title: 'Sikr indkomst & buffer',
          body: 'Hav stabil onlineindkomst og ekstra buffer klar til visum, depositum og uforudsete ting.',
        },
        {
          num: '03',
          title: 'Start enkelt med bolig',
          body: 'Bind ikke hele opsparingen dag ét — lær kvartererne at kende gennem en fornuftig startbolig.',
        },
        {
          num: '04',
          title: 'Forbered savn af familie',
          body: 'Det er naturligt at savne Danmark i starten; faste opkald, besøg og tålmodighed gør overgangen tryg.',
        },
        {
          num: '05',
          title: 'Børnenes hverdag først',
          body: 'Vælg område ud fra moské, god skole og et trygt muslimsk nærmiljø for børnene.',
        },
        {
          num: '06',
          title: 'Ærlige forventninger',
          body: 'Intet land er perfekt — men med en gennemtænkt plan får du ro om din deen og fremtid.',
        },
      ],
      faqs: [
        {
          q: 'Koster den 30-minutters samtale noget?',
          a: 'Nej. Samtalen er 100% gratis og helt uforpligtende.',
        },
        {
          q: 'Sharjah (UAE) eller Indonesien — hvad passer bedst?',
          a: 'Sharjah giver 0% skat, arabisk familiekultur og top-infrastruktur fra 7.000 DKK/md. Indonesien giver lavere udgifter fra 3.000 DKK/md. og stor frihed.',
        },
        {
          q: 'Hvordan hjælper jeres lokale boligagenter konkret?',
          a: 'Vi viser reelle lejligheder og gennemgår kontrakt, husleje og moskéafstand sammen med dig, før du betaler noget.',
        },
      ],
    },
    consultation: {
      eyebrow: '30 Minutter · 100% Gratis & Uforpligtende',
      title: 'Book en uforpligtende samtale',
      subtitle: 'Vælg en tid i kalenderen — vi gennemgår roligt din situation og en realistisk plan.',
      expectItems: [
        'Konkret sparring på Sharjah (UAE) & Indonesien',
        'Overblik over visum, verificeret bolig, udrejse & budget',
        '100% gratis og uden salgstryk — uanset hvor langt du er',
      ],
      directContactTitle: 'E-mail kontakt',
      form: {
        situationLabel: 'Hvad vil du tale om?',
        situationOptions: {
          exploring: 'Generel sparring (Sharjah & Indonesien)',
          sharjahUae: 'Sharjah, UAE (Fra 7.000 DKK/md.)',
          indonesiaEssential: 'Indonesien · Essential (3.000 DKK/md.)',
          indonesiaComfort: 'Indonesien · Comfort (7.000 DKK/md.)',
          indonesiaPremium: 'Indonesien · Premium (12.000 DKK/md.)',
          noFundsYet: 'Ingen opsparing endnu — søger vejledning',
        },
        openCalendlyBtn: 'Åbn i nyt vindue',
        privacyNote: '100% gratis, fortroligt og uforpligtende.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – fra Skandinavien til den muslimske verden. Med din deen i centrum.',
      description: 'Planlægning, visum, selskab og verificeret bolig i Sharjah (UAE) og Indonesien.',
      linksTitle: 'Genveje',
      contactTitle: 'Kontakt',
      transparency:
        'ViaHijrah giver ærlig planlægning og lokal vejledning. Endelige visum- og skatteafgørelser træffes altid af relevante myndigheder.',
      copyright: '© 2026 ViaHijrah.',
    },
  },

  sv: {
    langCode: 'sv',
    langName: 'Svenska',
    langFlag: '🇸🇪',
    nav: {
      destinations: 'UAE & Indonesien',
      budgets: 'Budgetar',
      noFunds: 'Inget kapital?',
      steps: 'De 5 Stegen',
      advice: 'Goda råd',
      bookCta: 'Boka gratis samtal',
      mobileDock: {
        destinations: 'Länder',
        budgets: 'Budget',
        noFunds: 'Inget kapital?',
        book: 'Gratis samtal',
      },
    },
    hero: {
      eyebrow: 'Skandinavien → Sharjah (UAE) & Indonesien',
      headline: 'Från press i vardagen till lugn kring din deen.',
      subtext:
        'Slipp försvara din tro varje dag. Vi hjälper dig tryggt vidare med visum, bolag, verifierat boende och en realistisk budget.',
      primaryCta: 'Boka ett kostnadsfritt samtal',
      secondaryCta: 'Jämför budgetar',
      freeMeetingNote: '30 min · 100% gratis och förutsättningslöst',
      sharjahPill: '🇦🇪 Sharjah, UAE · Från 7 000 DKK/mån',
      indonesiaPill: '🇮🇩 Indonesien · Från 3 000 DKK/mån',
      galleryCaptions: {
        mosque: 'Moské i Sharjah, UAE',
        waterfront: 'Strandpromenad & moské · Sharjah',
        residence: 'Verifierade familjeboenden',
      },
      localAgentsLine: 'Folk på plats & lägenheter via våra lokala agenter — vi granskar allt med dig.',
    },
    destinations: {
      eyebrow: 'Två Trygga Destinationer',
      title: 'Sharjah (UAE) & Indonesien',
      viewBudgetsBtn: 'Se 3 budgetar',
      sharjah: {
        tag: '01 · SHARJAH, UAE',
        name: 'Sharjah, Emiraten',
        headline: '100% alkoholfritt, tryggt och familjevänligt — 20 min från Dubai.',
        description:
          'Moskéer i varje kvarter, 0% personskatt, hög säkerhet och starka islamiska och internationella skolor.',
        metrics: [
          { label: 'Budget', value: 'Från 7 000 DKK' },
          { label: 'Personskatt', value: '0% skatt' },
          { label: 'Miljö', value: 'Alkoholfritt' },
        ],
        bullets: [
          'Free Zone-bolag, Emirates ID & familjevisum',
          'Moskéer i alla kvarter med fem dagliga Adhan',
          'Verifierat boende genom lokala mäklare',
        ],
        cta: 'Planera Sharjah',
      },
      indonesia: {
        tag: '02 · INDONESIEN',
        name: 'Indonesien',
        headline: 'Stor frihet, varm kultur & låga levnadskostnader.',
        description:
          'Världens största muslimska land med moskéer överallt, folk på plats och budgetar från 3 000 till 12 000 DKK/mån.',
        metrics: [
          { label: 'Essential', value: '3 000 DKK' },
          { label: 'Comfort', value: '7 000 DKK' },
          { label: 'Premium', value: '12 000 DKK' },
        ],
        bullets: [
          'Lägenheter via våra lokala agenter på plats',
          'Halalmat, caféer, warungs & smidig Grab-transport',
          'Full vägledning kring KITAS-uppehåll & områden',
        ],
        cta: 'Planera Indonesien',
      },
      pillarsEyebrow: 'Samlad Hjälp',
      pillarsTitle: 'Det Här Hjälper Vi Dig Med',
      pillars: [
        {
          num: '01',
          tag: 'VISUM & UTFLYTT',
          title: 'Bolag, Visum & Nordisk Utflytt',
          body: 'UAE Free Zone + Emirates ID eller KITAS i Indonesien — samt koll på Folkbokföring och CPR.',
          image: '/images/sharjah-freezone.jpg',
        },
        {
          num: '02',
          tag: 'VERIFIERAT BOENDE',
          title: 'Lägenheter via Lokala Agenter',
          body: 'Skicka aldrig deposition blint. Vi kontrollerar bostad, hyra, kontrakt och moskéavstånd med dig.',
          image: '/images/sharjah-residence.jpg',
        },
        {
          num: '03',
          tag: 'HALAL EKONOMI',
          title: 'Remote-Inkomst & Budget',
          body: 'Plan för B2B/onlineinkomst, sparande och realistiska månadskostnader före avresa.',
          image: '/images/remote-transition.jpg',
        },
      ],
    },
    budgetAnalyzer: {
      eyebrow: 'INTERAKTIV BUDGETÖVERSIKT',
      title: 'Jämför Månadsbudgetar',
      subtitle: 'Växla mellan Sharjah och Indonesien, välj hushåll, valuta eller dra i reglaget.',
      corridorLabel: 'Destination',
      sharjahTab: '🇦🇪 Sharjah, UAE',
      sharjahSub: 'Från 7 000 DKK/mån',
      indonesiaTab: '🇮🇩 Indonesien',
      indonesiaSub: 'Från 3 000 DKK/mån',
      currencyLabel: 'Valuta',
      householdLabel: 'Hushåll',
      households: {
        solo: 'Solo',
        couple: 'Par',
        family: 'Familj',
      },
      sliderTitle: 'Testa din månadsbudget',
      recommendedBadge: 'Rekommenderad',
      withinBudgetMsg: 'Inom din valda budget',
      stretchBudgetMsg: 'Över valt reglage',
      perMonth: '/ mån',
      planWithTierBtn: 'Välj denna budget',
      breakdownTitle: 'Månatlig fördelning',
      breakdownLabels: {
        housing: 'Boende (hyra)',
        utilities: 'El, vatten, AC & fiberinternet',
        living: 'Halalmat, restauranger & inköp',
        mobility: 'Transport & fritid',
      },
      districtsLabel: 'Områden',
      masjidLabel: 'Moskéavstånd',
      setupFromLabelSharjah: 'Free Zone + Visum från',
      setupFromLabelIndonesia: 'KITAS / visum från',
      disclaimer: '* Vägledande siffror baserade på lokala priser. Exakt budget beror på boende och familj.',
      sharjahTiers: {
        budget: {
          name: '01 · Budget',
          tagline: 'Enkel och trygg start i Sharjah.',
          highlights: [
            'Granskad studio / 1:a i lugnt kvarter',
            'Gångavstånd till moské, butiker & halalmat',
            'Snabbt fiberinternet & AC inkluderat',
          ],
          footnote: 'Perfekt för soloentreprenörer och par.',
        },
        moderate: {
          name: '02 · Moderate',
          tagline: 'Modern komfort i familjevänliga områden.',
          highlights: [
            '2–3 rum i Aljada eller Al Majaz',
            'Lekplatser, moské & familjeliv precis utanför',
            'Nära bra internationella & islamiska skolor',
          ],
          footnote: 'Populäraste valet för barnfamiljer.',
        },
        luxury: {
          name: '03 · Luxury',
          tagline: 'Privat radhus eller villa med trädgård.',
          highlights: [
            'Gated boende i Al Zahia, Tilal eller Sustainable City',
            'Privat innergård + lokal Jumu’ah-moské',
            'Nära rådgivning om skola, bank & bolag',
          ],
          footnote: 'Maximalt utrymme och avskildhet.',
        },
      },
      indonesiaTiers: {
        budget: {
          name: '01 · Essential',
          tagline: 'En bra vardag till låg kostnad.',
          highlights: [
            'Fin, enkel lägenhet i prisvärt område',
            'Lokala restauranger eller warungs dagligen',
            'Grab-resor, mobil & internet inkluderat',
          ],
          footnote: 'Stram men realistisk med enkel livsstil.',
        },
        moderate: {
          name: '02 · Comfort',
          tagline: 'Komfort, frihet och flexibilitet.',
          highlights: [
            'Möblerad lägenhet med AC i bra område',
            'Dagliga café- och restaurangbesök',
            'Regelbunden Grab/taxi & fritid',
          ],
          footnote: 'Bästa balansen mellan pris och komfort.',
        },
        luxury: {
          name: '03 · Premium',
          tagline: 'Hög standard med utrymme för sparande.',
          highlights: [
            'Modern lägenhet eller hus i attraktivt kvarter',
            'Bättre restauranger, gym, caféer & fritid',
            'Gott om utrymme för familjeliv och sparande',
          ],
          footnote: 'Hög komfort betydligt billigare än i Norden.',
        },
      },
    },
    noFunds: {
      eyebrow: 'Inget sparkapital ännu?',
      title: 'Drömmer du om hijrah — men saknar pengar klart idag?',
      body: 'Du är ändå varmt välkommen. Boka ett gratis samtal även utan sparkapital eller onlineinkomst — så lägger vi ärligt en realistisk plan för dina första steg.',
      tags: ['Onlineinkomst', 'Sparplan', 'Budgetering', 'Första stegen'],
      cta: 'Boka ett kostnadsfritt samtal',
      note: 'Vi lovar inte ekonomiskt stöd, men ger ärlig vägledning framåt.',
    },
    processAndAdvice: {
      stepsEyebrow: 'Färdplan',
      stepsTitle: 'Din Hijrah i 5 Enkla Steg',
      steps: [
        {
          num: '01',
          title: 'Kartläggning & Land',
          body: 'Vi matchar familj och ekonomi med Sharjah eller Indonesien.',
        },
        {
          num: '02',
          title: 'Skatt & Utflyttning',
          body: 'Rätt ordning för svensk Folkbokföring eller dansk CPR.',
        },
        {
          num: '03',
          title: 'Bolag & Visum',
          body: 'UAE Free Zone + Emirates ID eller KITAS i Indonesien.',
        },
        {
          num: '04',
          title: 'Verifierat Boende',
          body: 'Vi kontrollerar lägenhet och avtal via lokala agenter.',
        },
        {
          num: '05',
          title: 'Trygg Ankomst',
          body: 'Praktisk start med skola, moské och vardag på plats.',
        },
      ],
      adviceEyebrow: 'Goda Råd Före Avresa',
      adviceTitle: '6 Saker Att Tänka På Innan Hijrah',
      adviceCards: [
        {
          num: '01',
          title: 'Prova landet först',
          body: 'Gör gärna en provvistelse först så du upplever klimat, priser och vardag på riktigt.',
        },
        {
          num: '02',
          title: 'Säkra inkomst & buffert',
          body: 'Ha stabil onlineinkomst och buffert redo för visum, deposition och oförutsedda utgifter.',
        },
        {
          num: '03',
          title: 'Börja enkelt med boende',
          body: 'Lås inte allt sparkapital dag ett — lär känna områdena från ett klokt startboende.',
        },
        {
          num: '04',
          title: 'Förbered saknad av familj',
          body: 'Det är naturligt att sakna Norden i början; fasta samtal, besök och tålamod underlättar.',
        },
        {
          num: '05',
          title: 'Barnens vardag först',
          body: 'Välj kvarter utifrån moské, bra skola och en trygg muslimsk gemenskap för barnen.',
        },
        {
          num: '06',
          title: 'Ärliga förväntningar',
          body: 'Inget land är perfekt — men med en genomtänkt plan får du lugn kring din deen.',
        },
      ],
      faqs: [
        {
          q: 'Kostar det 30-minuters samtalet något?',
          a: 'Nej. Samtalet är 100% gratis och helt förutsättningslöst.',
        },
        {
          q: 'Sharjah (UAE) eller Indonesien — vad passar bäst?',
          a: 'Sharjah ger 0% skatt, arabisk familjekultur och toppinfrastruktur från 7 000 DKK/mån. Indonesien ger lägre kostnader från 3 000 DKK/mån och stor frihet.',
        },
        {
          q: 'Hur hjälper era lokala boendeagenter konkret?',
          a: 'Vi visar riktiga lägenheter och granskar kontrakt, hyra och moskéavstånd med dig innan du betalar något.',
        },
      ],
    },
    consultation: {
      eyebrow: '30 Minuter · 100% Gratis & Förutsättningslöst',
      title: 'Boka ett kostnadsfritt samtal',
      subtitle: 'Välj en tid i kalendern — vi går lugnt igenom din situation och en realistisk plan.',
      expectItems: [
        'Konkret rådgivning kring Sharjah (UAE) & Indonesien',
        'Överblick över visum, verifierat boende, utflytt & budget',
        '100% gratis utan säljpress — oavsett var du befinner dig',
      ],
      directContactTitle: 'E-postkontakt',
      form: {
        situationLabel: 'Vad vill du prata om?',
        situationOptions: {
          exploring: 'Allmän rådgivning (Sharjah & Indonesien)',
          sharjahUae: 'Sharjah, UAE (Från 7 000 DKK/mån)',
          indonesiaEssential: 'Indonesien · Essential (3 000 DKK/mån)',
          indonesiaComfort: 'Indonesien · Comfort (7 000 DKK/mån)',
          indonesiaPremium: 'Indonesien · Premium (12 000 DKK/mån)',
          noFundsYet: 'Inget sparkapital ännu — söker vägledning',
        },
        openCalendlyBtn: 'Öppna i nytt fönster',
        privacyNote: '100% gratis, konfidentiellt och förutsättningslöst.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – från Skandinavien till den muslimska världen. Med din deen i centrum.',
      description: 'Planering, visum, bolag och verifierat boende i Sharjah (UAE) och Indonesien.',
      linksTitle: 'Genvägar',
      contactTitle: 'Kontakt',
      transparency:
        'ViaHijrah ger ärlig planering och lokal vägledning. Slutliga visum- och skattebeslut fattas alltid av berörda myndigheter.',
      copyright: '© 2026 ViaHijrah.',
    },
  },

  en: {
    langCode: 'en',
    langName: 'English',
    langFlag: '🇬🇧',
    nav: {
      destinations: 'UAE & Indonesia',
      budgets: 'Budgets',
      noFunds: 'No Savings?',
      steps: 'The 5 Steps',
      advice: 'Key Advice',
      bookCta: 'Book free call',
      mobileDock: {
        destinations: 'Countries',
        budgets: 'Budgets',
        noFunds: 'No Savings?',
        book: 'Free call',
      },
    },
    hero: {
      eyebrow: 'Scandinavia → Sharjah (UAE) & Indonesia',
      headline: 'From daily pressure to peace around your deen.',
      subtext:
        'Stop constantly defending your faith. We guide your move safely with residency visas, company setup, verified housing, and a realistic budget.',
      primaryCta: 'Book a free non-binding call',
      secondaryCta: 'Compare budgets',
      freeMeetingNote: '30 min · 100% free and non-binding',
      sharjahPill: '🇦🇪 Sharjah, UAE · From 7,000 DKK/mo',
      indonesiaPill: '🇮🇩 Indonesia · From 3,000 DKK/mo',
      galleryCaptions: {
        mosque: 'Mosque in Sharjah, UAE',
        waterfront: 'Waterfront & mosque · Sharjah',
        residence: 'Verified family homes',
      },
      localAgentsLine: 'People on the ground & apartments via our local agents — we check everything with you.',
    },
    destinations: {
      eyebrow: 'Two Proven Destinations',
      title: 'Sharjah (UAE) & Indonesia',
      viewBudgetsBtn: 'View 3 budgets',
      sharjah: {
        tag: '01 · SHARJAH, UAE',
        name: 'Sharjah, UAE',
        headline: '100% alcohol-free, safe, and family-centered — 20 mins from Dubai.',
        description:
          'Mosques in every district, 0% personal income tax, top safety, and respected Islamic and international schools.',
        metrics: [
          { label: 'Budget', value: 'From 7,000 DKK' },
          { label: 'Income tax', value: '0% tax' },
          { label: 'Setting', value: 'Alcohol-free' },
        ],
        bullets: [
          'Free Zone company, Emirates ID & family visas',
          'Mosques in every neighbourhood with 5 daily Adhan',
          'Verified apartments via trusted local agents',
        ],
        cta: 'Plan Sharjah',
      },
      indonesia: {
        tag: '02 · INDONESIA',
        name: 'Indonesia',
        headline: 'Everyday freedom, warm culture & low living costs.',
        description:
          'The world’s largest Muslim nation with mosques everywhere, people on the ground, and budgets from 3,000 to 12,000 DKK/mo.',
        metrics: [
          { label: 'Essential', value: '3,000 DKK' },
          { label: 'Comfort', value: '7,000 DKK' },
          { label: 'Premium', value: '12,000 DKK' },
        ],
        bullets: [
          'Apartments inspected via our local agents on the ground',
          'Halal dining, cafés, warungs & easy Grab transport',
          'Full guidance on KITAS residency & districts',
        ],
        cta: 'Plan Indonesia',
      },
      pillarsEyebrow: 'Complete Support',
      pillarsTitle: 'What We Concretely Help With',
      pillars: [
        {
          num: '01',
          tag: 'VISA & NORDIC EXIT',
          title: 'Company, Residency & Exit',
          body: 'UAE Free Zone + Emirates ID or KITAS in Indonesia — plus clean Danish CPR & Swedish exit steps.',
          image: '/images/sharjah-freezone.jpg',
        },
        {
          num: '02',
          tag: 'VERIFIED HOUSING',
          title: 'Apartments via Local Agents',
          body: 'Never wire deposits blindly. We verify the apartment, rent, lease, and mosque walk with you.',
          image: '/images/sharjah-residence.jpg',
        },
        {
          num: '03',
          tag: 'HALAL FINANCES',
          title: 'Remote Income & Budget',
          body: 'Roadmap for B2B/remote income, savings, and realistic monthly costs before moving.',
          image: '/images/remote-transition.jpg',
        },
      ],
    },
    budgetAnalyzer: {
      eyebrow: 'INTERACTIVE BUDGET EXPLORER',
      title: 'Compare Monthly Living Budgets',
      subtitle: 'Switch between Sharjah and Indonesia, select household, currency, or drag the slider.',
      corridorLabel: 'Destination',
      sharjahTab: '🇦🇪 Sharjah, UAE',
      sharjahSub: 'From 7,000 DKK/mo',
      indonesiaTab: '🇮🇩 Indonesia',
      indonesiaSub: 'From 3,000 DKK/mo',
      currencyLabel: 'Currency',
      householdLabel: 'Household',
      households: {
        solo: 'Solo',
        couple: 'Couple',
        family: 'Family',
      },
      sliderTitle: 'Test your monthly budget',
      recommendedBadge: 'Recommended',
      withinBudgetMsg: 'Within your selected budget',
      stretchBudgetMsg: 'Above slider target',
      perMonth: '/ mo',
      planWithTierBtn: 'Choose this budget',
      breakdownTitle: 'Monthly breakdown',
      breakdownLabels: {
        housing: 'Housing (rent)',
        utilities: 'Electricity, water, AC & fiber',
        living: 'Halal food, dining & groceries',
        mobility: 'Transport & leisure',
      },
      districtsLabel: 'Districts',
      masjidLabel: 'Mosque walk',
      setupFromLabelSharjah: 'Free Zone + Visa from',
      setupFromLabelIndonesia: 'KITAS / visa from',
      disclaimer: '* Indicative figures based on local market rates. Exact costs depend on home and family size.',
      sharjahTiers: {
        budget: {
          name: '01 · Budget',
          tagline: 'Lean, safe start in Sharjah.',
          highlights: [
            'Inspected studio / 1-bed in calm district',
            'Walk to mosque, groceries & halal dining',
            'Fast fiber internet & full AC included',
          ],
          footnote: 'Ideal for solo founders and couples.',
        },
        moderate: {
          name: '02 · Moderate',
          tagline: 'Modern comfort in family communities.',
          highlights: [
            '2–3 bed apartment in Aljada or Al Majaz',
            'Playgrounds, mosque & family parks steps away',
            'Close to respected international & Islamic schools',
          ],
          footnote: 'Most popular tier for families.',
        },
        luxury: {
          name: '03 · Luxury',
          tagline: 'Private townhouse or villa with garden.',
          highlights: [
            'Gated home in Al Zahia, Tilal, or Sustainable City',
            'Private courtyard + community Jumu’ah mosque',
            'Dedicated school, bank & corporate advisory',
          ],
          footnote: 'Maximum space and family privacy.',
        },
      },
      indonesiaTiers: {
        budget: {
          name: '01 · Essential',
          tagline: 'Good everyday life at low cost.',
          highlights: [
            'Clean, simple apartment in affordable area',
            'Daily local restaurants or warungs',
            'Grab rides, mobile & internet included',
          ],
          footnote: 'Lean yet realistic with a simple lifestyle.',
        },
        moderate: {
          name: '02 · Comfort',
          tagline: 'Comfort, freedom, and flexibility.',
          highlights: [
            'Furnished AC apartment in sought-after area',
            'Daily café and restaurant visits',
            'Regular Grab/taxis & room for leisure',
          ],
          footnote: 'Best balance of price and comfort.',
        },
        luxury: {
          name: '03 · Premium',
          tagline: 'High standard with room to save.',
          highlights: [
            'Modern apartment or house in prime district',
            'Finer restaurants, gym, cafés & activities',
            'Generous room for family life and savings',
          ],
          footnote: 'High comfort far below Nordic costs.',
        },
      },
    },
    noFunds: {
      eyebrow: 'No savings yet?',
      title: 'Dreaming of hijrah — even without money ready today?',
      body: 'You are still warmly welcome. Book a free call even without savings or remote income — we’ll honestly map out realistic first steps with you.',
      tags: ['Remote income', 'Savings plan', 'Budgeting', 'First steps'],
      cta: 'Book a free non-binding call',
      note: 'We cannot promise financial aid, only honest practical guidance forward.',
    },
    processAndAdvice: {
      stepsEyebrow: 'Roadmap',
      stepsTitle: 'Your Hijrah in 5 Simple Steps',
      steps: [
        {
          num: '01',
          title: 'Clarity & Country',
          body: 'Match your family and finances to Sharjah or Indonesia.',
        },
        {
          num: '02',
          title: 'Nordic Tax & Exit',
          body: 'Proper sequence for Danish CPR or Swedish exit.',
        },
        {
          num: '03',
          title: 'Company & Visa',
          body: 'UAE Free Zone + Emirates ID or KITAS in Indonesia.',
        },
        {
          num: '04',
          title: 'Verified Home',
          body: 'Inspect apartment and lease with our local agents.',
        },
        {
          num: '05',
          title: 'Smooth Arrival',
          body: 'Settle in calmly with schools, mosque, and daily life.',
        },
      ],
      adviceEyebrow: 'Practical Advice Before Moving',
      adviceTitle: '6 Essentials to Consider Before Hijrah',
      adviceCards: [
        {
          num: '01',
          title: 'Test the country first',
          body: 'Take a trial stay first so you experience the climate, costs, and daily rhythm firsthand.',
        },
        {
          num: '02',
          title: 'Secure income & buffer',
          body: 'Have steady remote income plus a safety buffer for visas, deposits, and surprises.',
        },
        {
          num: '03',
          title: 'Start lean on housing',
          body: 'Don’t lock up all your savings on day one — learn the districts from a sensible starter home.',
        },
        {
          num: '04',
          title: 'Prepare for missing family',
          body: 'Missing relatives at first is normal; regular calls, planned visits, and patience ease the move.',
        },
        {
          num: '05',
          title: 'Prioritize children’s daily life',
          body: 'Pick your neighbourhood around a welcoming mosque, solid school, and Muslim community.',
        },
        {
          num: '06',
          title: 'Keep honest expectations',
          body: 'No country is perfect — yet a clear plan brings genuine peace around your deen.',
        },
      ],
      faqs: [
        {
          q: 'Is the 30-minute call genuinely free?',
          a: 'Yes. The call is 100% free and completely non-binding.',
        },
        {
          q: 'Sharjah (UAE) or Indonesia — which fits best?',
          a: 'Sharjah offers 0% tax, Arab family culture, and modern infrastructure from 7,000 DKK/mo. Indonesia offers lower costs from 3,000 DKK/mo and great flexibility.',
        },
        {
          q: 'How do your local housing agents help?',
          a: 'We show real apartments and verify the lease, fair rent, and mosque distance with you before you pay anything.',
        },
      ],
    },
    consultation: {
      eyebrow: '30 Minutes · 100% Free & Non-Binding',
      title: 'Book a free non-binding call',
      subtitle: 'Pick a time on the calendar — we’ll calmly review your situation and a realistic plan.',
      expectItems: [
        'Concrete guidance on Sharjah (UAE) & Indonesia',
        'Clarity on visas, verified housing, Nordic exit & budget',
        '100% free with zero sales pressure — wherever you’re starting from',
      ],
      directContactTitle: 'Email contact',
      form: {
        situationLabel: 'Topic to discuss',
        situationOptions: {
          exploring: 'General guidance (Sharjah & Indonesia)',
          sharjahUae: 'Sharjah, UAE (From 7,000 DKK/mo)',
          indonesiaEssential: 'Indonesia · Essential (3,000 DKK/mo)',
          indonesiaComfort: 'Indonesia · Comfort (7,000 DKK/mo)',
          indonesiaPremium: 'Indonesia · Premium (12,000 DKK/mo)',
          noFundsYet: 'No savings yet — seeking guidance',
        },
        openCalendlyBtn: 'Open in new tab',
        privacyNote: '100% free, confidential, and non-binding.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – from Scandinavia to the Muslim world. With your deen at the center.',
      description: 'Planning, visas, company setup, and verified housing in Sharjah (UAE) and Indonesia.',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
      transparency:
        'ViaHijrah provides honest planning and local guidance. Final visa and tax decisions always rest with official authorities.',
      copyright: '© 2026 ViaHijrah.',
    },
  },
};
