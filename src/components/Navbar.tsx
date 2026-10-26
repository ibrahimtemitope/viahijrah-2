import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { LanguageCode, TRANSLATIONS } from '../config/translations';
import { useApp } from '../context/AppContext';

const LANGUAGE_ORDER: LanguageCode[] = ['da', 'sv', 'en'];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, scrollToBookingWithSituation } = useApp();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { href: '#destinationer', label: t.nav.destinations },
    { href: '#budget-analyzer', label: t.nav.budgets },
    { href: '#ingen-opsparing', label: t.nav.noFunds },
    { href: '#proces', label: t.nav.steps },
    { href: '#gode-raad', label: t.nav.advice },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ivory-300/80 bg-ivory-50/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0 focus:outline-none" aria-label={SITE_CONFIG.brandName}>
          <img
            src={SITE_CONFIG.logos.lightMode}
            alt={SITE_CONFIG.logos.alt}
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <nav
          className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[14px] font-medium text-ink-soft transition-colors hover:text-navy-900 xl:text-[14.5px]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-expanded={langMenuOpen}
              aria-label="Skift sprog / Change language"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-ivory-300 bg-white px-3 text-[13px] font-semibold text-navy-900 transition-colors hover:border-ivory-400"
            >
              <Globe className="h-3.5 w-3.5 text-sage-700" />
              <span>{TRANSLATIONS[language].langFlag}</span>
              <span className="uppercase">{language}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-ink-muted transition-transform ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl border border-ivory-300 bg-white py-1.5 shadow-warm-md">
                {LANGUAGE_ORDER.map((code) => {
                  const active = code === language;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setLanguage(code);
                        setLangMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-[14px] transition-colors ${
                        active
                          ? 'bg-sage-50 font-semibold text-sage-800'
                          : 'font-medium text-ink-soft hover:bg-ivory-100 hover:text-navy-900'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{TRANSLATIONS[code].langFlag}</span>
                        <span>{TRANSLATIONS[code].langName}</span>
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-ink-muted">
                        {code}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => scrollToBookingWithSituation('exploring')}
            className="hidden whitespace-nowrap rounded-full bg-sage-700 px-5 py-2.5 text-[14px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800 sm:inline-flex"
          >
            {t.nav.bookCta}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Luk menu' : 'Åbn menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300 bg-white text-navy-900 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-ivory-300 bg-ivory-50 px-5 py-4 lg:hidden">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[16px] font-medium text-navy-900 transition-colors hover:bg-ivory-200/70"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-3 border-t border-ivory-300/80 pt-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToBookingWithSituation('exploring');
              }}
              className="w-full rounded-full bg-sage-700 px-5 py-3 text-center text-[15px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
            >
              {t.nav.bookCta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
