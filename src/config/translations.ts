export type LanguageCode = 'da' | 'sv' | 'en';

export interface JourneyStep {
  num: string;
  label: string;
  title: string;
  summary: string;
  paragraphs: string[];
  highlightTag?: string;
  highlightNote?: string;
}

export interface BudgetTierCard {
  code: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  featured?: boolean;
  featuredLabel?: string;
  items: string[];
  footnote: string;
}

export interface AdviceItem {
  num: string;
  title: string;
  paragraphs: string[];
}

export interface TranslationContent {
  langName: string;
  langFlag: string;
  nav: {
    offer: string;
    steps: string;
    budgets: string;
    advice: string;
    reflection: string;
    bookCta: string;
    mobileDock: {
      steps: string;
      budgets: string;
      advice: string;
      book: string;
    };
  };
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    pivotTitle: string;
    pivotBody: string;
    primaryCta: string;
    secondaryCta: string;
    galleryCaptions: {
      mosque: string;
      waterfront: string;
      residence: string;
    };
    photoCaptionTitle: string;
    photoCaptionBody: string;
    welcomeTitle: string;
    welcomeBody: string;
    planQuote: string;
    planBody: string;
    signature: string;
  };
  whatWeOffer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: {
      num: string;
      title: string;
      body: string;
    }[];
    apartmentCallout: {
      tag: string;
      title: string;
      body: string;
      note: string;
    };
  };
  journey: {
    eyebrow: string;
    title: string;
    lead1: string;
    lead2: string;
    expandLabel: string;
    collapseLabel: string;
    steps: JourneyStep[];
    closing: {
      title: string;
      body1: string;
      body2: string;
      readyTitle: string;
      readyBody: string;
      cta: string;
      transparencyNote: string;
    };
  };
  budgets: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiers: BudgetTierCard[];
    chooseTierCta: string;
    uaeCard: {
      tag: string;
      title: string;
      priceNote: string;
      body: string;
      cta: string;
      caption1: string;
      caption2: string;
    };
  };
  noFunds: {
    eyebrow: string;
    title: string;
    lead: string;
    question: string;
    answerHighlight: string;
    body1: string;
    body2: string;
    body3: string;
    closingLine: string;
    cta: string;
    disclaimer: string;
  };
  advice: {
    eyebrow: string;
    title: string;
    lead: string;
    intro1: string;
    intro2: string;
    expandLabel: string;
    collapseLabel: string;
    items: AdviceItem[];
    reminder: {
      title: string;
      paragraphs: string[];
      cta: string;
    };
  };
  emotional: {
    eyebrow: string;
    title: string;
    subtitle: string;
    introParagraphs: string[];
    pullQuote: string;
    whySection: {
      title: string;
      paragraphs: string[];
    };
    futureSection: {
      title: string;
      intro: string;
      questionsIntro: string;
      questions: string[];
      outro1: string;
      outro2: string;
      highlightQuote: string;
    };
    homesickSection: {
      title: string;
      intro: string;
      cards: {
        title: string;
        body: string;
      }[];
    };
    closingSection: {
      thoughtfulTitle: string;
      thoughtfulParagraphs: string[];
      boldReminder: string;
      duaReminder: string;
      moreThanMoveTitle: string;
      moreThanMoveBody1: string;
      moreThanMoveBody2: string;
      finalStepLine: string;
      cta: string;
    };
  };
  consultation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    expectTitle: string;
    expectItems: {
      title: string;
      body: string;
    }[];
    directContactTitle: string;
    form: {
      step1Badge: string;
      step2Badge: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      situationLabel: string;
      situationOptions: {
        exploring: string;
        indonesiaEssential: string;
        indonesiaComfort: string;
        indonesiaPremium: string;
        uaeSharjah: string;
        noFundsYet: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      continueToTimeBtn: string;
      privacyNote: string;
      editDetailsBtn: string;
      pickDayLabel: string;
      pickTimeLabel: string;
      confirmBtn: string;
      openCalendlyBtn: string;
      confirmedTitle: string;
      confirmedBody: string;
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
  /* ==========================================================================
     DANSK (DA) — 100% Pure, Warm, Authentic Danish (Exact Client Copy)
     ========================================================================== */
  da: {
    langName: 'Dansk',
    langFlag: '🇩🇰',
    nav: {
      offer: 'Sådan hjælper vi',
      steps: 'Trin for trin',
      budgets: 'Budgetter',
      advice: 'Gode råd',
      reflection: 'At savne Danmark',
      bookCta: 'Book en samtale',
      mobileDock: {
        steps: 'Trin',
        budgets: 'Budget',
        advice: 'Gode råd',
        book: 'Book samtale',
      },
    },
    hero: {
      eyebrow: 'ViaHijrah · Fra Skandinavien til den muslimske verden',
      headline: 'Træt af hetz mod muslimer, håndtryksdiskussioner og lukkede bederum?',
      lead: 'Træt af konstant at skulle forklare eller forsvare din tro i et samfund, hvor debatten om muslimer fylder mere og mere?',
      pivotTitle: 'Måske er det tid til at overveje et nyt kapitel.',
      pivotBody:
        'Forestil dig en hverdag, hvor islam er en naturlig del af samfundet, hvor moskéerne er en del af lokalsamfundet, og hvor du kan prioritere din deen og opbygge din fremtid i et muslimsk land.',
      primaryCta: 'Book en indledende samtale',
      secondaryCta: 'Se din hijrah trin for trin',
      galleryCaptions: {
        mosque: 'Moskéarkitektur · Sharjah, UAE',
        waterfront: 'Vandkant & moské · Sharjah, UAE',
        residence: 'Rolige boligrammer',
      },
      photoCaptionTitle: 'Folk på jorden & lokal boligadgang',
      photoCaptionBody:
        'Vi har adgang til lejligheder gennem vores lokale agenter — og vi gennemgår og tjekker alt sammen med dig.',
      welcomeTitle: 'Velkommen til en ny mulighed. Velkommen til den muslimske verden.',
      welcomeBody:
        'ViaHijrah hjælper dig med at planlægge din hijrah fra Skandinavien til nye muligheder i den muslimske verden. Fra virksomhedsetablering, opholdstilladelse og bolig til praktisk planlægning af din flytning hjælper vi dig med at skabe overblik over hele processen.',
      planQuote: 'Din hijrah fortjener mere end en drøm. Den fortjener en plan.',
      planBody:
        'Uanset hvor du drømmer om at slå dig ned, fortjener din flytning at blive planlagt med omtanke, struktur og din deen i centrum.',
      signature: 'ViaHijrah – fra Skandinavien til den muslimske verden. Med din deen i centrum.',
    },
    whatWeOffer: {
      eyebrow: 'Mere end blot information',
      title: 'Du behøver ikke finde ud af alting alene.',
      subtitle:
        'ViaHijrah er ikke blot en hjemmeside med generelle råd om at flytte til udlandet. Vi bruger vores lokale tilstedeværelse, netværk og praktiske kendskab til at hjælpe dig trygt videre.',
      cards: [
        {
          num: '01',
          title: 'Folk på jorden og lokalt kendskab',
          body: 'Vi har folk på jorden i Indonesien og adgang til konkret lokal viden om priser, områder og leveomkostninger — så du forstår, hvordan en realistisk hverdag faktisk ser ud.',
        },
        {
          num: '02',
          title: 'Lejligheder gennem lokale mæglere',
          body: 'Vi har adgang til lejligheder, som du kan leje gennem vores lokale agenter, og vi gennemgår og tjekker alt sammen med dig, så du ikke står alene i et ukendt boligmarked.',
        },
        {
          num: '03',
          title: 'Ærlig planlægning i dit tempo',
          body: 'Vi hjælper dig fra den første tanke til en konkret plan for økonomi, visum, bolig og hverdag — og vi lover kun den hjælp, vi reelt kan levere.',
        },
      ],
      apartmentCallout: {
        tag: 'Tryghed omkring bolig',
        title: 'Vi har adgang til lejligheder, du kan leje gennem vores lokale agenter — og vi tjekker alt med dig.',
        body: 'At finde et ordentligt hjem på afstand er ofte den største bekymring for familier og tilflyttere. Gennem vores lokale kontakter og ejendomsmæglere hjælper vi dig med at se reelle muligheder, forstå huslejeniveauer og gennemgå forholdene grundigt sammen.',
        note: 'Den konkrete bolighjælp afhænger af destinationen og den aftalte service.',
      },
    },
    journey: {
      eyebrow: 'Hvad du kan forvente',
      title: 'Din hijrah – trin for trin',
      lead1:
        'En flytning til et nyt land kan virke uoverskuelig, især når man skal tage stilling til bolig, visum, økonomi og familiens fremtid på samme tid.',
      lead2:
        'Hos ViaHijrah hjælper vi dig med at skabe overblik over processen og forstå de praktiske skridt, der skal til. Du behøver ikke have alle svarene fra starten – vi hjælper dig med at undersøge mulighederne og finde ud af, hvad dit næste skridt bør være.',
      expandLabel: 'Læs mere',
      collapseLabel: 'Vis mindre',
      steps: [
        {
          num: '01',
          label: 'Trin 1',
          title: 'Vi starter med din situation',
          summary: 'Først lærer vi dig og dine behov at kende.',
          paragraphs: [
            'Alle har forskellige grunde til at overveje hijrah. Nogle ønsker bedre rammer for deres familie og børnenes islamiske opvækst, mens andre søger et miljø, hvor de lettere kan leve i overensstemmelse med deres værdier.',
            'Vi taler om din situation, dine ønsker, din økonomi og dine forventninger. På den måde kan vi bedre vurdere, hvilke muligheder der er relevante for dig.',
          ],
        },
        {
          num: '02',
          label: 'Trin 2',
          title: 'Vi undersøger den rette destination',
          summary: 'Find et land, der passer til dine behov og forudsætninger.',
          paragraphs: [
            'Vi hjælper dig med at undersøge relevante destinationer og de praktiske forskelle mellem dem. Det handler ikke kun om, hvor et land ser attraktivt ud, men også om leveomkostninger, opholdsmuligheder, bolig, indkomst og familiens hverdag.',
            'Målet er at give dig et mere realistisk grundlag for at træffe en beslutning.',
          ],
        },
        {
          num: '03',
          label: 'Trin 3',
          title: 'Vi skaber økonomisk overblik',
          summary: 'Planlæg din hijrah med et realistisk budget.',
          paragraphs: [
            'En velovervejet flytning kræver, at du forstår de økonomiske forhold, inden du tager afsted.',
            'Vi hjælper dig med at undersøge relevante udgifter såsom husleje, mad, transport og andre daglige omkostninger. Vi ser også på din nuværende økonomi og eventuelle planer for at skabe indkomst.',
            'På den måde kan du bedre vurdere, hvad der er realistisk i din situation, og hvilke økonomiske forhold du bør have styr på inden flytningen.',
          ],
        },
        {
          num: '04',
          label: 'Trin 4',
          title: 'Visum og opholdsmuligheder',
          summary: 'Få overblik over de praktiske krav til at flytte.',
          paragraphs: [
            'Reglerne for visum og ophold varierer fra land til land og afhænger blandt andet af din situation og formålet med dit ophold.',
            'Vi hjælper dig med at forstå, hvilke muligheder du bør undersøge, hvilke krav der kan være relevante, og hvilke næste skridt du skal være opmærksom på.',
            'Du får et bedre overblik over processen, så du ikke behøver at forsøge at samle alle oplysningerne på egen hånd.',
          ],
        },
        {
          num: '05',
          label: 'Trin 5',
          title: 'Bolig: Du behøver ikke lede helt alene',
          summary: 'Vi hjælper dig med at forstå boligmarkedet og finde ud af, hvor du skal begynde.',
          highlightTag: 'Lokale kontakter & ejendomsmæglere',
          paragraphs: [
            'At finde bolig i et nyt land kan være en af de største bekymringer, især hvis du ikke kender området, sproget eller de lokale forhold.',
            'Hos ViaHijrah har vi adgang til lokale kontakter, herunder ejendomsmæglere, som kan hjælpe med at skabe forbindelse til boligmarkedet — og vi har adgang til lejligheder, som du kan leje gennem vores lokale agenter, hvor vi tjekker alt sammen med dig.',
            'Vi kan hjælpe dig med at forstå boligmulighederne, undersøge relevante områder og få et bedre indblik i, hvad du kan forvente af husleje og boligforhold.',
            'Du behøver derfor ikke begynde helt fra nul eller selv forsøge at navigere i et ukendt boligmarked uden nogen form for retning.',
          ],
          highlightNote:
            'Den konkrete hjælp afhænger af destinationen og den service, vi aftaler med dig. Vi kan ikke garantere en bestemt bolig eller pris, men vores mål er at gøre processen mere overskuelig.',
        },
        {
          num: '06',
          label: 'Trin 6',
          title: 'Arbejde, indkomst og virksomhed',
          summary: 'Skab et grundlag for din fremtid.',
          paragraphs: [
            'Hvis du planlægger at arbejde online, fortsætte din nuværende virksomhed eller starte noget nyt, er det vigtigt at undersøge mulighederne på forhånd.',
            'Vi hjælper dig med at skabe overblik over de relevante praktiske forhold og spørgsmål, du bør undersøge i forbindelse med arbejde, indkomst og eventuel virksomhedsoprettelse.',
            'Det kan blandt andet omfatte lokale regler, etableringsomkostninger og de forhold, der gælder for den valgte destination.',
          ],
        },
        {
          num: '07',
          label: 'Trin 7',
          title: 'Forberedelse inden afrejse',
          summary: 'Få styr på de vigtigste ting, inden du rejser.',
          paragraphs: [
            'Når de grundlæggende beslutninger begynder at falde på plads, handler det om at forberede selve flytningen.',
            'Det kan blandt andet være at samle relevante dokumenter, planlægge økonomien, undersøge boligforhold, afklare opholdsmuligheder og forberede familien på de praktiske ændringer.',
            'Vi hjælper dig med at skabe overblik over de næste skridt, så du har en mere konkret plan at arbejde ud fra.',
          ],
        },
        {
          num: '08',
          label: 'Trin 8',
          title: 'Ankomst og etablering',
          summary: 'En ny begyndelse kræver også praktisk planlægning.',
          paragraphs: [
            'Når du ankommer til dit nye land, kan der stadig være praktiske forhold, der skal falde på plads.',
            'Derfor er det vigtigt allerede inden afrejse at forstå, hvad du selv skal arrangere, hvilke lokale muligheder der findes, og hvilken hjælp ViaHijrah konkret kan tilbyde i forbindelse med din flytning.',
            'Vores mål er, at du ikke blot tænker på selve rejsen, men også på, hvordan du bedst forbereder dig på hverdagen efter ankomsten.',
          ],
        },
      ],
      closing: {
        title: 'Du behøver ikke have styr på det hele fra starten.',
        body1:
          'Hijrah er en stor beslutning, og det er naturligt at have spørgsmål om økonomi, bolig, visum og fremtiden.',
        body2:
          'ViaHijrah er her for at hjælpe dig med at forstå mulighederne, skabe overblik over processen og undersøge de praktiske forhold, så du kan træffe dine beslutninger på et mere oplyst grundlag.',
        readyTitle: 'Klar til at tage det første skridt?',
        readyBody:
          'Book en indledende samtale, hvor vi kan tale om din situation, dine mål og de muligheder, der kan være relevante for dig.',
        cta: 'Book en indledende samtale',
        transparencyNote:
          'Vi er altid åbne om, hvad vi konkret kan hjælpe med, og hvad der afhænger af eksterne udbydere, officielle myndigheder eller dine egne forhold.',
      },
    },
    budgets: {
      eyebrow: 'Realistiske leveomkostninger · Indonesien',
      title: 'Hvad koster en hverdag i Indonesien?',
      subtitle:
        'Med vores lokalkendskab på jorden har vi opdelt tre realistiske månedlige budgetter, så du tydeligt kan se, hvad dine penge rækker til i hverdagen.',
      chooseTierCta: 'Tal med os om dette budget',
      tiers: [
        {
          code: '01 · Essential',
          name: 'Essential',
          price: '3.000 DKK',
          period: '/md.',
          tagline: 'En god hverdag til en lav pris.',
          items: [
            'En fin, enkel lejlighed i et prisvenligt område.',
            'Mulighed for at spise på lokale restauranter eller warungs hver dag.',
            'Grab til daglige ture, når du har brug for det.',
            'Lokale dagligvarer, mobil og internet.',
            'En enkel livsstil med plads til de vigtigste behov.',
          ],
          footnote:
            'Forudsætter billig husleje, begrænset transport og primært lokale spisesteder. Det er et stramt budget, og ikke alle byer eller lejligheder vil passe ind.',
        },
        {
          code: '02 · Comfort',
          name: 'Comfort',
          price: '7.000 DKK',
          period: '/md.',
          tagline: 'Komfort, fleksibilitet og frihed i hverdagen.',
          featured: true,
          featuredLabel: 'Mest fleksible valg',
          items: [
            'En pæn, møbleret lejlighed med aircondition.',
            'Restaurantbesøg hver dag, både lokale steder og udvalgte caféer.',
            'Grab/taxa regelmæssigt uden at skulle tænke over hver enkelt tur.',
            'God internetforbindelse og behagelige daglige rammer.',
            'Plads til fritid, shopping og andre personlige udgifter.',
          ],
          footnote:
            'Et mere fleksibelt budget, hvor bolig og beliggenhed stadig afgør, hvor meget ekstra råderum du har.',
        },
        {
          code: '03 · Premium',
          name: 'Premium',
          price: '12.000 DKK',
          period: '/md.',
          tagline: 'En højere levestandard med ekstra komfort.',
          items: [
            'En moderne lejlighed i et attraktivt område.',
            'Frihed til at spise ude dagligt, også på bedre restauranter.',
            'Hyppig brug af Grab og mere fleksibel transport.',
            'Budget til fitness, caféer, fritidsaktiviteter og shopping.',
            'Mere økonomisk råderum til at nyde hverdagen.',
          ],
          footnote: 'Giver gode muligheder for komfort samtidig med at man sparer op.',
        },
      ],
      uaeCard: {
        tag: 'Overvejer du også De Forenede Arabiske Emirater?',
        title: 'Sharjah, UAE — et familievenligt alternativ',
        priceNote: 'Leveomkostninger for enkeltpersoner fra ca. 7.000 DKK/md.',
        body: 'Ud over Indonesien rådgiver ViaHijrah også om Sharjah i UAE — et alkoholfrit, trygt og kulturelt stærkt emirat med smukke moskéer i alle boligområder og 0% personlig indkomstskat. Vi gennemgår gerne forskellene mellem Indonesien og UAE på vores samtale.',
        cta: 'Hør om både Indonesien og UAE',
        caption1: 'Vandkanten og moské i Sharjah, UAE',
        caption2: 'Lokal moské i roligt boligområde i Sharjah',
      },
    },
    noFunds: {
      eyebrow: 'Alle skal kunne tage det første skridt',
      title: 'Drømmer du om hijrah, men har du ingen penge?',
      lead: 'Du behøver ikke have alt på plads for at tage det første skridt.',
      question:
        'Har du ingen opsparing, ingen onlineindkomst eller en økonomi, der lige nu gør det svært at forestille dig en flytning til et muslimsk land?',
      answerHighlight: 'Så vil vi stadig gerne høre fra dig.',
      body1:
        'Hos ViaHijrah mener vi, at manglende økonomiske midler ikke bør forhindre dig i at undersøge dine muligheder.',
      body2:
        'Du er derfor velkommen til at booke en samtale med os, selvom du ikke har penge til at flytte lige nu, og selvom du endnu ikke har en onlineindkomst.',
      body3:
        'Vi vil lytte til din situation og efter bedste evne forsøge at hjælpe dig med at finde en realistisk vej frem. Det kan eksempelvis være gennem vejledning om onlineindkomst, opsparing, budgettering og de første skridt mod din hijrah.',
      closingLine: 'Du behøver ikke have løsningen i dag. Lad os tage en snak om dine muligheder.',
      cta: 'Book en samtale med ViaHijrah',
      disclaimer:
        'Vi kan ikke garantere økonomisk støtte eller en bestemt løsning, men vi vil gøre vores bedste for at vejlede dig.',
    },
    advice: {
      eyebrow: 'Gode råd fra os',
      title: 'Gode råd fra os – før du tager din hijrah',
      lead: 'Du behøver ikke have et luksusliv for at begynde et nyt kapitel. Men du bør have en realistisk plan.',
      intro1:
        'Gennem ViaHijrah ønsker vi ikke blot at hjælpe mennesker med at undersøge mulighederne for at flytte. Vi ønsker også at dele de råd, vi mener, er vigtige at overveje, før man tager en så stor beslutning.',
      intro2: 'Her er nogle af de ting, vi selv ville anbefale dig at tænke over.',
      expandLabel: 'Læs hele rådet',
      collapseLabel: 'Vis mindre',
      items: [
        {
          num: '01',
          title: 'Lær at leve simpelt – og få mere ud af dine penge',
          paragraphs: [
            'Vores første råd er, at du ikke behøver at vente på, at du har råd til en luksuriøs livsstil, før du undersøger muligheden for hijrah.',
            'Hvis din økonomi er begrænset, kan det være værd at undersøge, om en mere enkel livsstil passer til din situation.',
            'Danske kroner kan i nogle lande have en relativt høj købekraft. Det betyder, at din økonomi i visse tilfælde kan række længere, end du er vant til i Danmark. Men det afhænger meget af landet, byen, boligudgifterne og din families behov.',
            'Overvej derfor at begynde med det nødvendige: en passende bolig, mad, transport og en realistisk økonomisk buffer.',
            'Du behøver ikke have den største lejlighed, spise ude hver dag eller leve luksuriøst fra første dag.',
            'Vores råd er enkelt: Planlæg efter det liv, du realistisk har råd til – ikke det liv, du håber at få senere.',
            'Samtidig bør du ikke flytte uden at have undersøgt dine indtægtsmuligheder, de samlede udgifter og en plan for uforudsete situationer.',
          ],
        },
        {
          num: '02',
          title: 'Husk din intention',
          paragraphs: [
            'Inden du tager en stor beslutning, så spørg dig selv, hvorfor du ønsker at foretage hijrah.',
            'For nogle handler det om at skabe bedre rammer for deres deen. For andre handler det også om deres børns opvækst, deres familie og ønsket om at leve i et miljø, hvor islam fylder mere naturligt i hverdagen.',
            'Det er vigtigt at kende sine egne grunde og vende tilbage til dem undervejs.',
            'Lad beslutningen være velovervejet, og søg Allahs vejledning gennem du’a, istikhara og råd fra mennesker med relevant viden og erfaring.',
          ],
        },
        {
          num: '03',
          title: 'Undersøg landet, før du beslutter dig',
          paragraphs: [
            'Et muslimsk land er ikke automatisk det rigtige land for alle.',
            'Undersøg leveomkostninger, opholdsregler, boligmuligheder, sundhedsforsikring, arbejde og mulighederne for at forsørge dig selv og din familie.',
            'Tænk også over sproget, kulturen, klimaet og den hverdag, du faktisk skal leve.',
            'Det er bedre at kende udfordringerne på forhånd end at blive overrasket efter ankomsten.',
          ],
        },
        {
          num: '04',
          title: 'Prioritér din deen og din familie',
          paragraphs: [
            'Overvej, hvilke rammer du ønsker for din religiøse praksis, din hverdag og eventuelle fremtidige børn.',
            'Tænk ikke kun på, hvor du gerne vil bo, men også på, hvordan du ønsker at leve.',
            'Undersøg lokale moskeer, islamiske fællesskaber, undervisningsmuligheder og relevante skoler, hvis du flytter med børn.',
            'Husk samtidig, at du selv fortsat har et ansvar for at søge viden, praktisere din religion og skabe gode rammer for din familie, uanset hvilket land du bor i.',
          ],
        },
        {
          num: '05',
          title: 'Vent ikke på det perfekte tidspunkt – men vær ansvarlig',
          paragraphs: [
            'Det er let at vente på, at alt skal være perfekt: flere penge, en større opsparing eller fuldstændig sikkerhed om fremtiden.',
            'Men det betyder ikke, at man bør tage afsted uden forberedelse.',
            'Vores råd er at begynde med at undersøge mulighederne, skabe et realistisk budget og finde ud af, hvilke krav der gælder for din situation.',
            'Du behøver ikke have alle svarene i dag. Men du bør kende de vigtigste spørgsmål, inden du træffer beslutningen.',
          ],
        },
        {
          num: '06',
          title: 'Vær forberedt på at savne Danmark',
          paragraphs: [
            'Du kan komme til at savne familie, venner, kolleger og det velkendte liv, du har haft i mange år.',
            'Det er naturligt, og det betyder ikke nødvendigvis, at du har truffet den forkerte beslutning.',
            'Forbered dig på forandringen, hold kontakten til mennesker, der betyder noget for dig, og giv dig selv tid til at skabe en ny hverdag.',
            'Husk, at det at savne noget hjemmefra og samtidig ønske at bygge en fremtid et andet sted godt kan eksistere side om side.',
          ],
        },
        {
          num: '07',
          title: 'Tag imod hjælp, og spørg dem, der kender forholdene',
          paragraphs: [
            'Du behøver ikke selv undersøge hvert eneste spørgsmål fra bunden.',
            'Tal med mennesker, der har erfaring med det land, du overvejer at flytte til. Undersøg officielle krav, og få kvalificeret vejledning om visum, bolig og økonomi.',
            'Hos ViaHijrah ønsker vi at hjælpe dig med at skabe overblik over mulighederne og forstå de praktiske skridt, der kan være relevante for netop din situation.',
          ],
        },
      ],
      reminder: {
        title: 'En påmindelse, vi gerne vil dele',
        paragraphs: [
          'Hijrah er en stor beslutning. Den bør hverken træffes alene på baggrund af følelser eller udelukkende ud fra økonomiske beregninger.',
          'Tænk over din intention, undersøg dine muligheder, tag de nødvendige praktiske forhold alvorligt, og søg Allahs vejledning.',
          'Du behøver ikke begynde med meget. Du bør begynde med omtanke, en realistisk plan og en klar forståelse af, hvorfor du ønsker at tage dette skridt.',
        ],
        cta: 'Lad os undersøge dine muligheder sammen',
      },
    },
    emotional: {
      eyebrow: 'Den menneskelige side af hijrah',
      title: 'Hvad kommer du til at savne hjemmefra?',
      subtitle: 'At rejse videre betyder ikke, at det er let at sige farvel.',
      introParagraphs: [
        'Vi ved selv, hvordan det er at have levet hele sit liv i Danmark. Vi kender hverdagen, kulturen, de velkendte omgivelser og de mennesker, der har været en del af vores liv gennem mange år.',
        'Derfor ved vi også, at tanken om hijrah kan vække blandede følelser.',
        'På den ene side kan der være et stærkt ønske om at skabe en fremtid med bedre rammer for sin deen og sin familie. På den anden side kan det være svært at forestille sig at skulle sige farvel til venner, familie og kolleger – og til et liv, man har kendt, siden man var barn.',
        'Måske har du familie, du holder meget af. Venner, du har kendt i årevis. Kolleger, du ser hver uge. Steder, du er vokset op med, og små rutiner, du aldrig har tænkt over, at du ville komme til at savne.',
        'Det er helt naturligt.',
      ],
      pullQuote:
        'Du kan godt savne Danmark og samtidig føle, at hijrah er det rigtige skridt for din fremtid.',
      whySection: {
        title: 'Men hvorfor overvejer du hijrah i første omgang?',
        paragraphs: [
          'Når man står over for en så stor beslutning, er det vigtigt at huske sin intention.',
          'For mange muslimer handler hijrah om mere end at skifte land. Det handler om at overveje, hvilke rammer man ønsker at leve sit liv i, hvordan man bedst kan passe på sin deen, og hvilket miljø man ønsker for sine fremtidige børn.',
          'Det kan også handle om ønsket om at leve et liv, hvor islam fylder mere naturligt i hverdagen, hvor man kan finde et muslimsk fællesskab, og hvor man føler sig mindre alene med sine værdier.',
          'Der findes ikke ét svar, der passer til alle. Hver familie har sin egen situation, sine egne overvejelser og sine egne grunde.',
          'Men hvis din intention er at søge et liv med bedre rammer for din deen og din familie, kan det være værd at vende tilbage til netop den intention, når beslutningen føles svær.',
        ],
      },
      futureSection: {
        title: 'Når man tænker på fremtiden',
        intro:
          'Det er heller ikke nogen hemmelighed, at mange muslimer i Europa oplever bekymringer omkring islamofobi, diskrimination og den offentlige debat om islam.',
        questionsIntro:
          'Når man samtidig tænker på sine fremtidige børn, kan man naturligt begynde at stille sig selv spørgsmål:',
        questions: [
          'Hvilket miljø ønsker jeg, at mine børn skal vokse op i?',
          'Hvordan kan jeg bedst støtte dem i deres islamiske identitet?',
          'Vil jeg gerne bo et sted, hvor det føles mere naturligt at praktisere islam i hverdagen?',
          'Hvilke rammer ønsker jeg for min egen udvikling og min families fremtid?',
        ],
        outro1: 'For nogle bliver disse spørgsmål en vigtig del af overvejelserne om hijrah.',
        outro2:
          'Vi kan ikke forudsige, hvordan fremtiden vil udvikle sig, og intet land er uden udfordringer. Men vi mener, at det er helt legitimt at tænke grundigt over sine omgivelser, sine værdier og den fremtid, man ønsker at bygge.',
        highlightQuote:
          'Det handler ikke nødvendigvis om at vende ryggen til Danmark. Det handler om at overveje, hvor og hvordan du ønsker at opbygge din fremtid.',
      },
      homesickSection: {
        title: 'Hvad gør du, når du begynder at savne dem derhjemme?',
        intro:
          'Hjemve kan komme, selv når man er glad for sin beslutning. Derfor er det vigtigt at forberede sig på den menneskelige side af flytningen.',
        cards: [
          {
            title: 'Hold kontakten til dem, du holder af.',
            body: 'At flytte betyder ikke, at dine relationer skal ophøre. Planlæg samtaler, hold kontakten, og vær bevidst om at pleje de relationer, der betyder noget for dig.',
          },
          {
            title: 'Giv dig selv tid til at finde dig til rette.',
            body: 'Du behøver ikke føle dig hjemme fra første dag. Nye omgivelser og nye rutiner tager tid at vænne sig til.',
          },
          {
            title: 'Opbyg et nyt fællesskab.',
            body: 'Undersøg lokale moskeer, islamiske aktiviteter og muligheder for at møde andre muslimer. Det kan hjælpe dig med at opbygge relationer og skabe en hverdag, hvor du føler dig mere hjemme.',
          },
          {
            title: 'Husk din intention.',
            body: 'Når du savner det velkendte, kan det hjælpe at huske, hvorfor du begyndte at overveje hijrah. Giv dig selv plads til at savne og samtidig holde fast i de mål og værdier, der betyder noget for dig.',
          },
        ],
      },
      closingSection: {
        thoughtfulTitle: 'En beslutning, der fortjener omtanke',
        thoughtfulParagraphs: [
          'Vi ønsker ikke at fremstille hijrah som en løsning på alle livets problemer. At flytte til et nyt land kræver forberedelse, tålmodighed og realistiske forventninger.',
          'Men vi mener også, at det er værd at tage sine ønsker for deen, familie og fremtid alvorligt.',
          'Du behøver ikke træffe beslutningen i hast. Du kan undersøge mulighederne, stille spørgsmål og skabe et realistisk grundlag, før du beslutter dig.',
        ],
        boldReminder:
          'Lad ikke frygt alene træffe beslutningen for dig – men lad heller ikke frygten for forandring forhindre dig i at undersøge de muligheder, du oprigtigt overvejer.',
        duaReminder:
          'Tag dig tid til at forstå din situation, forny din intention, søg vejledning, og bed Allah om at lede dig til det, der er bedst for din deen og dit liv.',
        moreThanMoveTitle: 'Vi forstår, at det er mere end en flytning',
        moreThanMoveBody1:
          'Hos ViaHijrah ønsker vi at hjælpe dig med både de praktiske spørgsmål og de større overvejelser, der følger med at planlægge et nyt liv i et andet land.',
        moreThanMoveBody2: 'Du behøver ikke have alle svarene fra starten.',
        finalStepLine: 'Begynd med at undersøge dine muligheder – ét skridt ad gangen, in sha Allah.',
        cta: 'Lad os tale om din hijrah',
      },
    },
    consultation: {
      eyebrow: 'Indledende samtale',
      title: 'Lad os tale roligt om din situation og dine muligheder.',
      subtitle:
        'Uanset om du er klar til at planlægge konkret eller blot ønsker et ærligt overblik, starter vi med en uforpligtende samtale i dit tempo.',
      expectTitle: 'Hvad du kan forvente af samtalen',
      expectItems: [
        {
          title: 'Ingen pres eller salgssnak',
          body: 'Vi lytter til din nuværende livssituation, dine overvejelser og hvad der er vigtigst for dig og din familie.',
        },
        {
          title: 'Ærligt indblik i priser, bolig og visum',
          body: 'Du får realistisk viden om leveomkostninger, opholdsmuligheder og hvordan vores lokale agenter kan hjælpe med lejligheder.',
        },
        {
          title: 'Klarhed over dit næste skridt',
          body: 'Du går fra samtalen med ro i maven og en bedre forståelse af, hvad der giver mening at gøre herfra — også hvis du starter uden opsparing.',
        },
      ],
      directContactTitle: 'Du kan også skrive direkte til os',
      form: {
        step1Badge: 'Trin 1 af 2 · Kort introduktion',
        step2Badge: 'Trin 2 af 2 · Vælg tidspunkt',
        title: 'Book en samtale med ViaHijrah',
        subtitle: 'Fortæl os kort hvor du står, så vi kan forberede os bedst muligt til samtalen.',
        nameLabel: 'Dit navn',
        namePlaceholder: 'F.eks. Ahmad eller familie',
        emailLabel: 'E-mail',
        emailPlaceholder: 'din@email.dk',
        phoneLabel: 'Telefon eller WhatsApp (valgfrit)',
        phonePlaceholder: '+45 ...',
        situationLabel: 'Hvad passer bedst på din situation lige nu?',
        situationOptions: {
          exploring: 'Jeg undersøger mulighederne og ønsker overblik',
          indonesiaEssential: 'Indonesien · 01 Essential (3.000 DKK/md.)',
          indonesiaComfort: 'Indonesien · 02 Comfort (7.000 DKK/md.)',
          indonesiaPremium: 'Indonesien · 03 Premium (12.000 DKK/md.)',
          uaeSharjah: 'Sharjah, UAE (Fra 7.000 DKK/md.)',
          noFundsYet: 'Ingen opsparing / onlineindkomst endnu — søger vejledning',
        },
        messageLabel: 'Er der noget særligt, du gerne vil vende? (valgfrit)',
        messagePlaceholder: 'Skriv gerne et par ord om dine tanker, familie, bolig eller spørgsmål...',
        continueToTimeBtn: 'Fortsæt til valg af tidspunkt',
        privacyNote: 'Dine oplysninger behandles fuldt fortroligt og med amanah.',
        editDetailsBtn: 'Tilbage til oplysninger',
        pickDayLabel: 'Vælg en dag der passer dig',
        pickTimeLabel: 'Vælg tidspunkt (dansk tid)',
        confirmBtn: 'Bekræft samtale',
        openCalendlyBtn: 'Åbn direkte i Calendly',
        confirmedTitle: 'JazakAllahu khayran — din henvendelse er modtaget.',
        confirmedBody:
          'Vi har noteret dit ønskede tidspunkt og vender tilbage til dig på e-mail eller WhatsApp snarest muligt, in sha Allah.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – fra Skandinavien til den muslimske verden. Med din deen i centrum.',
      description:
        'Personlig og praktisk vejledning om hijrah, leveomkostninger, opholdsmuligheder og bolig gennem vores lokale kontakter.',
      linksTitle: 'På siden',
      contactTitle: 'Kontakt',
      transparency:
        'ViaHijrah rådgiver og formidler praktisk overblik samt kontakt til lokale samarbejdspartnere. Regler, visumgodkendelser og konkrete boligforhold afhænger altid af relevante myndigheder, udbydere og individuelle omstændigheder.',
      copyright: '© 2026 ViaHijrah. Alle rettigheder forbeholdes.',
    },
  },

  /* ==========================================================================
     SVENSKA (SV) — Warm, Sincere Swedish Translation
     ========================================================================== */
  sv: {
    langName: 'Svenska',
    langFlag: '🇸🇪',
    nav: {
      offer: 'Hur vi hjälper',
      steps: 'Steg för steg',
      budgets: 'Budgetar',
      advice: 'Goda råd',
      reflection: 'Att sakna hemma',
      bookCta: 'Boka ett samtal',
      mobileDock: {
        steps: 'Steg',
        budgets: 'Budget',
        advice: 'Goda råd',
        book: 'Boka samtal',
      },
    },
    hero: {
      eyebrow: 'ViaHijrah · Från Skandinavien till den muslimska världen',
      headline: 'Trött på hets mot muslimer, handskakningsdebatter och stängda bönerum?',
      lead: 'Trött på att ständigt behöva förklara eller försvara din tro i ett samhälle där debatten om muslimer tar allt mer plats?',
      pivotTitle: 'Kanske är det dags att överväga ett nytt kapitel.',
      pivotBody:
        'Föreställ dig en vardag där islam är en naturlig del av samhället, där moskéerna är en del av lokalsamhället och där du kan prioritera din deen och bygga din framtid i ett muslimskt land.',
      primaryCta: 'Boka ett inledande samtal',
      secondaryCta: 'Se din hijrah steg för steg',
      galleryCaptions: {
        mosque: 'Moskéarkitektur · Sharjah, UAE',
        waterfront: 'Strandpromenad & moské · Sharjah',
        residence: 'Lugna bostadsmiljöer',
      },
      photoCaptionTitle: 'Människor på plats & lokal bostadshjälp',
      photoCaptionBody:
        'Vi har tillgång till lägenheter via våra lokala agenter — och vi går igenom och kontrollerar allt tillsammans med dig.',
      welcomeTitle: 'Välkommen till en ny möjlighet. Välkommen till den muslimska världen.',
      welcomeBody:
        'ViaHijrah hjälper dig att planera din hijrah från Skandinavien till nya möjligheter i den muslimska världen. Från företagsstart, uppehållstillstånd och bostad till praktisk flyttplanering hjälper vi dig att skapa överblick över hela processen.',
      planQuote: 'Din hijrah förtjänar mer än en dröm. Den förtjänar en plan.',
      planBody:
        'Oavsett var du drömmer om att slå dig ner förtjänar din flytt att planeras med omtanke, struktur och din deen i centrum.',
      signature: 'ViaHijrah – från Skandinavien till den muslimska världen. Med din deen i centrum.',
    },
    whatWeOffer: {
      eyebrow: 'Mer än bara information',
      title: 'Du behöver inte lista ut allting ensam.',
      subtitle:
        'ViaHijrah är inte bara en hemsida med allmänna råd om att flytta utomlands. Vi använder vår lokala närvaro, våra kontakter och vår praktiska kunskap för att hjälpa dig tryggt vidare.',
      cards: [
        {
          num: '01',
          title: 'Folk på plats och lokalkännedom',
          body: 'Vi har folk på plats i Indonesien och tillgång till konkret kunskap om priser, områden och levnadskostnader — så att du förstår hur en realistisk vardag faktiskt ser ut.',
        },
        {
          num: '02',
          title: 'Lägenheter genom lokala mäklare',
          body: 'Vi har tillgång till lägenheter som du kan hyra via våra lokala agenter, och vi kontrollerar allt tillsammans med dig så att du inte står ensam på en okänd bostadsmarknad.',
        },
        {
          num: '03',
          title: 'Ärlig planering i din egen takt',
          body: 'Vi hjälper dig från den första tanken till en realistisk plan för ekonomi, visum, bostad och vardag — och vi lovar bara det vi faktiskt kan hålla.',
        },
      ],
      apartmentCallout: {
        tag: 'Trygghet kring boende',
        title: 'Vi har tillgång till lägenheter som du kan hyra via våra lokala agenter — och vi kollar allt med dig.',
        body: 'Att hitta ett tryggt hem på distans är ofta den största oron för familjer. Genom våra lokala kontakter och fastighetsmäklare hjälper vi dig att se verkliga alternativ, förstå hyresnivåer och granska villkoren noggrant tillsammans.',
        note: 'Den konkreta bostadshjälpen beror på destination och den service vi kommer överens om.',
      },
    },
    journey: {
      eyebrow: 'Vad du kan förvänta dig',
      title: 'Din hijrah – steg för steg',
      lead1:
        'En flytt till ett nytt land kan kännas överväldigande, särskilt när man ska ta ställning till bostad, visum, ekonomi och familjens framtid samtidigt.',
      lead2:
        'Hos ViaHijrah hjälper vi dig att skapa överblick över processen och förstå de praktiska steg som krävs. Du behöver inte ha alla svar från början – vi hjälper dig att undersöka möjligheterna och hitta ditt nästa steg.',
      expandLabel: 'Läs mer',
      collapseLabel: 'Visa mindre',
      steps: [
        {
          num: '01',
          label: 'Steg 1',
          title: 'Vi börjar med din situation',
          summary: 'Först lär vi känna dig och dina behov.',
          paragraphs: [
            'Alla har olika skäl till att överväga hijrah. Vissa önskar bättre ramar för familjen och barnens islamiska uppväxt, medan andra söker en miljö där det är naturligare att leva enligt sina värderingar.',
            'Vi pratar om din situation, dina önskemål, din ekonomi och dina förväntningar för att bedöma vilka alternativ som är relevanta för dig.',
          ],
        },
        {
          num: '02',
          label: 'Steg 2',
          title: 'Vi undersöker rätt destination',
          summary: 'Hitta ett land som passar dina behov och förutsättningar.',
          paragraphs: [
            'Vi hjälper dig att undersöka relevanta länder och de praktiska skillnaderna mellan dem — levnadskostnader, uppehållsmöjligheter, bostad, inkomst och familjens vardag.',
            'Målet är att ge dig en realistisk grund inför ditt beslut.',
          ],
        },
        {
          num: '03',
          label: 'Steg 3',
          title: 'Vi skapar ekonomisk överblick',
          summary: 'Planera din hijrah med en realistisk budget.',
          paragraphs: [
            'En genomtänkt flytt kräver att du förstår de ekonomiska förutsättningarna innan du reser.',
            'Vi tittar på hyra, mat, transport och dagliga utgifter samt din nuvarande ekonomi och planer för inkomst.',
          ],
        },
        {
          num: '04',
          label: 'Steg 4',
          title: 'Visum och uppehållsmöjligheter',
          summary: 'Få överblick över de praktiska kraven för att flytta.',
          paragraphs: [
            'Regler för visum och uppehållstillstånd varierar mellan länder och beror på din situation.',
            'Vi hjälper dig förstå vilka alternativ du bör undersöka, vilka krav som kan gälla och vad du ska vara uppmärksam på.',
          ],
        },
        {
          num: '05',
          label: 'Steg 5',
          title: 'Bostad: Du behöver inte leta helt ensam',
          summary: 'Vi hjälper dig förstå bostadsmarknaden och var du ska börja.',
          highlightTag: 'Lokala kontakter & mäklare',
          paragraphs: [
            'Att hitta bostad i ett nytt land är ofta en av de största bekymren när man inte kan området eller språk.',
            'Hos ViaHijrah har vi lokala kontakter och mäklare samt tillgång till lägenheter du kan hyra via våra lokala agenter — där vi kontrollerar allt tillsammans med dig.',
            'Du behöver därför inte börja från noll på en okänd bostadsmarknad utan vägledning.',
          ],
          highlightNote:
            'Den konkreta hjälpen beror på destination och avtalad service. Vi kan inte garantera en viss bostad eller hyra, men målet är att göra processen trygg och överskådlig.',
        },
        {
          num: '06',
          label: 'Steg 6',
          title: 'Arbete, inkomst och företagande',
          summary: 'Skapa en grund för din framtid.',
          paragraphs: [
            'Om du planerar att arbeta online, driva vidare ditt företag eller starta nytt hjälper vi dig få överblick över praktiska regler och kostnader på destinationen.',
          ],
        },
        {
          num: '07',
          label: 'Steg 7',
          title: 'Förberedelse inför avresa',
          summary: 'Få ordning på det viktigaste innan du reser.',
          paragraphs: [
            'Vi hjälper dig strukturera dokument, ekonomi, boende och familjens praktiska förberedelser inför flytten.',
          ],
        },
        {
          num: '08',
          label: 'Steg 8',
          title: 'Ankomst och etablering',
          summary: 'En ny början kräver också praktisk planering.',
          paragraphs: [
            'Redan före avresa går vi igenom vad som behöver ordnas vid ankomst och vad ViaHijrah konkret kan bistå med för en trygg start i vardagen.',
          ],
        },
      ],
      closing: {
        title: 'Du behöver inte ha koll på allt från början.',
        body1:
          'Hijrah är ett stort beslut och det är helt naturligt att ha frågor om ekonomi, boende, visum och framtiden.',
        body2:
          'ViaHijrah finns här för att hjälpa dig förstå möjligheterna och skapa överblick så att du kan fatta dina beslut på en trygg och välinformerad grund.',
        readyTitle: 'Redo att ta första steget?',
        readyBody:
          'Boka ett inledande samtal där vi pratar om din situation, dina mål och vad som kan vara relevant för dig.',
        cta: 'Boka ett inledande samtal',
        transparencyNote:
          'Vi är alltid öppna med vad vi kan hjälpa till med och vad som beror på myndigheter, externa parter eller dina egna förutsättningar.',
      },
    },
    budgets: {
      eyebrow: 'Realistiska levnadskostnader · Indonesien',
      title: 'Vad kostar en vardag i Indonesien?',
      subtitle:
        'Utifrån vår lokala kunskap på plats har vi delat upp tre realistiska månadsbudgetar (angivna i DKK) så att du tydligt ser vad pengarna räcker till.',
      chooseTierCta: 'Prata med oss om denna budget',
      tiers: [
        {
          code: '01 · Essential',
          name: 'Essential',
          price: '3.000 DKK',
          period: '/mån.',
          tagline: 'En bra vardag till en låg kostnad.',
          items: [
            'En fin, enkel lägenhet i ett prisvärt område.',
            'Möjlighet att äta på lokala restauranger eller warungs varje dag.',
            'Grab för dagliga resor när du behöver det.',
            'Lokala matvaror, mobil och internet.',
            'En enkel livsstil med plats för de viktigaste behoven.',
          ],
          footnote:
            'Förutsätter låg hyra, begränsad transport och främst lokala matställen. Det är en stram budget och alla städer eller lägenheter passar inte in.',
        },
        {
          code: '02 · Comfort',
          name: 'Comfort',
          price: '7.000 DKK',
          period: '/mån.',
          tagline: 'Komfort, flexibilitet och frihet i vardagen.',
          featured: true,
          featuredLabel: 'Mest balanserade val',
          items: [
            'En fin, möblerad lägenhet med luftkonditionering.',
            'Restaurangbesök varje dag, både lokala ställen och utvalda caféer.',
            'Grab/taxi regelbundet utan att behöva tänka på varje enskild resa.',
            'Bra internetuppkoppling och behagliga dagliga ramar.',
            'Utrymme för fritid, shopping och andra personliga utgifter.',
          ],
          footnote:
            'En mer flexibel budget där bostad och läge fortfarande avgör hur mycket extra utrymme du har.',
        },
        {
          code: '03 · Premium',
          name: 'Premium',
          price: '12.000 DKK',
          period: '/mån.',
          tagline: 'En högre levnadsstandard med extra komfort.',
          items: [
            'En modern lägenhet i ett attraktivt område.',
            'Frihet att äta ute dagligen, även på bättre restauranger.',
            'Frekvent användning av Grab och mer flexibel transport.',
            'Budget för träning, caféer, fritidsaktiviteter och shopping.',
            'Mer ekonomiskt utrymme för att njuta av vardagen.',
          ],
          footnote: 'Ger goda möjligheter till komfort samtidigt som man kan spara pengar.',
        },
      ],
      uaeCard: {
        tag: 'Överväger du även Förenade Arabemiraten?',
        title: 'Sharjah, UAE — ett familjevänligt alternativ',
        priceNote: 'Levnadskostnader för ensamstående från ca 7.000 DKK/mån.',
        body: 'Utöver Indonesien vägleder ViaHijrah även kring Sharjah i UAE — ett alkoholfritt, tryggt och familjeorienterat emirat med vackra moskéer i alla kvarter och 0% personlig inkomstskatt.',
        cta: 'Hör om både Indonesien och UAE',
        caption1: 'Strandpromenaden och moské i Sharjah, UAE',
        caption2: 'Kvartersmoské i lugnt bostadsområde i Sharjah',
      },
    },
    noFunds: {
      eyebrow: 'Alla ska kunna ta första steget',
      title: 'Drömmer du om hijrah, men har inga pengar?',
      lead: 'Du behöver inte ha allt på plats för att ta det första steget.',
      question:
        'Har du inget sparande, ingen onlineinkomst eller en ekonomi som just nu gör det svårt att föreställa sig en flytt till ett muslimskt land?',
      answerHighlight: 'Då vill vi ändå gärna höra från dig.',
      body1:
        'Hos ViaHijrah menar vi att brist på ekonomiska medel inte bör hindra dig från att undersöka dina möjligheter.',
      body2:
        'Du är därför välkommen att boka ett samtal med oss även om du inte har pengar att flytta just nu och även om du ännu inte har en onlineinkomst.',
      body3:
        'Vi lyssnar på din situation och gör vårt bästa för att hjälpa dig hitta en realistisk väg framåt — till exempel genom vägledning kring onlineinkomst, sparande, budgetering och de första stegen mot din hijrah.',
      closingLine: 'Du behöver inte ha lösningen idag. Låt oss ta ett samtal om dina möjligheter.',
      cta: 'Boka ett samtal med ViaHijrah',
      disclaimer:
        'Vi kan inte garantera ekonomiskt stöd eller en viss lösning, men vi gör vårt bästa för att vägleda dig.',
    },
    advice: {
      eyebrow: 'Goda råd från oss',
      title: 'Goda råd från oss – innan du gör din hijrah',
      lead: 'Du behöver inte ha ett lyxliv för att börja ett nytt kapitel. Men du bör ha en realistisk plan.',
      intro1:
        'Genom ViaHijrah vill vi inte bara hjälpa människor att undersöka möjligheterna att flytta. Vi vill också dela med oss av de råd vi själva anser är viktiga att tänka igenom inför ett så stort beslut.',
      intro2: 'Här är några av de saker vi rekommenderar att du reflekterar över.',
      expandLabel: 'Läs hela rådet',
      collapseLabel: 'Visa mindre',
      items: [
        {
          num: '01',
          title: 'Lär dig leva enkelt – och få ut mer av dina pengar',
          paragraphs: [
            'Vårt första råd är att du inte behöver vänta tills du har råd med en lyxig livsstil innan du undersöker möjligheten till hijrah.',
            'Om din ekonomi är begränsad kan det vara värt att se om en enklare livsstil passar din situation.',
            'Skandinavisk valuta har i vissa länder en relativt stark köpkraft, vilket kan göra att pengarna räcker längre — beroende på land, stad, boendekostnader och familjens behov.',
            'Vårt råd är enkelt: Planera efter det liv du realistiskt har råd med – inte det liv du hoppas få senare. Samtidigt bör du alltid ha koll på inkomstmöjligheter, utgifter och en buffert för oförutsedda händelser.',
          ],
        },
        {
          num: '02',
          title: 'Minns din intention',
          paragraphs: [
            'Innan du fattar ett stort beslut, fråga dig själv varför du vill göra hijrah.',
            'För vissa handlar det om bättre ramar för sin deen, för andra om barnens uppväxt och en vardag där islam känns mer naturlig.',
            'Låt beslutet vara väl genomtänkt och sök Allahs vägledning genom du’a, istikhara och råd från människor med relevant erfarenhet.',
          ],
        },
        {
          num: '03',
          title: 'Undersök landet innan du bestämmer dig',
          paragraphs: [
            'Ett muslimskt land är inte automatiskt rätt land för alla.',
            'Undersök levnadskostnader, uppehållsregler, boende, sjukförsäkring och försörjning — men också språk, kultur, klimat och hur vardagen faktiskt ser ut.',
            'Det är bättre att känna till utmaningarna på förhand än att bli överraskad efter ankomst.',
          ],
        },
        {
          num: '04',
          title: 'Prioritera din deen och din familj',
          paragraphs: [
            'Tänk inte bara på var du vill bo, utan också på hur du vill leva.',
            'Undersök lokala moskéer, islamiska gemenskaper, undervisning och relevanta skolor om du flyttar med barn — och kom ihåg ditt eget ansvar för att söka kunskap och skapa goda ramar för familjen oavsett land.',
          ],
        },
        {
          num: '05',
          title: 'Vänta inte på det perfekta tillfället – men var ansvarsfull',
          paragraphs: [
            'Det är lätt att vänta på att allt ska bli perfekt, men man bör heller inte resa utan förberedelse.',
            'Börja med att undersöka möjligheterna, skapa en realistisk budget och förstå vilka krav som gäller för din situation.',
          ],
        },
        {
          num: '06',
          title: 'Var beredd på att sakna hemma',
          paragraphs: [
            'Att sakna familj, vänner och det välbekanta livet är helt naturligt och betyder inte att beslutet var fel.',
            'Håll kontakten med dem du håller av och ge dig själv tid att bygga en ny vardag.',
          ],
        },
        {
          num: '07',
          title: 'Ta emot hjälp och fråga dem som kan förhållandena',
          paragraphs: [
            'Du behöver inte undersöka varje fråga helt från noll på egen hand.',
            'Hos ViaHijrah hjälper vi dig att skapa överblick över möjligheterna och förstå de praktiska steg som är relevanta för just din situation.',
          ],
        },
      ],
      reminder: {
        title: 'En påminnelse vi gärna vill dela',
        paragraphs: [
          'Hijrah är ett stort beslut. Det bör varken fattas enbart på känslor eller enbart utifrån ekonomiska beräkningar.',
          'Tänk över din intention, undersök dina möjligheter, ta de praktiska förberedelserna på allvar och sök Allahs vägledning.',
          'Du behöver inte börja med mycket. Du bör börja med omtanke, en realistisk plan och en tydlig förståelse för varför du vill ta detta steg.',
        ],
        cta: 'Låt oss undersöka dina möjligheter tillsammans',
      },
    },
    emotional: {
      eyebrow: 'Den mänskliga sidan av hijrah',
      title: 'Vad kommer du att sakna hemifrån?',
      subtitle: 'Att resa vidare betyder inte att det är lätt att säga farväl.',
      introParagraphs: [
        'Vi vet själva hur det är att ha levt hela sitt liv i Skandinavien. Vi känner till vardagen, kulturen, de välbekanta omgivningarna och människorna som varit en del av våra liv under många år.',
        'Därför vet vi också att tanken på hijrah kan väcka blandade känslor.',
        'Å ena sidan kan det finnas en stark önskan om att skapa en framtid med bättre ramar för sin deen och sin familj. Å andra sidan kan det kännas svårt att föreställa sig att säga hejdå till vänner, familj och kollegor – och till ett liv man känt sedan barnsben.',
        'Kanske har du familj du älskar djupt. Vänner du känt i åratal. Kollegor du träffar varje vecka och små rutiner du aldrig tänkt på att du skulle sakna.',
        'Det är helt naturligt.',
      ],
      pullQuote:
        'Du kan sakna ditt hemland och samtidigt känna att hijrah är rätt steg för din framtid.',
      whySection: {
        title: 'Men varför överväger du hijrah från första början?',
        paragraphs: [
          'Inför ett så stort beslut är det viktigt att minnas sin intention.',
          'För många muslimer handlar hijrah om mer än att byta land. Det handlar om vilka ramar man vill leva i, hur man bäst tar hand om sin deen och vilken miljö man önskar för sina framtida barn.',
          'Det finns inget svar som passar alla. Men om din intention är att söka bättre ramar för din deen och familj är det värt att återvända till den intentionen när beslutet känns svårt.',
        ],
      },
      futureSection: {
        title: 'När man tänker på framtiden',
        intro:
          'Det är ingen hemlighet att många muslimer i Europa känner oro kring islamofobi, diskriminering och samhällsdebatten kring islam.',
        questionsIntro:
          'När man samtidigt tänker på sina framtida barn är det naturligt att ställa sig frågor:',
        questions: [
          'Vilken miljö vill jag att mina barn ska växa upp i?',
          'Hur kan jag bäst stärka dem i deras islamiska identitet?',
          'Vill jag bo på en plats där det känns naturligare att praktisera islam i vardagen?',
          'Vilka ramar önskar jag för min egen utveckling och min familjs framtid?',
        ],
        outro1: 'För många blir dessa frågor en viktig del av tankarna kring hijrah.',
        outro2:
          'Vi kan inte förutsäga framtiden och inget land är utan utmaningar, men det är helt legitimt att tänka igenom sin omgivning och den framtid man vill bygga.',
        highlightQuote:
          'Det handlar inte nödvändigtvis om att vända ryggen åt Skandinavien. Det handlar om var och hur du vill bygga din framtid.',
      },
      homesickSection: {
        title: 'Vad gör du när du börjar sakna dem därhemma?',
        intro:
          'Hemlängtan kan komma även när man är glad över sitt beslut. Därför är det viktigt att förbereda sig på den mänskliga sidan av flytten.',
        cards: [
          {
            title: 'Håll kontakten med dem du håller av.',
            body: 'Att flytta betyder inte att dina relationer upphör. Planera samtal och vårda de band som betyder mycket för dig.',
          },
          {
            title: 'Ge dig själv tid att landa.',
            body: 'Du behöver inte känna dig hemma från dag ett. Nya omgivningar och nya rutiner tar tid.',
          },
          {
            title: 'Bygg en ny gemenskap.',
            body: 'Besök lokala moskéer, islamiska aktiviteter och mötesplatser för att bygga nya relationer i vardagen.',
          },
          {
            title: 'Minns din intention.',
            body: 'När du saknar det välbekanta hjälper det att minnas varför du började överväga hijrah. Ge plats åt saknaden samtidigt som du håller fast vid dina värderingar.',
          },
        ],
      },
      closingSection: {
        thoughtfulTitle: 'Ett beslut som förtjänar omtanke',
        thoughtfulParagraphs: [
          'Vi vill inte framställa hijrah som en lösning på livets alla problem. En flytt kräver förberedelse, tålamod och realistiska förväntningar.',
          'Du behöver inte fatta beslutet i brådska. Undersök möjligheterna och skapa en realistisk grund innan du bestämmer dig.',
        ],
        boldReminder:
          'Låt inte rädsla ensam fatta beslutet åt dig – men låt inte heller rädslan för förändring hindra dig från att undersöka de möjligheter du uppriktigt överväger.',
        duaReminder:
          'Ta dig tid att förstå din situation, förnya din intention, sök vägledning och be Allah leda dig till det som är bäst för din deen och ditt liv.',
        moreThanMoveTitle: 'Vi förstår att det är mer än en flytt',
        moreThanMoveBody1:
          'Hos ViaHijrah vill vi hjälpa dig med både de praktiska frågorna och de större tankarna kring att planera ett nytt liv i ett annat land.',
        moreThanMoveBody2: 'Du behöver inte ha alla svar från början.',
        finalStepLine: 'Börja med att undersöka dina möjligheter – ett steg i taget, in sha Allah.',
        cta: 'Låt oss prata om din hijrah',
      },
    },
    consultation: {
      eyebrow: 'Inledande samtal',
      title: 'Låt oss prata i lugn och ro om din situation.',
      subtitle:
        'Oavsett om du är redo att planera konkret eller bara vill få en ärlig överblick börjar vi med ett förutsättningslöst samtal i din takt.',
      expectTitle: 'Vad du kan förvänta dig av samtalet',
      expectItems: [
        {
          title: 'Ingen press eller säljsnack',
          body: 'Vi lyssnar på din livssituation, dina tankar och vad som är viktigast för dig och din familj.',
        },
        {
          title: 'Ärlig inblick i kostnader, boende och visum',
          body: 'Du får realistisk kunskap om levnadskostnader, uppehållsmöjligheter och hur våra lokala agenter hjälper med lägenheter.',
        },
        {
          title: 'Klarhet kring ditt nästa steg',
          body: 'Du lämnar samtalet med lugn och en tydligare bild av vad som är rimligt härnäst — även om du börjar utan sparande.',
        },
      ],
      directContactTitle: 'Du kan också skriva direkt till oss',
      form: {
        step1Badge: 'Steg 1 av 2 · Kort introduktion',
        step2Badge: 'Steg 2 av 2 · Välj tid',
        title: 'Boka ett samtal med ViaHijrah',
        subtitle: 'Berätta kort var du befinner dig så att vi kan förbereda oss inför samtalet.',
        nameLabel: 'Ditt namn',
        namePlaceholder: 'T.ex. Ahmad eller familj',
        emailLabel: 'E-post',
        emailPlaceholder: 'din@email.se',
        phoneLabel: 'Telefon eller WhatsApp (valfritt)',
        phonePlaceholder: '+46 ...',
        situationLabel: 'Vad stämmer bäst in på din situation just nu?',
        situationOptions: {
          exploring: 'Jag undersöker möjligheterna och vill få överblick',
          indonesiaEssential: 'Indonesien · 01 Essential (3.000 DKK/mån.)',
          indonesiaComfort: 'Indonesien · 02 Comfort (7.000 DKK/mån.)',
          indonesiaPremium: 'Indonesien · 03 Premium (12.000 DKK/mån.)',
          uaeSharjah: 'Sharjah, UAE (Från 7.000 DKK/mån.)',
          noFundsYet: 'Inget sparande / onlineinkomst ännu — söker vägledning',
        },
        messageLabel: 'Är det något särskilt du vill ta upp? (valfritt)',
        messagePlaceholder: 'Skriv gärna några ord om dina tankar, familj, boende eller frågor...',
        continueToTimeBtn: 'Fortsätt till val av tid',
        privacyNote: 'Dina uppgifter behandlas konfidentiellt och med amanah.',
        editDetailsBtn: 'Tillbaka till uppgifter',
        pickDayLabel: 'Välj en dag som passar dig',
        pickTimeLabel: 'Välj tid (skandinavisk tid)',
        confirmBtn: 'Bekräfta samtal',
        openCalendlyBtn: 'Öppna direkt i Calendly',
        confirmedTitle: 'JazakAllahu khayran — din förfrågan är mottagen.',
        confirmedBody:
          'Vi har noterat din önskade tid och återkommer via e-post eller WhatsApp inom kort, in sha Allah.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – från Skandinavien till den muslimska världen. Med din deen i centrum.',
      description:
        'Personlig och praktisk vägledning kring hijrah, levnadskostnader, uppehållsmöjligheter och bostad genom våra lokala kontakter.',
      linksTitle: 'På sidan',
      contactTitle: 'Kontakt',
      transparency:
        'ViaHijrah vägleder och förmedlar praktisk överblick samt kontakt med lokala samarbetspartners. Regler, visumbeslut och boendevillkor beror alltid på myndigheter, aktörer och individuella omständigheter.',
      copyright: '© 2026 ViaHijrah. Alla rättigheter förbehållna.',
    },
  },

  /* ==========================================================================
     ENGLISH (EN) — Warm, Sincere English Translation
     ========================================================================== */
  en: {
    langName: 'English',
    langFlag: '🇬🇧',
    nav: {
      offer: 'How we help',
      steps: 'Step by step',
      budgets: 'Budgets',
      advice: 'Our advice',
      reflection: 'Leaving home',
      bookCta: 'Book a call',
      mobileDock: {
        steps: 'Steps',
        budgets: 'Budgets',
        advice: 'Advice',
        book: 'Book call',
      },
    },
    hero: {
      eyebrow: 'ViaHijrah · From Scandinavia to the Muslim world',
      headline: 'Tired of hostility toward Muslims, handshake debates, and closed prayer rooms?',
      lead: 'Tired of constantly having to explain or defend your faith in a society where the public debate around Muslims takes up more and more space?',
      pivotTitle: 'Perhaps it is time to consider a new chapter.',
      pivotBody:
        'Imagine an everyday life where Islam is a natural part of society, where mosques belong to the neighborhood, and where you can prioritize your deen and build your future in a Muslim country.',
      primaryCta: 'Book an introductory conversation',
      secondaryCta: 'See your hijrah step by step',
      galleryCaptions: {
        mosque: 'Mosque architecture · Sharjah, UAE',
        waterfront: 'Waterfront & mosque · Sharjah, UAE',
        residence: 'Peaceful residential living',
      },
      photoCaptionTitle: 'People on the ground & local apartment access',
      photoCaptionBody:
        'We have access to apartments you can rent with our local agents — and we review and check everything together with you.',
      welcomeTitle: 'Welcome to a new opportunity. Welcome to the Muslim world.',
      welcomeBody:
        'ViaHijrah helps you plan your hijrah from Scandinavia to new opportunities in the Muslim world. From business setup, residency permits, and housing to practical move planning, we help you gain clarity over the entire journey.',
      planQuote: 'Your hijrah deserves more than a dream. It deserves a plan.',
      planBody:
        'Wherever you dream of settling down, your move deserves to be planned with care, structure, and your deen at the center.',
      signature: 'ViaHijrah – from Scandinavia to the Muslim world. With your deen at the center.',
    },
    whatWeOffer: {
      eyebrow: 'More than information alone',
      title: 'You do not have to figure everything out on your own.',
      subtitle:
        'ViaHijrah is not just a website with general articles about moving abroad. We use our people on the ground, local contacts, and honest insight into living costs to help you move from an initial idea to a realistic plan.',
      cards: [
        {
          num: '01',
          title: 'People on the ground & local knowledge',
          body: 'We have people on the ground in Indonesia with real insight into prices, neighborhoods, and living costs — helping you understand what life there realistically looks like.',
        },
        {
          num: '02',
          title: 'Apartments through our local agents',
          body: 'We have access to apartments which you can rent through our local real estate agents, and we check everything together with you so you never navigate an unfamiliar market alone.',
        },
        {
          num: '03',
          title: 'Honest guidance without empty promises',
          body: 'From understanding your budget and visa pathways to preparing before departure, we only promise services we can genuinely deliver.',
        },
      ],
      apartmentCallout: {
        tag: 'Reassurance around housing',
        title: 'We have access to apartments you can rent with our local agents — and we check everything with you.',
        body: 'Finding housing in an unfamiliar country is often the biggest worry for relocating families. Through our local contacts and real estate agents, we help you explore suitable neighborhoods, understand realistic rent levels, and check practical details together.',
        note: 'Specific housing assistance depends on the destination and the service agreed upon with you.',
      },
    },
    journey: {
      eyebrow: 'What to expect',
      title: 'Your hijrah – step by step',
      lead1:
        'Moving to a new country can feel overwhelming, especially when weighing housing, visas, finances, and your family’s future all at once.',
      lead2:
        'At ViaHijrah, we help you gain clarity over the process and understand the practical steps ahead. You do not need to have all the answers from the start — we help you explore your options and identify what your next step should be.',
      expandLabel: 'Read details',
      collapseLabel: 'Show less',
      steps: [
        {
          num: '01',
          label: 'Step 1',
          title: 'We start with your situation',
          summary: 'First, we get to know you and your needs.',
          paragraphs: [
            'Everyone has personal reasons for considering hijrah. Some seek a healthier environment for their family and children’s Islamic upbringing, while others want daily surroundings aligned with their values.',
            'We discuss your current situation, goals, finances, and expectations so we can assess which options are genuinely relevant for you.',
          ],
        },
        {
          num: '02',
          label: 'Step 2',
          title: 'We explore the right destination',
          summary: 'Find a country suited to your needs and circumstances.',
          paragraphs: [
            'We help examine suitable destinations and the practical differences between them — living costs, residency pathways, housing, income, and everyday family life.',
            'Our aim is to give you a realistic foundation for making an informed decision.',
          ],
        },
        {
          num: '03',
          label: 'Step 3',
          title: 'We build financial clarity',
          summary: 'Plan your hijrah around a realistic budget.',
          paragraphs: [
            'A thoughtful move requires understanding financial realities before departing.',
            'We review everyday costs such as rent, food, transport, and utilities alongside your current savings and income plans.',
          ],
        },
        {
          num: '04',
          label: 'Step 4',
          title: 'Visas and residency options',
          summary: 'Understand the practical requirements for relocating.',
          paragraphs: [
            'Visa and residency rules vary by country and depend on your circumstances and purpose of stay.',
            'We help you understand which options to explore, what requirements may apply, and which next steps to keep in mind.',
          ],
        },
        {
          num: '05',
          label: 'Step 5',
          title: 'Housing: You do not have to search alone',
          summary: 'We help you understand the housing market and where to begin.',
          highlightTag: 'Local contacts & real estate agents',
          paragraphs: [
            'Finding a home in a new country is often one of the greatest concerns when you do not know the area, language, or local market.',
            'At ViaHijrah, we have local contacts — including real estate agents — and access to apartments you can rent with our local agents, checking everything together with you.',
            'You do not have to start from zero or navigate an unfamiliar rental market without direction.',
          ],
          highlightNote:
            'Specific support depends on the destination and agreed service. While we cannot guarantee a specific property or price, our goal is to make the process clear and reassuring.',
        },
        {
          num: '06',
          label: 'Step 6',
          title: 'Work, income, and business',
          summary: 'Build a sustainable foundation for your future.',
          paragraphs: [
            'Whether you plan to work remotely, continue an existing business, or establish a new company, we help clarify the practical questions, local rules, and setup costs to examine beforehand.',
          ],
        },
        {
          num: '07',
          label: 'Step 7',
          title: 'Preparation before departure',
          summary: 'Organize the essentials before you travel.',
          paragraphs: [
            'Once core decisions come together, we help create a concrete plan around documents, budgeting, housing preparation, residency steps, and preparing your family.',
          ],
        },
        {
          num: '08',
          label: 'Step 8',
          title: 'Arrival and settling in',
          summary: 'A new beginning also requires practical planning.',
          paragraphs: [
            'Before departure, we make sure you understand what needs to be arranged after arrival, which local options exist, and where ViaHijrah can assist.',
          ],
        },
      ],
      closing: {
        title: 'You do not need to have everything figured out from day one.',
        body1:
          'Hijrah is a major life decision, and having questions about finances, housing, visas, and the future is completely natural.',
        body2:
          'ViaHijrah is here to help you explore your possibilities and gain practical clarity so you can decide on an informed foundation.',
        readyTitle: 'Ready to take the first step?',
        readyBody:
          'Book an introductory conversation where we discuss your situation, your goals, and the pathways relevant to you.',
        cta: 'Book an introductory conversation',
        transparencyNote:
          'We are always transparent about what we can assist with directly and what depends on external providers, official authorities, or personal circumstances.',
      },
    },
    budgets: {
      eyebrow: 'Realistic living costs · Indonesia',
      title: 'What does everyday life cost in Indonesia?',
      subtitle:
        'Using our on-the-ground local knowledge, we have mapped out three realistic monthly budgets (shown in DKK) so you know what each lifestyle includes.',
      chooseTierCta: 'Discuss this budget with us',
      tiers: [
        {
          code: '01 · Essential',
          name: 'Essential',
          price: '3.000 DKK',
          period: '/mo.',
          tagline: 'A good everyday life at a low price.',
          items: [
            'A nice, simple apartment in an affordable area.',
            'Ability to eat at local restaurants or warungs every day.',
            'Grab rides for daily trips when needed.',
            'Local groceries, mobile plan, and internet.',
            'A simple lifestyle covering the most important essentials.',
          ],
          footnote:
            'Assumes low rent, limited transport, and primarily local dining spots. It is a tight budget, and not every city or apartment will fit within it.',
        },
        {
          code: '02 · Comfort',
          name: 'Comfort',
          price: '7.000 DKK',
          period: '/mo.',
          tagline: 'Comfort, flexibility, and freedom in everyday life.',
          featured: true,
          featuredLabel: 'Most flexible choice',
          items: [
            'A well-kept, furnished apartment with air conditioning.',
            'Restaurant visits every day, both local places and selected cafés.',
            'Regular Grab/taxi rides without worrying about every trip.',
            'Reliable internet connection and comfortable daily surroundings.',
            'Room for leisure, shopping, and personal expenses.',
          ],
          footnote:
            'A more flexible budget where housing choice and location still determine how much extra room you keep.',
        },
        {
          code: '03 · Premium',
          name: 'Premium',
          price: '12.000 DKK',
          period: '/mo.',
          tagline: 'A higher standard of living with extra comfort.',
          items: [
            'A modern apartment in an attractive neighborhood.',
            'Freedom to dine out daily, including at nicer restaurants.',
            'Frequent Grab usage and more flexible transportation.',
            'Budget for fitness, cafés, leisure activities, and shopping.',
            'Greater financial breathing room to enjoy daily life.',
          ],
          footnote: 'Offers strong everyday comfort while also leaving room to save up.',
        },
      ],
      uaeCard: {
        tag: 'Also considering the United Arab Emirates?',
        title: 'Sharjah, UAE — a family-focused alternative',
        priceNote: 'Solo living benchmark from approx. 7.000 DKK/mo.',
        body: 'Alongside Indonesia, ViaHijrah also advises on Sharjah in the UAE — an alcohol-free, safe, family-centered emirate with beautiful neighborhood mosques and 0% personal income tax.',
        cta: 'Discuss both Indonesia and UAE',
        caption1: 'Waterfront promenade and mosque in Sharjah, UAE',
        caption2: 'Neighborhood masjid in a quiet Sharjah community',
      },
    },
    noFunds: {
      eyebrow: 'Everyone should be able to take the first step',
      title: 'Dreaming of hijrah, yet have no money right now?',
      lead: 'You do not need to have everything in place to take the first step.',
      question:
        'Do you have no savings, no online income, or a financial situation right now that makes moving to a Muslim country hard to imagine?',
      answerHighlight: 'We would still love to hear from you.',
      body1:
        'At ViaHijrah, we believe a lack of financial means should not prevent you from exploring your possibilities.',
      body2:
        'You are welcome to book a conversation with us even if you do not have the money to move right now, and even if you do not yet have an online income.',
      body3:
        'We will listen to your situation and do our best to help you find a realistic path forward — for example through guidance on online income, saving, budgeting, and the first steps toward your hijrah.',
      closingLine: 'You do not need to have the solution today. Let us talk about your options.',
      cta: 'Book a conversation with ViaHijrah',
      disclaimer:
        'We cannot guarantee financial support or a specific outcome, but we will do our very best to guide you.',
    },
    advice: {
      eyebrow: 'Practical advice from us',
      title: 'Our advice – before taking your hijrah',
      lead: 'You do not need a luxury lifestyle to begin a new chapter. Yet you should have a realistic plan.',
      intro1:
        'Through ViaHijrah, we do not only want to help people explore practical relocation options. We also wish to share the reflections we believe are essential before making such a major life decision.',
      intro2: 'Here are some of the lessons we sincerely recommend thinking over.',
      expandLabel: 'Read full advice',
      collapseLabel: 'Show less',
      items: [
        {
          num: '01',
          title: 'Learn to live simply – and make your money go further',
          paragraphs: [
            'Our first piece of advice is that you do not need to wait until you can afford luxury before exploring the possibility of hijrah.',
            'In certain countries, Danish kroner carry comparatively strong purchasing power — depending heavily on the country, city, housing choice, and family needs.',
            'Start with essentials: suitable housing, food, transport, and a realistic financial buffer. Plan around the life you can realistically afford today — not the lifestyle you hope to reach later — while carefully verifying income, total expenses, and emergency reserves beforehand.',
          ],
        },
        {
          num: '02',
          title: 'Remember your intention',
          paragraphs: [
            'Before making a major decision, ask yourself why you wish to make hijrah.',
            'Whether for your deen, your children’s upbringing, or living where Islam feels natural in daily life, know your own reasons and return to them along the journey.',
            'Keep the decision deliberate, seeking Allah’s guidance through du’a, istikhara, and counsel from experienced people.',
          ],
        },
        {
          num: '03',
          title: 'Research the country before deciding',
          paragraphs: [
            'A Muslim country is not automatically the right fit for everyone.',
            'Examine living costs, residency rules, housing, healthcare, and livelihood alongside language, culture, climate, and real daily routines so you know challenges beforehand rather than after arriving.',
          ],
        },
        {
          num: '04',
          title: 'Prioritize your deen and your family',
          paragraphs: [
            'Think not only about where you want to live, but how you intend to live.',
            'Explore local mosques, Islamic communities, learning opportunities, and schools if moving with children — remembering that seeking knowledge and nurturing your family remains your personal responsibility wherever you live.',
          ],
        },
        {
          num: '05',
          title: 'Do not wait for the perfect moment – yet remain responsible',
          paragraphs: [
            'Waiting forever for perfection is easy, yet leaving unprepared is unwise.',
            'Begin by exploring options, building a realistic budget, and learning the requirements relevant to your situation. You do not need every answer today, only clarity on the most important questions before deciding.',
          ],
        },
        {
          num: '06',
          title: 'Be prepared to miss home',
          paragraphs: [
            'Missing family, friends, colleagues, and familiar surroundings is completely natural and does not mean you made the wrong decision.',
            'Stay connected with loved ones and give yourself patience to build a new everyday rhythm.',
          ],
        },
        {
          num: '07',
          title: 'Accept support and ask those who know the ground realities',
          paragraphs: [
            'You do not have to piece together every detail from scratch alone.',
            'Speak with people experienced in your chosen destination, verify official requirements, and use ViaHijrah to build a clear overview of the steps relevant to your situation.',
          ],
        },
      ],
      reminder: {
        title: 'A reminder we wish to share',
        paragraphs: [
          'Hijrah is a major decision. It should neither be made purely on emotion nor solely on financial calculations.',
          'Reflect on your intention, research your options, take practical realities seriously, and ask Allah for guidance.',
          'You do not need much to begin. You should begin with care, a realistic plan, and clear understanding of why you wish to take this step.',
        ],
        cta: 'Let us explore your options together',
      },
    },
    emotional: {
      eyebrow: 'The emotional side of hijrah',
      title: 'What will you miss from home?',
      subtitle: 'Moving forward does not mean saying goodbye is easy.',
      introParagraphs: [
        'We have lived our entire lives in Denmark ourselves. We know the daily rhythm, the culture, the familiar streets, and the people who have been part of our lives for years.',
        'That is why we also know that thinking about hijrah brings mixed emotions.',
        'On one hand, there may be a deep wish to build a future with stronger surroundings for your deen and family. On the other hand, imagining saying goodbye to friends, family, and colleagues — and a life known since childhood — can feel heavy.',
        'Perhaps you have family you love dearly, lifelong friends, colleagues you see every week, and small everyday routines you never realized you would miss.',
        'That is completely natural.',
      ],
      pullQuote:
        'You can miss Denmark and still feel that hijrah is the right step for your future.',
      whySection: {
        title: 'Why are you considering hijrah in the first place?',
        paragraphs: [
          'When facing such a meaningful decision, remembering your intention matters.',
          'For many Muslims, hijrah is about more than changing countries. It is about choosing the environment in which you live, protecting your deen, and thinking about the surroundings in which you hope to raise your children.',
          'There is no single answer that fits everyone. Yet if your intention is to seek better surroundings for your deen and family, returning to that intention brings clarity when the decision feels difficult.',
        ],
      },
      futureSection: {
        title: 'When thinking about the future',
        intro:
          'It is no secret that many Muslims in Europe carry concerns about Islamophobia, discrimination, and the tone of public debate around Islam.',
        questionsIntro:
          'When thinking about future children, many naturally ask themselves:',
        questions: [
          'What kind of environment do I want my children to grow up in?',
          'How can I best support them in their Islamic identity?',
          'Would I like to live somewhere practicing Islam feels natural in daily life?',
          'What surroundings do I want for my own growth and my family’s future?',
        ],
        outro1: 'For some, these questions become an important part of considering hijrah.',
        outro2:
          'No one can predict the future, and no country is without challenges. Yet thinking carefully about your environment, values, and future is completely legitimate.',
        highlightQuote:
          'It is not necessarily about turning your back on Denmark. It is about considering where and how you wish to build your future.',
      },
      homesickSection: {
        title: 'What do you do when you start missing people back home?',
        intro:
          'Homesickness can arise even when you are happy with your decision. Preparing for the human side of relocation matters.',
        cards: [
          {
            title: 'Stay close to the people you love.',
            body: 'Moving abroad does not mean ending relationships. Schedule regular calls and intentionally nurture the bonds that matter to you.',
          },
          {
            title: 'Give yourself time to settle in.',
            body: 'You do not need to feel completely at home on day one. New surroundings and new routines naturally take time.',
          },
          {
            title: 'Build a new local community.',
            body: 'Visit neighborhood mosques, Islamic gatherings, and community spaces to meet fellow Muslims and feel grounded in daily life.',
          },
          {
            title: 'Remember your intention.',
            body: 'When you miss what is familiar, remember why you began considering hijrah — giving yourself grace to miss home while holding firm to your values.',
          },
        ],
      },
      closingSection: {
        thoughtfulTitle: 'A decision that deserves reflection',
        thoughtfulParagraphs: [
          'We do not portray hijrah as a cure for all of life’s challenges. Moving to a new country takes preparation, patience, and realistic expectations.',
          'You do not have to decide in haste. Take time to explore your options, ask questions, and build a realistic foundation first.',
        ],
        boldReminder:
          'Do not let fear alone make the decision for you — yet do not let fear of change stop you from exploring the possibilities you sincerely consider.',
        duaReminder:
          'Take time to understand your situation, renew your intention, seek counsel, and ask Allah to guide you toward what is best for your deen and your life.',
        moreThanMoveTitle: 'We understand this is more than a move',
        moreThanMoveBody1:
          'At ViaHijrah, we want to support you through both the practical questions and the deeper reflections of planning a new life abroad.',
        moreThanMoveBody2: 'You do not need to have every answer at the beginning.',
        finalStepLine: 'Begin by exploring your options — one step at a time, in sha Allah.',
        cta: 'Let us talk about your hijrah',
      },
    },
    consultation: {
      eyebrow: 'Introductory conversation',
      title: 'Let us talk calmly about your situation and options.',
      subtitle:
        'Whether you are ready to map out concrete steps or simply want an honest overview, we start with a relaxed, non-binding conversation at your pace.',
      expectTitle: 'What to expect from our conversation',
      expectItems: [
        {
          title: 'Zero pressure or sales pitch',
          body: 'We listen to your situation, your thoughts, and what matters most to you and your family.',
        },
        {
          title: 'Honest insight into budgets, housing & visas',
          body: 'Gain realistic clarity on living costs, residency options, and how our local agents help check apartments with you.',
        },
        {
          title: 'Clarity on your very next step',
          body: 'Leave the call with peace of mind and a clear sense of what makes sense next — even if starting with zero savings.',
        },
      ],
      directContactTitle: 'You can also reach out directly',
      form: {
        step1Badge: 'Step 1 of 2 · Brief introduction',
        step2Badge: 'Step 2 of 2 · Choose a time',
        title: 'Book a conversation with ViaHijrah',
        subtitle: 'Share a brief note on where you stand so we can prepare thoughtfully for our call.',
        nameLabel: 'Your name',
        namePlaceholder: 'e.g. Ahmad or family',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone or WhatsApp (optional)',
        phonePlaceholder: '+45 ...',
        situationLabel: 'Which best describes your current situation?',
        situationOptions: {
          exploring: 'Exploring possibilities and seeking an overview',
          indonesiaEssential: 'Indonesia · 01 Essential (3.000 DKK/mo.)',
          indonesiaComfort: 'Indonesia · 02 Comfort (7.000 DKK/mo.)',
          indonesiaPremium: 'Indonesia · 03 Premium (12.000 DKK/mo.)',
          uaeSharjah: 'Sharjah, UAE (From 7.000 DKK/mo.)',
          noFundsYet: 'No savings / online income yet — seeking first-step guidance',
        },
        messageLabel: 'Anything specific on your mind? (optional)',
        messagePlaceholder: 'Feel free to share a few words about your family, housing questions, or thoughts...',
        continueToTimeBtn: 'Continue to select a time',
        privacyNote: 'Your details are kept strictly confidential with full amanah.',
        editDetailsBtn: 'Back to details',
        pickDayLabel: 'Pick a day that suits you',
        pickTimeLabel: 'Pick a time (CET)',
        confirmBtn: 'Confirm conversation',
        openCalendlyBtn: 'Open directly in Calendly',
        confirmedTitle: 'JazakAllahu khayran — your request has been received.',
        confirmedBody:
          'We have noted your preferred time and will follow up via email or WhatsApp shortly, in sha Allah.',
      },
    },
    footer: {
      tagline: 'ViaHijrah – from Scandinavia to the Muslim world. With your deen at the center.',
      description:
        'Personal and practical guidance on hijrah, realistic living costs, residency pathways, and housing alongside our local contacts.',
      linksTitle: 'Sections',
      contactTitle: 'Contact',
      transparency:
        'ViaHijrah provides practical guidance, planning clarity, and introductions to local contacts. Official visa approvals, regulations, and rental terms always depend on relevant authorities, providers, and individual circumstances.',
      copyright: '© 2026 ViaHijrah. All rights reserved.',
    },
  },
};
