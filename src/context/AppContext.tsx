import React, { createContext, useContext, useEffect, useState } from 'react';
import { LanguageCode, TRANSLATIONS, TranslationContent } from '../config/translations';

export type SituationKey =
  | 'exploring'
  | 'indonesiaEssential'
  | 'indonesiaComfort'
  | 'indonesiaPremium'
  | 'uaeSharjah'
  | 'noFundsYet';

interface AppContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationContent;
  selectedSituation: SituationKey;
  setSelectedSituation: (key: SituationKey) => void;
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

  const [selectedSituation, setSelectedSituation] = useState<SituationKey>('exploring');

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
        selectedSituation,
        setSelectedSituation,
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
