import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer
      id="site-footer"
      className="border-t border-ivory-300 bg-ivory-100 pb-24 pt-12 lg:pb-12"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src={SITE_CONFIG.logos.lightMode}
              alt={SITE_CONFIG.logos.alt}
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-md text-[15px] font-medium text-navy-900">
              {t.footer.tagline}
            </p>
            <p className="mt-1.5 max-w-md text-[14px] text-ink-soft">
              {t.footer.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-navy-900">
              {t.footer.linksTitle}
            </h3>
            <ul className="mt-3 space-y-1.5 text-[14px] text-ink-soft">
              <li>
                <a href="#destinationer" className="hover:text-navy-900">
                  {t.nav.destinations}
                </a>
              </li>
              <li>
                <a href="#budget-analyzer" className="hover:text-navy-900">
                  {t.nav.budgets}
                </a>
              </li>
              <li>
                <a href="#ingen-opsparing" className="hover:text-navy-900">
                  {t.nav.noFunds}
                </a>
              </li>
              <li>
                <a href="#proces" className="hover:text-navy-900">
                  {t.nav.steps}
                </a>
              </li>
              <li>
                <a href="#gode-raad" className="hover:text-navy-900">
                  {t.nav.advice}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-navy-900">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-3 space-y-1.5 text-[14px] text-ink-soft">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-navy-900"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="text-[13.5px] text-ink-muted">
                {SITE_CONFIG.contact.baseRegion}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-ivory-300 pt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[12.5px] text-ink-muted">
          <p>{t.footer.transparency}</p>
          <p className="shrink-0">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
