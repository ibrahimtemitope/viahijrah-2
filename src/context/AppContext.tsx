import React, { createContext, useContext, useEffect, useState } from 'react';
import { CorridorId, CurrencyCode } from '../config/budgetData';
import { LanguageCode, TRANSLATIONS, TranslationContent } from '../config/translations';

export type SituationKey =
  | 'exploring'
  | 'sharjahUae'
  | 'indonesiaEssential'
  | 'indonesiaComfort'
  | 'indonesiaPremium'
  | 'noFundsYet';

interface AppContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationContent;
  activeCorridor: CorridorId;
  setActiveCorridor: (c: CorridorId) => void;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  selectedSituation: SituationKey;
  setSelectedSituation: (key: SituationKey) => void;
  jumpToBudgetCorridor: (corridor: CorridorId) => void;
  scrollToBookingWithSituation: (key?: SituationKey) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const LANG_STORAGE_KEY = 'viahijrah_lang';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY) as LanguageCode | null;
      if (saved && (saved === 'da' || saved === 'sv' || saved === 'en')) {
        return saved;
      }
    }
    return 'da';
  });

  const [activeCorridor, setActiveCorridor] = useState<CorridorId>('sharjah');
  const [currency, setCurrencyState] = useState<CurrencyCode>(() =>
    language === 'sv' ? 'SEK' : 'DKK'
  );
  const [currencyOverridden, setCurrencyOverridden] = useState(false);
  const [selectedSituation, setSelectedSituation] = useState<SituationKey>('exploring');

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    if (!currencyOverridden) {
      setCurrencyState(lang === 'sv' ? 'SEK' : 'DKK');
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  };

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyOverridden(true);
    setCurrencyState(c);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const jumpToBudgetCorridor = (corridor: CorridorId) => {
    setActiveCorridor(corridor);
    const el = document.getElementById('budget-analyzer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToBookingWithSituation = (key?: SituationKey) => {
    if (key) {
      setSelectedSituation(key);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        activeCorridor,
        setActiveCorridor,
        currency,
        setCurrency,
        selectedSituation,
        setSelectedSituation,
        jumpToBudgetCorridor,
        scrollToBookingWithSituation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
